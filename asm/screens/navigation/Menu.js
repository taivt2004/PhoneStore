import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThanhToan from './yeu_thich';
import DataTrangChu from '../../data/data_trangChu';
import UserProfile from './user_profile';
import GioHang from '../gio_hang';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faHomeLgAlt, faUserEdit,faHeart,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();



const Menu = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#D17842',  
        tabBarInactiveTintColor: 'gray', 
        tabBarStyle: {
          height: 45, 
          paddingBottom: 5, 
          backgroundColor: '#151313',
          borderTopWidth: 0, 
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = focused ? 22 : 22; 
          
          
          if (route.name === 'Trang Chủ') {
            iconName = faHomeLgAlt;
          } else if (route.name === 'Yêu thích') {
            iconName = faHeart;
          } else if (route.name === 'Người dùng') {
            iconName = faUserEdit;
          } else if (route.name === 'Giỏ hàng') {
            iconName = faCartShopping;
          }
          return <FontAwesomeIcon icon={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name='Trang Chủ' 
        component={DataTrangChu} 
      />
       <Tab.Screen 
        name='Giỏ hàng' 
        component={GioHang} 
      />
      <Tab.Screen 
        name='Yêu thích' 
        component={ThanhToan} 
      />
      <Tab.Screen 
        name='Người dùng' 
        component={UserProfile} 
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  color: {
    color: 'white'
  }
});

export default Menu;
