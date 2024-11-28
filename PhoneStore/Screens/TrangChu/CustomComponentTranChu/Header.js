import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping,faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import cart from './cart.png'
const Header = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Fback_gr_home.jpg?alt=media&token=9ef9e595-4fe2-4c7a-9a9e-7b9228d98977' }} // Thay thế bằng URL hình ảnh của bạn
      style={styles.imageBackground} >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Planta - toả sáng không gian nhà bạn</Text>
          <Text style={styles.subtitle}>Xem hàng mới về →</Text>
        </View>
        <TouchableOpacity style={styles.cartIconContainer}>
         <Image source={cart} style={styles.icon}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 210,
    width: '100%',
    justifyContent: 'center', // Di chuyển text lên giữa ảnh
    alignItems: 'flex-start',
  
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute', // Thêm thuộc tính này để text nằm trên ảnh
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textContainer: {
    paddingVertical: 30,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#009245',
    marginTop: 10,
  },
  cartIconContainer: {
    paddingVertical: 30,
    alignItems: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
    marginTop: 5
  },
});

export default Header;
