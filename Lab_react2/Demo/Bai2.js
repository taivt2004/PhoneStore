import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../Demo/CustomButton';
import axios from 'react-native-axios';
import CustomAlert from './CustomAlert';

const Bai3Lab1 = () => {
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    // Index của câu hỏi hiện tại
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Dữ liệu các câu hỏi từ API
    const [questionData, setQuestionData] = useState([]);
    // Câu hỏi hiện tại để hiển thị
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [answers, setAnswers] = useState([]);
    const [message, setMessage] = useState('');
    const [key, setKey] = useState(0);

    /*
    Được sử dụng để gọi API khi component được render lần đầu (với dependency là mảng rỗng []), 
    và lưu trữ dữ liệu vào questionData, currentQuestion, và answers. 
    Nếu có lỗi trong quá trình gọi API, sẽ hiển thị thông báo lỗi.
    */
    useEffect(() => {
        axios.get('https://chungnhanthamgia.io.vn/questionLv1/getAllQuestion?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo')
            .then(function (response) {
                const data = response.data;
                console.log(data);
                setQuestionData(data);
                if (data.length > 0) {
                    setCurrentQuestion(data[0]);
                    setAnswers(data[0].answers);
                }
            })
            .catch(function (error) {
                Alert.alert("Thông báo", error.message);
            });
    }, []);

    const checkAnswer = (isCorrect) => {
        if (isCorrect) {
             setMessage(require('../Demo/anh/anh_chuc_mung.jpg'));
             setKey(key +1);
             goToNextQuestion(); 
          
        } else {
            setMessage(require('../Demo/anh/anh_sai.png'));
            setKey(key +1);
        }
    };

    // Tăng index của câu hỏi hiện tại và set currentQuestion, answers mới dựa trên questionData.
    const goToNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questionData.length) {
            setCurrentQuestionIndex(nextIndex);
            setCurrentQuestion(questionData[nextIndex]);
            setAnswers(questionData[nextIndex].answers);
        } else {
            setIsAlertVisible(true); // Hiển thị CustomAlert khi hoàn thành tất cả câu hỏi
        }
    };

    // Xử lý khi người dùng xác nhận trong CustomAlert
    const handleConfirm = () => {
        setIsAlertVisible(false); // Ẩn CustomAlert sau khi người dùng xác nhận
        // Thực hiện các thao tác cần thiết khi người dùng xác nhận (ví dụ: reset câu hỏi, ...)
    };

    return (
        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
            {currentQuestion && (
                <>
                    <Text style={{ color: 'black', fontWeight: '600', fontSize: 20 }}>Câu hỏi:</Text>
                    <Text style={{ fontFamily: 'serif' }}>{currentQuestion.question}</Text>
                    {answers.map((answer, index) => (
                        <CustomButton
                            key={index}
                            backGroundColor={index % 2 === 0 ? 'gray' : 'gray'}
                            title={answer.text}
                            onPress={() => checkAnswer(answer.isCorrect)}
                        />
                    ))}
                </>
            )}
            {message && (
                <Image
                    style={{ width: '100%', height: 200 }} // Thiết lập kích thước của hình ảnh
                    source={message} // Sử dụng state message là đường dẫn của hình ảnh
                />
            )}

            {/* Component CustomAlert */}
            <CustomAlert
                visible={isAlertVisible}
                onClose={() => setIsAlertVisible(false)}
                title="Chúc mừng"
                message="Bạn đã hoàn thành tất cả các câu hỏi"
                onConfirm={handleConfirm} // Truyền hàm handleConfirm vào CustomAlert
            />
        </View>
    );
};

export default Bai3Lab1;

const styles = StyleSheet.create({});
