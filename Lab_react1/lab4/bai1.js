import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
      <View style={styles.rightContainer}>
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box4]} />
      </View>
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
    marginTop: 200,
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 10,  
  },
  box1: {
    backgroundColor: 'red',
  },
  box2: {
    backgroundColor: 'blue',
  },
  box3: {
    backgroundColor: 'green',
  },
  box4: {
    backgroundColor: 'yellow',
  },
});