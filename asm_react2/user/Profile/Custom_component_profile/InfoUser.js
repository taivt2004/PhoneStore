import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { capnhatProfile } from '../../../rtk/API';
import CustomAlert from './CustomAlert';
import styles from '../styles/InforUserStyle';


const InfoUser = () => {
    const user = useSelector(state => state.app.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [isAlertVisible, setAlertVisible] = useState(false);
    
    const avatarUrl = user?.avatar || 'https://example.com/default-avatar.png';

    const openOptions = () => {
        setAlertVisible(true);
    };

    const handleCamera = async () => {
        setAlertVisible(false);
        const options = {
            mediaType: 'photo',
            quality: 1,
            cameraType: 'back',
            saveToPhotos: true,
        };
        launchCamera(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera picker');
            } else if (response.errorMessage) {
                console.log('Camera error: ', response.errorMessage);
            } else {
                await uploadImage(response.assets[0]);
            }
        });
    };

    const handleGallery = async () => {
        setAlertVisible(false);
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        
        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('Image picker error: ', response.errorMessage);
            } else {
                await uploadImage(response.assets[0]);
            }
        });
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

            if (user && user.email) {
                await dispatch(capnhatProfile({ email: user.email, avatar: imageUrl })).unwrap();
                ToastAndroid.show('Đã cập nhật ảnh đại diện', ToastAndroid.SHORT);
            } else {
                ToastAndroid.show('Thông tin người dùng không có', ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log('uploadImage -> ', error.response ? error.response.data : error.message);
            ToastAndroid.show('Lỗi khi tải ảnh lên', ToastAndroid.SHORT);
        }
    };

    return (
        <LinearGradient colors={['#ec672b', '#fad0c4']} style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: avatarUrl }}
                        style={styles.avatar}
                    />
                    <View style={styles.cameraIconContainer}>
                        <Pressable onPress={openOptions}>
                            <Text style={styles.cameraIcon}>📷</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{user.username }</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <Text style={styles.address}>{user.address}</Text>
                    <Text style={styles.phone}>{user.phone}</Text>
                    <TouchableOpacity 
                        style={styles.editProfileButton}
                        onPress={() => navigation.navigate('EditProfile')}
                    >
                        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <CustomAlert
                visible={isAlertVisible}
                onClose={() => setAlertVisible(false)}
                onCamera={handleCamera}
                onGallery={handleGallery}
            />
        </LinearGradient>
    );
};

export default InfoUser;

