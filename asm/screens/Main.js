import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dang_Nhap_Screen from './dang_nhap';
import Menu from './navigation/Menu';
import ChiTietSanPham from './navigation/ctsp';
import Dang_Ki_Screen from './dang_ki';
import GioHang from './gio_hang';
import Update_profile from './Update_profile'
import PaymentScreen from './navigation/PaymentScreen';
import { AppContextProvider } from '../../demo_useContext/AppContext';
const Stack = createNativeStackNavigator();


const Main_Screen = () => {
  return (
    <AppContextProvider>
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
             name='Login' 
             component={Dang_Nhap_Screen}
             options={{ headerShown: false }}/>
            <Stack.Screen 
            name='Home' 
            component={Menu}
            options={{ headerShown: false }}/>
            <Stack.Screen 
            name='CTSP' 
            component={ChiTietSanPham}
            options={{ headerShown: false }}/>
            <Stack.Screen
            name='DangKi'
            component={Dang_Ki_Screen}
            options={{headerShown: false}}/>
            <Stack.Screen
            name='GioHang'
            component={GioHang}
            options={{headerShown: false}}/>
            <Stack.Screen
            name='PaymentScreen'
            component={PaymentScreen}
            options={{headerShown: false}}/>
            <Stack.Screen
            name='Update_Profile'
            component={Update_profile}
            options={{headerShown: false}}/>
            
        </Stack.Navigator>
       </NavigationContainer>
   </AppContextProvider>
  )
}

export default Main_Screen

const styles = StyleSheet.create({})