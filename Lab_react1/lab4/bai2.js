import { StyleSheet, View } from 'react-native';
import React from 'react';

const Bai2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.largeSquare}>
        <View style={[styles.smallSquare, styles.topLeft]} />
        <View style={[styles.smallSquare, styles.topRight]} />
        <View style={[styles.smallSquare, styles.bottomLeft]} />
        <View style={[styles.smallSquare, styles.bottomRight]} />
        <View style={[styles.smallSquare, styles.center]} />
      </View>
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeSquare: {
    width: 200,
    height: 200,
    
    position: 'relative',
  },
  smallSquare: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  topLeft: {
    top: 0,
    left: 0,
    width:70,
    height:70,
    backgroundColor: 'blue',
  },
  topRight: {
    top: 0,
    right: 0,
    width:70,
    height:70,
    backgroundColor: 'red',
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    width:70,
    height:70,
    backgroundColor: 'pink',
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    width:70,
    height:70,
    backgroundColor: 'green',
  },
  center: {
    top: '50%',
    left: '50%',
    transform: [{ translateX: -33 }, { translateY: -33 }],
    width:65,
    height:65,
    backgroundColor: '#409098',
  },
});