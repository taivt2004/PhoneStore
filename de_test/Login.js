import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import icon_eye from '../asm/img/icon_eye.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faLocationDot,faHeart,faLeaf,faAngleLeft,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';

const Login = (props) => {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(false);

    const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
    
  const handleSignIn = () => {
    if (!firstName || !lastName || !email || !password || !rePassword) {
      Alert.alert('Lỗi', 'Vui lòng điền đầy đủ thông tin.');
      return;
    }

    if (password.length <= 8) {
      Alert.alert('Lỗi', 'Mật khẩu phải lớn hơn 8 ký tự.');
      return;
    }

    if (password !== rePassword) {
      Alert.alert('Lỗi', 'Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
    Alert.alert('Thành công', 'Đăng nhập thành công!');
    navigation.navigate('Home');
  };
  return (
    
    <View style={{ backgroundColor: '#1BB693', flex: 1 }}>
      <FontAwesomeIcon icon={faAngleLeft} style={{paddingBottom: 50, margin: 30}}></FontAwesomeIcon>
        <View style={{top: 5, alignItems: 'center'}}>
    <Text style={[styles.title_welcome, styles.title]}>Welcome to Tradly</Text>
    <Text style={[styles.title_hello, styles.title]}>Sign-up to your account</Text>
  

    <View style={styles.container}>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='First name'
          placeholderTextColor='white'
          style={[styles.text_input]}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='Last name'
          placeholderTextColor='white'
          style={[styles.text_input]}
          onChangeText={setLastName}
        />
      </View>
     
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='Email ID/Phone number'
          placeholderTextColor='white'
          style={[styles.text_input]}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='Password'
          placeholderTextColor='white'
          style={[styles.text_input]}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Image source={icon_eye} style={styles.iconImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder='Re-Enter Password'
          placeholderTextColor='white'
          style={[styles.text_input]}
          secureTextEntry={!showPassword}
          onChangeText={setRePassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}>
          <Image source={icon_eye} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
      

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>


      <TouchableOpacity>
        <Text style={{ top: 20, fontSize: 18, color: 'white' }}>You have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={{ marginTop: 25, fontSize: 22, fontWeight: 'bold', color: 'white' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
    </View>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
    title_hello: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: '300'
      },
      title_welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 25,
        fontFamily: 'serif',
        fontWeight: '500'
      },
      title: {
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 30,
        width: '95%',
        margin: 10,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#1BB693'
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
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 160,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 30,
        fontFamily: 'serif',
      },
      buttonText: {
        fontFamily: 'serif',
        color: '#1BB693',
        fontSize: 16,
      },
})