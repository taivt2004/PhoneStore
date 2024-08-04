import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Bai1 from './bai1';
import Bai2 from './bai2';
import Bai3 from './Bai3';
import RunLab4 from './run';
import Bai4 from './bai4';

const Stack = createNativeStackNavigator();

const MainLab4 = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Run'>
            <Stack.Screen
             name='Run' 
             component={RunLab4}
             options={{ headerShown: false }}/>
            <Stack.Screen 
            name='Bài 1' 
            component={Bai1}
            options={{ headerShown: true }}/>
             <Stack.Screen 
            name='Bài 2' 
            component={Bai2}
            options={{ headerShown: true }}/>
              <Stack.Screen 
            name='Bài 3' 
            component={Bai3}
            options={{ headerShown: true }}/>
            <Stack.Screen 
            name='Bài 4' 
            component={Bai4}
            options={{ headerShown: true }}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainLab4

const styles = StyleSheet.create({})