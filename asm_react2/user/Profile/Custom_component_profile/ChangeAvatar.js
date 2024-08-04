import { StyleSheet, Text, View, ToastAndroid,PermissionsAndroid, Button ,Platform} from 'react-native';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector để lấy user từ Redux
import { capnhatProfile } from '../../../rtk/API';

const ChangeAvatar = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.app.user); // Lấy thông tin người dùng từ Redux

     // Hàm yêu cầu quyền camera
     const requestCameraPermission = async () => {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Quyền truy cập camera',
                        message: 'Ứng dụng cần quyền truy cập camera để chụp ảnh',
                        buttonNeutral: 'Hỏi tôi sau',
                        buttonNegative: 'Hủy',
                        buttonPositive: 'Đồng ý',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Quyền camera đã được cấp');
                    return true;
                } else {
                    console.log('Quyền camera bị từ chối');
                    ToastAndroid.show('Quyền camera bị từ chối', ToastAndroid.SHORT);
                    return false;
                }
            }
        } catch (err) {
            console.warn(err);
            return false;
        }
    };
    const uploadImage = async (image) => {
        try {
            const data = new FormData();
            data.append('file', {
                uri: image.uri,
                type: image.type,
                name: image.fileName,
            });
            data.append('upload_preset', 'ml_default');
            
            const response = await axios.post('https://api.cloudinary.com/v1_1/ddbolgs7p/image/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const imageUrl = response.data.secure_url;
    
            // Cập nhật thông tin người dùng với avatar mới
            if (user && user.email) {
                await dispatch(capnhatProfile({ email: user.email, avatar: imageUrl })).unwrap();
                ToastAndroid.show('Đã cập nhật ảnh đại diện', ToastAndroid.SHORT);
                navigation.goBack();
            } else {
                ToastAndroid.show('Thông tin người dùng không có', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log('uploadImage -> ', error.response ? error.response.data : error.message);
            ToastAndroid.show('Lỗi khi tải ảnh lên', ToastAndroid.SHORT);
        }
    };

    const onOpenCamera = async () => {
        const permissionGranted = await requestCameraPermission(); // Yêu cầu quyền trước khi mở camera
        if (!permissionGranted) return;
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            };
            launchCamera(options, async (response) => {
                if (response.didCancel) {
                    ToastAndroid.show('Đã hủy', ToastAndroid.SHORT);
                } else if (response.errorMessage) {
                    ToastAndroid.show('Lỗi khi mở camera', ToastAndroid.SHORT);
                } else {
                    await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };

    const onOpenGallery = async () => {
        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
            };
            launchImageLibrary(options, async (response) => {
                if (response.didCancel) {
                    ToastAndroid.show('Đã hủy', ToastAndroid.SHORT);
                } else if (response.errorMessage) {
                    ToastAndroid.show('Lỗi khi mở thư viện', ToastAndroid.SHORT);
                } else {
                    await uploadImage(response.assets[0]);
                }
            });
        } catch (error) {
            console.log('onOpenGallery -> ', error);
        }
    };

    return (
        <View>
            <Button title="Mở Camera" onPress={onOpenCamera} />
            <Button title="Mở Thư Viện" onPress={onOpenGallery} />
        </View>
    );
};

export default ChangeAvatar;

const styles = StyleSheet.create({});
