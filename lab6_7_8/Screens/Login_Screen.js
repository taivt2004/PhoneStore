import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import line from '../anh/line.png';
import logo from '../anh/logo.png';
import icon_eye from '../anh/icon_eye.png';
import axios from 'react-native-axios';

const Login_Screen = (props) => {
  const { navigation } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [Message_Email, setMessage_Email] = useState('');
  const [Message_Pass, setMessage_Pass] = useState('');

  const Dang_Nhap = () => {
    if (!Email) {
      setMessage_Email('Nhập Email');
      return;
    } else if (!Pass) {
      setMessage_Pass('Nhập Mật khẩu');
      return;
    }

    axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/login', {
      email: Email,
      password: Pass,
    })
      .then(function (response) {
        if (response.data.status === true) {
          navigation.navigate('Detail_Screen');
        } else {
          Alert.alert('Đã có lỗi xảy ra')
        }
      })
      .catch(function (error) {
        
      });
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ flexDirection: 'row', marginTop: 35, marginBottom: 30, alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Image source={line} />
        <Image source={logo} />
        <Image source={line} />
      </View>

      <Text style={[styles.title_hello, styles.title]}>Hello !</Text>
      <Text style={[styles.title_welcome, styles.title]}>Welcome back</Text>

      <View style={styles.container}>
        <Text style={{ marginLeft: 10, fontFamily: 'serif',color: 'red' }}>{Message_Email}</Text>
        <TextInput
          style={styles.text_input}
          placeholder='Email'
          placeholderTextColor='#828282'
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={{ marginLeft: 10, fontFamily: 'serif',color: 'red' }}>{Message_Pass}</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder='Password'
            placeholderTextColor='#828282'
            style={[styles.text_input]}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPass(text)}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}>
            <Image source={icon_eye} style={styles.iconImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
        <TouchableOpacity>
          <Text style={{ fontFamily: 'serif' }}>Forgot Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Dang_Nhap()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register_Screen')}>
          <Text style={{ marginTop: 25, fontSize: 20, fontWeight: '400', color: 'black', fontFamily: 'serif' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login_Screen;

const styles = StyleSheet.create({
  title_hello: {
    color: 'gray',
    fontSize: 30,
    fontFamily: 'serif',
    fontWeight: '300'
  },
  title_welcome: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'serif',
    fontWeight: '500'
  },
  title: {
    paddingHorizontal: 33,
    fontFamily: 'serif',
  },
  container: {
    top: 30,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text_input: {
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '95%',
    margin: 10,
    borderColor: 'gray',
    borderBottomWidth: 1,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    bottom: 18,
    position: 'absolute',
    right: 18,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
    fontFamily: 'serif',
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 16,
  },
});
