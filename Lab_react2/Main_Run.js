import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Demo2 from './lab1/bai1/Demo';
import Bai2 from './lab1/bai2/lab1';
import Main from './Lab2/Main';
import Bai3Lab1 from './Demo/Bai2';
import Bai1Lab3 from './lab3/Bai1Lab3';
import Bai2Lab3 from './lab3/Bai2Lab3';
import Bai3Lab3 from './lab3/Bai3Lab3';
import Bai4Lab3 from '../Bai4Lab3';
import Bai1Lab4 from './lab4/Bai1Lab4';
import Main_Screen from './Main_Screen';
import Main_ASM_React2 from '../asm_react2/navigations/Main';
const Stack = createNativeStackNavigator();


const Main_React2 = () => {
    return (
            <Stack.Navigator initialRouteName='MainScreen'>
                <Stack.Screen
                    name='Lab1Bai1'
                    component={Demo2}
                />
                <Stack.Screen
                    name='Lab1Bai2'
                    component={Bai2}
                />
                <Stack.Screen
                    name='Bai3Lab1'
                    component={Bai3Lab1}
                />
                <Stack.Screen
                    name='Lab2'
                    component={Main}
                />
                 <Stack.Screen
                    name='Bai1Lab3'
                    component={Bai1Lab3}
                />
                 <Stack.Screen
                    name='Bai2Lab3'
                    component={Bai2Lab3}
                />
                 <Stack.Screen
                    name='Bai3Lab3'
                    component={Bai3Lab3}
                />
                 <Stack.Screen
                    name='Bai4Lab3'
                    component={Bai4Lab3}
                    
                />
                 <Stack.Screen
                    name='Bai1Lab4'
                    component={Bai1Lab4}
                    
                />
                 <Stack.Screen
                    name='ASM'
                    component={Main_ASM_React2}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name='MainScreen'
                    component={Main_Screen}
                    options={{headerShown: false}}
                />


            </Stack.Navigator>
    )
}

export default Main_React2

const styles = StyleSheet.create({})