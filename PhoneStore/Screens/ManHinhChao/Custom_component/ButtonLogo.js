import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';


const ButtonLogo = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Animatable.View
          animation={"pulse"}
          easing="ease-in-out"
          iterationCount={"infinite"}
          style={styles.innerContainer}>
          <Text style={styles.text}>Go</Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLogo;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80, 
    width: 96,   
    height: 96,  
    borderWidth: 1.5,
    borderRightWidth: 2,
    borderTopWidth: 4,
    borderColor: '#DBD7D5',
    borderRadius: 48, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: 80,  
    height: 80, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40, 
    backgroundColor: '#DBD7D5',
  },
  text: {
    color: '#f5f5f5', // text-gray-50 tương đương với #f5f5f5
    fontSize: 36,     // text-[36px] tương đương với 36 pixel
    fontWeight: '600', // font-semibold tương đương với fontWeight 600
  },
});
