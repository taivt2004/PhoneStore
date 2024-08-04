import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ToastAndroid, PermissionsAndroid, Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

export default Bai1Lab4 = () => {
    const [image, setImage] = useState(null);

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

    // Hàm upload ảnh lên Cloudinary
    const uploadImage = async (image) => {
        try {
            // Tạo đối tượng FormData để chứa dữ liệu ảnh
            const data = new FormData();
            data.append('file', {
                uri: image.uri, // Đường dẫn URI của ảnh
                type: image.type, // Loại file (image/jpeg, image/png, ...)
                name: image.fileName, // Tên file ảnh
            });
            data.append('upload_preset', 'ml_default'); // Tên preset upload của Cloudinary
            
            // Gửi request POST để upload ảnh lên Cloudinary
            const response = await axios({
                url: 'https://api.cloudinary.com/v1_1/ddbolgs7p/image/upload',
                method: 'post',
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data', // Định dạng dữ liệu gửi đi
                },
            });
            
            // Log kết quả response từ Cloudinary
            console.log('uploadImage -> ', response.data);
            setImage(response.data.secure_url); // Lưu URL ảnh đã upload vào state
        } catch (error) {
            // Log lỗi nếu có
            console.log('uploadImage -> ', error.response ? error.response.data : error.message);
        }
    };

    // Hàm mở camera để chụp ảnh
    const OpenCamera = async () => {
        const permissionGranted = await requestCameraPermission(); // Yêu cầu quyền trước khi mở camera
        if (!permissionGranted) return;

        try {
            const options = {
                mediaType: 'photo',
                quality: 1,
                cameraType: 'back',
                saveToPhotos: true,
            }
            launchCamera(options, async (response) => {
                if(response.didCancel) {
                    ToastAndroid.show('Đã hủy', ToastAndroid.SHORT);
                } else if(response.errorMessage) {
                    ToastAndroid.show('Lỗi khi mở thư viện', ToastAndroid.SHORT);
                } else {
                    console.log('response -> ', response);
                    await uploadImage(response.assets[0]);
                    ToastAndroid.show('Đã tải lên Cloudinary', ToastAndroid.SHORT);
                }
            });
        } catch (error) {
            console.log('onOpenCamera -> ', error);
        }
    };

    // Hàm mở thư viện ảnh để chọn ảnh
    const onOpenGallery = async () => {
        try {
            const options = {
                mediaType: 'photo', // Chỉ lấy ảnh (không lấy video)
                quality: 1, // Chất lượng ảnh (1 là cao nhất)
            }
            // Mở thư viện ảnh và chọn ảnh
            launchImageLibrary(options, async (response) => {
                if(response.didCancel) {
                    ToastAndroid.show('Đã hủy', ToastAndroid.SHORT);
                }
                else if(response.errorMessage) {
                    ToastAndroid.show('Lỗi khi mở thư viện', ToastAndroid.SHORT);
                }
                else {
                    console.log('response -> ', response); // Log kết quả response từ thư viện ảnh
                    await uploadImage(response.assets[0]); // Upload ảnh vừa chọn lên Cloudinary
                    ToastAndroid.show('Đã tải lên Cloudinary', ToastAndroid.SHORT);
                }
            });
        } catch (error) {
            console.log('onOpenGallery -> ', error); // Log lỗi nếu có
        }
    };

    return (
        <View style={styles.container}>
            {
                image ? <Image
                    source={{ uri: image }}
                    style={styles.image} /> :
                    <View style={styles.placeholder}></View>
            }
            <TouchableOpacity onPress={OpenCamera} style={styles.btn}>
                <Text style={styles.label}>Chụp hình</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onOpenGallery} style={styles.btn}>
                <Text style={styles.label}>Chọn từ thư viện</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    placeholder: {
        width: 380,
        height: 380,
        margin: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    btn: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
        alignItems: 'center',
    },
    image: {
        borderRadius: 25,
        width: 380,
        height: 380,
        resizeMode: 'cover',
        shadowColor: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
