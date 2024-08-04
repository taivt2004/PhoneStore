import { StyleSheet, Text, TextInput, TouchableOpacity, View, ToastAndroid } from 'react-native'
import React, { memo, useState } from 'react'

// Component Body là một component con, dùng để nhập thông tin người dùng và thay đổi màu nền của Footer
const Body = memo(props => {
    const { onUpdateInfo, onClickChangeBgFooter } = props;

    // Khai báo các state để quản lý tên và link ảnh người dùng
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');

    // Hàm xử lý cập nhật thông tin người dùng
    const handleChangeInfo = () => {
        if (name.length > 0 && linkImage.length > 0) {
            onUpdateInfo({ name, avatar: linkImage });
        } else {
            ToastAndroid.show('Không được để trống', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nhập tên mới"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Dán địa chỉ avatar mới"
                value={linkImage}
                onChangeText={setLinkImage}
            />
            <TouchableOpacity style={styles.button} onPress={handleChangeInfo}>
                <Text style={styles.buttonText}>CẬP NHẬT THÔNG TIN</Text>
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity style={styles.button} onPress={onClickChangeBgFooter}>
                <Text style={styles.buttonText}>ĐỔI MÀU FOOTER</Text>
            </TouchableOpacity>
        </View>
    )
});

export default Body

const styles = StyleSheet.create({
    container: {
        flex: 3,
        padding: 16,
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 5,
        paddingHorizontal: 8
    },
    button: {
        backgroundColor: '#1E90FF',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    space: {
        height: 12,
    }
});
