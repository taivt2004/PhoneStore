// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_DangKi from './Dang_Ki';
import Dang_nhap from './Dang_nhap';

const Stack = createNativeStackNavigator();

const Nav_api = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DangKi">
        <Stack.Screen name="DangKi" component={Screen_DangKi} options={{headerShown: false}}/>
        <Stack.Screen name="DangNhap" component={Dang_nhap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav_api;
