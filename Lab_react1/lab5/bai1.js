import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-svg';

const Lab5_bai1 = () => {
    const [A, setA] = useState(null);
    const [operator, setOperator] = useState("");
    const [C, setC] = useState(null);
    const [result, setResult] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [emptyField, setEmptyField] = useState("");
    const [message, setMessage] = useState("")
    const randomNumber = () => {
        const a = Math.floor((Math.random() * 3) + 1);
        const c = Math.floor((Math.random() * 3) + 1);
        const operators = ['+', '-', '*', '/'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        let res;
        switch (randomOperator) {
            case '+':
                res = a + c;
                break;
            case '-':
                res = a - c;
                break;
            case '*':
                res = a * c;
                break;
            case '/':
                res = (c !== 0) ? (a / c).toFixed(2) : 'undefined';
                break;
        }


        setA(a);
        setOperator(randomOperator);
        setC(c);
        setResult(res);

        const fields = ['A', 'operator', 'C', 'result'];
        const randomField = fields[Math.floor(Math.random() * fields.length)];
        setEmptyField(randomField);
        setUserInput("");
    };

    useEffect(() => {
        randomNumber();
    }, []);

   

    const handleSubmit = () => {
        let isValid = false;
        if (emptyField === 'A' && parseFloat(userInput) === A) isValid = true;
        else if (emptyField === 'operator' && userInput === operator) isValid = true;
        else if (emptyField === 'C' && parseFloat(userInput) === C) isValid = true;
        else if (emptyField === 'result' && parseFloat(userInput) === parseFloat(result)) isValid = true;

        if (isValid) {
            setMessage("Đúng");
            randomNumber();
        } else {
           setMessage("Sai");
        }
    };

    return (
        <SafeAreaView>
        <View style={styles.container}>
            {emptyField === 'A' ? (
                <TextInput
                    style={styles.box}
                    keyboardType="numeric"
                    value={userInput}
                    onChangeText={setUserInput}
                />
            ) : (
                <Text style={styles.box}>{A}</Text>
            )}
            {emptyField === 'operator' ? (
                <TextInput
                    style={styles.box}
                    value={userInput}
                    onChangeText={setUserInput}
                />
            ) : (
                <Text style={styles.box}>{operator}</Text>
            )}
            {emptyField === 'C' ? (
                <TextInput
                    style={styles.box}
                    keyboardType="numeric"
                    value={userInput}
                    onChangeText={setUserInput}
                />
            ) : (
                <Text style={styles.box}>{C}</Text>
            )}
            <Text style={{ fontSize: 50 }}> = </Text>
            {emptyField === 'result' ? (
                <TextInput
                    style={styles.box}
                    keyboardType="numeric"
                    value={userInput}
                    onChangeText={setUserInput}
                />
            ) : (
                <Text style={styles.box}>{result}</Text>
            )}
            
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text  style={ message === 'Đúng' ? styles.setColorDung : styles.setColorSai}  >{message}</Text>

            <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Check</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Lab5_bai1;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    setColorDung: {
        color: 'green'
    },
    setColorSai: {
        color: 'red'
    },
     message: {
        fontSize: 18,
        color: 'red',
    },
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        width: 50,
        height: 50,
        margin: 2,
        fontSize: 20,
        lineHeight: 50,
    },
    button: {
        backgroundColor: 'gray',
        padding: 10,
        margin: 20,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
});