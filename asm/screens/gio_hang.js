import { StyleSheet, Text, View,Image, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles_app/styles_gio_hang';
import Items_gioHang from './items_gioHang';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faLocationDot,faCoffee,faLeaf,faAngleLeft,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';

const GioHang = (props) => {
  const {navigation} = props;

  const [total, setTotal] = useState('');
  

 

  return (
    <View style={{flex: 1, backgroundColor: '#151313', padding: 5,}}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.btn_menu} onPress={()=> navigation.navigate('Home')}>
          <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
        </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>Cart</Text>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2FIntersect.png?alt=media&token=58b29167-8c91-43c3-8839-68d9ece54e40'}} style={{width: 35, height: 35}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Items_gioHang/>
        <Items_gioHang/>
        <Items_gioHang/>
        <Items_gioHang/>
        <Items_gioHang/>
        <Items_gioHang/>
      </ScrollView>

      <View style={styles.gia}>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textStyle_price}> 
            <Text>Total price:  </Text>
            <Text style={{ fontWeight: '500', color: '#D17842' }}>$</Text> 15
          </Text>
          </View>
          <TouchableOpacity style={styles.btn_addToCart} ><Text style={{color: '#FFFFFF', fontSize:16, fontWeight:'600'}} onPress={()=> navigation.navigate('PaymentScreen')}>Pay</Text></TouchableOpacity>
      </View>
      </View>
  )
}

export default GioHang

