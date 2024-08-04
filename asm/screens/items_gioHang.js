import { StyleSheet, Text, View,Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles_app/styles_gio_hang';


const Items_gioHang = () => {
    
  const [soluong, setSoluong] = useState(1);
  const gia_tien = 5;

 
  const tang_gia = () => {
    setSoluong(soluong + 1);
  };

  const giam_gia = () => {
    if (soluong > 1) {
      setSoluong(soluong - 1);
    }
  };

  const tongTien = soluong * gia_tien;
  return (
    <View style={styles.itemContainer}>
        <LinearGradient 
          colors={['#52555A', '#262B33','#242121','#262B33']}
          style={styles.gradientBackground}
        />
        <TouchableOpacity >
          <Image source={{ uri:'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2FCapuchino2.jpg?alt=media&token=d5059cbb-dbe0-4712-a22a-95a25072f386' }} style={styles.image} />    
        </TouchableOpacity>
        <View style={{flexDirection: 'column', height: '90%',top: 5}}>
          <View style={{}}>
            <Text style={styles.textStyle_hang}>Capuchino</Text> 
            <Text style={styles.textStyle_name}>ahihi</Text>
            </View>
        <View style={styles.view_btn}>
          <Pressable style={styles.sizeButton} >
            <Text style={styles.sizeButtonText}>M</Text>
          </Pressable>
          <Text style={styles.textStyle_price}> 
            
            <Text style={{ fontWeight: '500', color: '#D17842' }}>$ </Text>{tongTien} 
          </Text>
        </View>
        <View style={styles.soLuong}>
        <TouchableOpacity style={styles.square} onPress={giam_gia}>
            <Text style={styles.number}>-</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.text_soLuong}>
            <Text >{soluong}</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.square} onPress={tang_gia}>
            <Text style={styles.number}>+</Text>
          </TouchableOpacity>
          </View>
          </View>
      </View>
  )
}

export default Items_gioHang

