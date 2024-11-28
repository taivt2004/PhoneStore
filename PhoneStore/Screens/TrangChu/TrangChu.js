import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './CustomComponentTranChu/Header'
import Data from './Data'
import Slide1 from './CustomComponentTranChu/Slide'
import TabMenu from './CustomComponentTranChu/TabMenu'


const TrangChu = (props) => {
  const {navigation, dataItems} = props

  const Cart = () =>{
    navigation.navigate('Cart')
  }
  return (
    <View style={styles.container}>
      <TabMenu onPress={Cart}/>
      <Slide1 />
      <Data navigation ={navigation}/>
    </View>
  )
}

export default TrangChu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})