import { Alert, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'react-native-axios'
const Screen_DangKi = ({ navigation }) => {

  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [Name, setName] = useState('')
  const Dangki =  () => {
    axios.post("https://cro101-b166e76cc76a.herokuapp.com/users/register", {
      email : Email,
      password : Pass,
      name : Name
    })
    .then(function (response){
      navigation.navigate('DangNhap', { email: Email, password: Pass, name: Name });
      console.log(response)
    })
    .catch(function (error){
      if (error.response && error.response.status === 500) {
        // Tài khoản đã tồn tại
        navigation.navigate('DangNhap', { email: Email, password: Pass, name: Name, error: 'Tài khoản đã tồn tại' });
      } else {
        // Các lỗi khác
        console.log(error);
        Alert.alert('Đã có lỗi xảy ra');
      }
    })
  }
  return (
    <View>
      <TextInput placeholder='Nhap email' onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder='Nhap pass' onChangeText={(text) => setPass(text)}  />
      <TextInput placeholder='Nhap ten' onChangeText={(text) => setName(text)}  />

      <TouchableOpacity onPress={() => Dangki()}>
        <Text> Dang Ki</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Screen_DangKi

const styles = StyleSheet.create({})