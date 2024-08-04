// ImageSection.js
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from './Header';
import Banner from './Banner';

const ImageSection = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Fback_gr_home.png?alt=media&token=7f5ed20c-831b-4f7e-81f8-4119625b0a27' }} // Thay thế bằng URL hình ảnh của bạn
        style={styles.image}>
        <Header />
        <Banner />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default ImageSection;
