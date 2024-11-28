import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './icon_bottom_tab/home.png';

import messages from './icon_bottom_tab/message.png';
import logo_app from './icon_bottom_tab/logo_app.png';
import search from './icon_bottom_tab/search.png';
import user from './icon_bottom_tab/user.png';
import Profile from '../user/Profile/Profile';
import QandA from '../user/Profile/QandA';
import EditProfile from '../user/Profile/Custom_component_profile/EditProfile';
import ChangeAvatar from '../user/Profile/Custom_component_profile/ChangeAvatar';

const CustomBarButton = ({ children }) => {
  return (
    <Pressable
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
      }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: '#ec672b'
        }}
      >
        {children}
      </View>
    </Pressable>
  );
};

const StackProfile = createNativeStackNavigator();

const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
      <StackProfile.Screen name="Profile" component={Profile} />
      <StackProfile.Screen name="EditProfile" component={EditProfile} />
      <StackProfile.Screen name="ChangeAvatar" component={ChangeAvatar} />

    </StackProfile.Navigator>
  )
}

import Home from '../Screens/TrangChu/TrangChu';
import Search from '../Screens/Tim_Kiem/TimKiem';
import Notification from '../Screens/ThongBao';

const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#ec672b',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 50,
          backgroundColor: 'white',
          borderTopWidth: 0,
          position: 'absolute',
          margin: 10,
          borderRadius: 25,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabel: () => null, // Ẩn tên của tab
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Trang Chủ') {
            iconName = home;
          } else if (route.name === 'Thông báo') {
            iconName = messages;
          } else if (route.name === 'Tìm kiếm') {
            iconName = search;
          } else if (route.name === 'User') {
            iconName = user;
          }

          return (
            <Image
              source={iconName}
              style={[
                styles.iconImage,
                { tintColor: color },
              ]}
            />
          );
        },
      })}
    >
      <Tab.Screen name='Trang Chủ' component={Home} />
      <Tab.Screen name='Tìm kiếm' component={Search} />
      <Tab.Screen
        name='CenterLogo'
        component={TabHome} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={logo_app}
              resizeMode='contain'
              style={{
                width: 80,
                height: 80,
                tintColor: '#EBF1ED'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomBarButton {...props} />
          ),
        }}
      />
      <Tab.Screen name='Thông báo' component={Notification} />
      <Tab.Screen name='User' component={ProfileNavigation} />
    </Tab.Navigator>
  )
}

import Detail from '../Screens/CTSP/CTSP';
import Cart from '../Screens/Cart/Cart';
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
//import Cart from '../components/product/Cart';
//import EditProfile from '../components/product/EditProfile';
const StackHome = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Cart" component={Cart} />
      <StackHome.Screen name="Detail" component={Detail} />
    </StackHome.Navigator>
  )
}

const styles = StyleSheet.create({
  iconImage: {
    width: 25,
    height: 25,
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default ProductNavigation