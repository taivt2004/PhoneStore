import { StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const RunLab4 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.formAction}>
      <Text style={{color:'red', fontSize: 20, textAlign: 'center'}}>Lab 4</Text>
        <Pressable onPress={() => navigation.navigate('Bài 1')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Bài 1</Text>
            </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Bài 2')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Bài 2</Text>
            </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Bài 3')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Bài 3</Text>
            </View>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('Bài 4')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Bài 4</Text>
            </View>
        </Pressable>
    </View>
  );
};

export default RunLab4;

const styles = StyleSheet.create({
  btn: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
    backgroundColor:'#D17842',
    borderRadius: 10,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 150,
    marginBottom: 10
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700'
  },
  formAction: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 24
  }
});
