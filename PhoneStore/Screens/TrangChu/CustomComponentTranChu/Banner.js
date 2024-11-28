// Banner.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planta - toả sáng không gian nhà bạn</Text>
      <Text style={styles.subtitle}>Xem hàng mới về →</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    zIndex: 1,
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
});

export default Banner;
