import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome_Screen from './Welcome_Screen'
import Detail_Screen from './Detail_Screen'
import Register_Screen from './Register_Screen'
import Login_Screen from './Login_Screen'
import Reviews_Screen from './Reviews_Screen'


const Stack = createNativeStackNavigator();
const Main_all_Screens = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome_Screen'>
                    <Stack.Screen
                    name='Welcome_Screen' 
                    component={Welcome_Screen}
                    options={{ headerShown: false }}/>
                    <Stack.Screen 
                    name='Detail_Screen' 
                    component={Detail_Screen}
                    options={{ headerShown: false }}/>
                    <Stack.Screen 
                    name='Register_Screen' 
                    component={Register_Screen}
                    options={{ headerShown: false }}/>
                    <Stack.Screen
                    name='Login_Screen'
                    component={Login_Screen}
                    options={{headerShown: false}}/>
                    <Stack.Screen
                    name='Reviews_Screen'
                    component={Reviews_Screen}
                    options={{headerShown: false}}/>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Main_all_Screens

const styles = StyleSheet.create({})