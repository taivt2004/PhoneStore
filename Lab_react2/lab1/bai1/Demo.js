import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import styles from './AppStyle';
import CustomButton from './CustomButton';
import CustomButton2 from './CustomButton2';
import CustomButton3 from './CustomButton3';
import Video from 'react-native-video';

const Demo2 = () => {
    const [diem, setDiem] = useState(0);
    const [caoNhat, setCaoNhat] = useState(0);
    const [soThuNhat, setSoThuNhat] = useState(0);
    const [soThuHai, setSoThuHai] = useState(0);
    const [ketQua1, setKetQua1] = useState(0);
    const [ketQua2, setKetQua2] = useState(0);
    const [ketQua3, setKetQua3] = useState(0);
    const [videoSource, setVideoSource] = useState(null);
    const [videoKey, setVideoKey] = useState(0); // Key để render lại Video component

    useEffect(() => {
        MathRandom();
    }, []);

    const MathRandom = () => {
        // Tạo ngẫu nhiên hai số
        const _soThuNhat = Math.floor(Math.random() * 10);
        const _soThuHai = Math.floor(Math.random() * 10);
    
        // Cập nhật state cho số thứ nhất và số thứ hai
        setSoThuNhat(_soThuNhat);
        setSoThuHai(_soThuHai);
    
        // Tạo ngẫu nhiên vị trí cho kết quả đúng
        const viTri = Math.floor(Math.random() * 3);
    
        // Tạo ngẫu nhiên các kết quả sai
        const _ketQua2 = Math.floor(Math.random() * 20);
        const _ketQua3 = Math.floor(Math.random() * 20);
    
        // Tùy vào vị trí, cập nhật state cho kết quả 1, 2 và 3
        if (viTri === 0) {
            setKetQua1(_soThuNhat + _soThuHai);
            setKetQua2(_ketQua2);
            setKetQua3(_ketQua3);
        } else if (viTri === 1) {
            setKetQua1(Math.floor(Math.random() * 20));
            setKetQua2(_soThuNhat + _soThuHai);
            setKetQua3(_ketQua3);
        } else {
            setKetQua1(Math.floor(Math.random() * 20));
            setKetQua2(_ketQua2);
            setKetQua3(_soThuNhat + _soThuHai);
        }
    };

    const onPress = (value) => {
        if (value === soThuHai + soThuNhat) {
            setDiem(diem + 1);
            if (diem >= caoNhat) {
                setCaoNhat(diem + 1);
            }
            setVideoSource(require('../bai1/video/thong_minh_lam.mp4')); 
            setVideoKey(videoKey + 1); // Tăng key để render lại Video component
        } else {
            setVideoSource(require('../bai1/video/do_an_hai.mp4'));
            setVideoKey(videoKey + 1); 
        }
        MathRandom();
    };

    return (
        <View style={styles.container}>
            <View style={styles.text_view}>
            <Text style={styles.text}>Điểm: {diem}</Text>
            <Text style={styles.text}>Điểm cao nhất: {caoNhat}</Text>
            <Text style={styles.text}>{soThuNhat} + {soThuHai} = ? </Text></View>
            <CustomButton title={ketQua1} onPress={() => onPress(ketQua1)} />
            <CustomButton2 title={ketQua2} onPress={() => onPress(ketQua2)} />
            <CustomButton3 title={ketQua3} onPress={() => onPress(ketQua3)} />
            {videoSource && (
                <Video
                    key={videoKey} // Đặt key để render lại Video component khi cần thiết
                    source={videoSource}
                    style={styles.video} 
                    controls={false} 
                    resizeMode="contain"
                />
            )}
        </View>
    );
};

export default Demo2;
