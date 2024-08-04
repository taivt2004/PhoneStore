import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Main_Screen = (props) => {
    const { navigation } = props;
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 1</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Lab1Bai1')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Lab1Bai2')} style={styles.button}>
                    <Text style={styles.text}>Bài 2</Text>
                </TouchableOpacity>
               
            </View>

            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 2</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Lab2')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 3</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Bai1Lab3')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Bai2Lab3')} style={styles.button}>
                    <Text style={styles.text}>Bài 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Bai3Lab3')} style={styles.button}>
                    <Text style={styles.text}>Bài 3</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Bai4Lab3')} style={styles.button}>
                    <Text style={styles.text}>Bài 4</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>Lab 4</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Bai1Lab4')} style={styles.button}>
                    <Text style={styles.text}>Bài 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lab}>
                <Text style={styles.text_lab}>ASM</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ASM')} style={styles.button}>
                    <Text style={styles.text}>ASM</Text>
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
    )
}

export default Main_Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    button: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 15,
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: 'lightblue'
    },
    lab: {
        
        borderRadius: 20,
        padding: 5,
        backgroundColor: 'white',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_lab: {
        fontWeight: 'bold',
        fontSize: 25
    },
    text:{
        fontSize: 15,
        fontWeight: '500',
        color: 'white'
    }
})