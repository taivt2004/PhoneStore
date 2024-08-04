import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Login'
import Home from './Home'

const Stack = createNativeStackNavigator();
const Main = () => {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
             name='Login'
             component={Login}
             options={{headerShown: false}}
            />  
            <Stack.Screen
             name='Home'
             component={Home}
             options={{headerShown: false}}
            />  
            
            
          </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({})