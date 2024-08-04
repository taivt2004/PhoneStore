import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// Các màu nền có thể thay đổi cho Footer
const colors = ['#fff', '#E54553', '#66E51D', '#39D3FA', '#E5DD6D', '#7F36DC'];

const Main = () => {
    // Khai báo state để quản lý thông tin người dùng
    const [user, setUser] = useState({
        name: 'Chưa có tên',
        avatar: 'https://i.pinimg.com/564x/a3/ea/cd/a3eacd56b85cbd58581a35c5ba935d5d.jpg',
    });
    // Khai báo state để quản lý thời gian cập nhật thông tin cuối cùng
    const [lastTimeUpdate, setLastTimeUpdate] = useState('Bạn chưa cập nhật thông tin');
    // Khai báo state để quản lý màu nền của Footer
    const [footerColor, setFooterColor] = useState(colors[0]);

    // Hàm xử lý cập nhật thông tin người dùng
    const handleUpdateInfor = useCallback(_user => {
        setUser(_user);
    }, []);

    // Hàm xử lý thay đổi màu nền Footer ngẫu nhiên
    const handleRandomColor = useCallback(() => {
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan]);
    }, []);

    // Cập nhật thời gian mỗi khi thông tin người dùng thay đổi
    useEffect(() => {
        const currentdate = new Date();
        const datetime =
            currentdate.getDate() + 
            '/' +
            (currentdate.getMonth() + 1) + 
            '/' +
            currentdate.getFullYear() + 
            ' ' +
            currentdate.getHours() + 
            ':' +
            currentdate.getMinutes() + 
            ':' +
            currentdate.getSeconds();
        setLastTimeUpdate(datetime);
    }, [user]);

    return (
        <View style={styles.container}>
            <Header user={user} />
            <Body onUpdateInfo={handleUpdateInfor} onClickChangeBgFooter={handleRandomColor} />
            <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    }
});
