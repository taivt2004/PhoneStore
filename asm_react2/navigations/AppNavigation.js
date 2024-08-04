import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './UserNavigation';
import ProductNavigation from './ProductNavigation';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
  const user = useSelector(state => state.app.user)
  return (
    <SafeAreaView style={{flex: 1}}>
      {
        user ? <ProductNavigation/> : <UserNavigation/>
      }
    </SafeAreaView>
  )
}

export default AppNavigation