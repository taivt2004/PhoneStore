import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Welcome from '../Screens/ManHinhChao/Welcome';
import Login from '../user/DangNhap';
import Register from '../user/DangKi';
import ProductNavigation from './ProductNavigation';

const UserNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='WelCome' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
}

export default UserNavigation