import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from './Custom_component/logo'
import ButtonLogo from './Custom_component/ButtonLogo'
import Tiltle from './Custom_component/Tiltle'

const Welcome = (props) => {
  const {navigation} = props;
  return ( 
    <View style={styles.container}>
       <Logo></Logo>
       <Tiltle/>
      <ButtonLogo onPress={()=> navigation.navigate('Login')}/>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ec672b',
    justifyContent: 'center',
    alignItems: 'center'
    
  }
})