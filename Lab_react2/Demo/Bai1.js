import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import axios from 'axios';

const Demo = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Tạo state để lưu chỉ số của câu hỏi hiện tại.
    const [questionData, setQuestionData] = useState([]); // Tạo state để lưu dữ liệu các câu hỏi nhận được từ API.
    const [currentQuestion, setCurrentQuestion] = useState({}); // Tạo state để lưu câu hỏi hiện tại.
    const [answers, setAnswers] = useState([]); // Tạo state để lưu các câu trả lời của câu hỏi hiện tại.


   
    useEffect(() => {
        const fetchData = async () => {
            console.log("Calling API..."); // In ra console để kiểm tra xem API được gọi.
            try {
                const response = await axios.get('https://chungnhanthamgia.io.vn/questionLv1/getAllQuestion?utm_source=zalo&utm_medium=zalo&utm_campaign=zalo'); // Gọi API để lấy dữ liệu câu hỏi.
                console.log("API response:", response); // In ra console để kiểm tra dữ liệu trả về từ API.
                const data = response.data; // Lấy dữ liệu từ response của API.
                setQuestionData(data); // Cập nhật state questionData với dữ liệu nhận được.
                if (data.length > 0) {
                    setCurrentQuestion(data[0]); // Cập nhật state currentQuestion với câu hỏi đầu tiên.
                    setAnswers(data[0].answers); // Cập nhật state answers với các câu trả lời của câu hỏi đầu tiên.
                }
            } catch (error) {
                console.error("API error:", error);
                Alert.alert("Thông báo", error.message); // Hiển thị thông báo lỗi nếu có lỗi khi gọi API.
            }
        };

        fetchData(); // Gọi hàm fetchData khi component được mount.
    }, []); // Mảng rỗng làm tham số thứ hai để đảm bảo useEffect chỉ chạy một lần khi component được mount.


    const checkAnswer = (isCorrect) => {
        if (isCorrect) {
            Alert.alert("Thông báo", "Chúc mừng bạn đã chọn đúng", [
                { text: "OK", onPress: () => goToNextQuestion() }
            ]);
        } else {
            Alert.alert("Thông báo", "Bạn đã chọn sai");
        }
    };

    const goToNextQuestion = () => {
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questionData.length) {
            setCurrentQuestionIndex(nextIndex);
            setCurrentQuestion(questionData[nextIndex]);
            setAnswers(questionData[nextIndex].answers);
        } else {
            Alert.alert("Thông báo", "Bạn đã hoàn thành tất cả các câu hỏi");
        }
    };

    return (
        <View style={{ marginHorizontal: 20, marginTop: 40 }}>
            {currentQuestion && (
                <>
                    <Text>Câu hỏi:</Text>
                    <Text>{currentQuestion.question}</Text>
                    {answers.map((answer, index) => (
                        <CustomButton
                            key={index}
                            backGroundColor={index % 2 === 0 ? 'red' : 'blue'}
                            title={answer.text}
                            onPress={() => checkAnswer(answer.isCorrect)}
                        />
                    ))}
                </>
            )}
        </View>
    );
};

export default Demo;

const styles = StyleSheet.create({});
