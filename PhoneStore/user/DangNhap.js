import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import SocialLoginButtons from './CustomComponent_DangNhap_DangKi/SocialLoginButton';
import InputEmail from './CustomComponent_DangNhap_DangKi/InputEmail';
import InPutPass from './CustomComponent_DangNhap_DangKi/InputPass';
import ViewWelcome from './CustomComponent_DangNhap_DangKi/ViewWelcome';
import Line from './CustomComponent_DangNhap_DangKi/Line';
import TaoTaiKhoan from './CustomComponent_DangNhap_DangKi/TaoTaiKhoan';
import QuenMatKhau from './CustomComponent_DangNhap_DangKi/QuenMatKhau';
import styles from './styles/dang_nhap_dangki';
import Logo from './CustomComponent_DangNhap_DangKi/Logo';
import DangNhapButton from './CustomComponent_DangNhap_DangKi/DangNhapButton';
import { login } from '../rtk/API';
import { useDispatch, useSelector } from 'react-redux';
import { ToastAndroid } from 'react-native';

const DangNhap = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const dispatch = useDispatch();


  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onLogin = () => {
    const emailValid = validateEmail(email);
    const passwordValid = password !== '';

    setShowErrorEmail(!emailValid);
    setShowErrorPassword(!passwordValid);


    if (emailValid && passwordValid) {
      dispatch(login({ email, password }))
        .unwrap()
        .catch(() => {
          ToastAndroid.show('Email hoặc mật khẩu không chính xác', ToastAndroid.SHORT)
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles2.logo}>
        <Logo />
      </View>
      
      <View style={styles.footer}>
        <ViewWelcome />
        <InputEmail 
          placeholder="Email" 
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }} 
          showError={showErrorEmail}
        />
        <InPutPass 
          placeholder="Mật khẩu" 
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }} 
          showError={showErrorPassword}
        />
        <QuenMatKhau />
        <DangNhapButton onPress={onLogin} />
        <Line />
        <SocialLoginButtons />
        <TaoTaiKhoan onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

export default DangNhap;

const styles2 = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
