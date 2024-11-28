import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SocialLoginButtons from './CustomComponent_DangNhap_DangKi/SocialLoginButton';
import InputName from './CustomComponent_DangNhap_DangKi/InputName';
import InputEmail from './CustomComponent_DangNhap_DangKi/InputEmail';
import InPutPass from './CustomComponent_DangNhap_DangKi/InputPass';
import Repass from './CustomComponent_DangNhap_DangKi/Repassword';
import ViewDangKi from './CustomComponent_DangNhap_DangKi/ViewDangKi';
import Privacy from './CustomComponent_DangNhap_DangKi/Privacy';
import DaCoTK from './CustomComponent_DangNhap_DangKi/DaCoTK';
import DangKiButton from './CustomComponent_DangNhap_DangKi/DangKiButton';
import Line from './CustomComponent_DangNhap_DangKi/Line';
import Logo from './CustomComponent_DangNhap_DangKi/Logo';
import styles from './styles/dang_nhap_dangki';
import { useDispatch } from 'react-redux';
import { register } from '../rtk/API';

const DangKi = (props) => {
  const { navigation } = props;

  // Khai báo các state để quản lý giá trị và trạng thái lỗi của các input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repass, setRepass] = useState('');
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);
  const [showErrorRepass, setShowErrorRepass] = useState(false);
  const [showErrorUsername, setShowErrorUsername] = useState('');
  const [showError, setshowError] = useState('')
  const dispatch = useDispatch(); // Sử dụng hook useDispatch để gửi action

  // Hàm validateEmail kiểm tra tính hợp lệ của email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  // Hàm onRegister xử lý khi người dùng bấm nút đăng ký
  const onRegister = () => {
    let valid = true;
  
    // Kiểm tra tính hợp lệ của email
    if (!validateEmail(email)) {
      setShowErrorEmail(true);
      valid = false;
    } else {
      setShowErrorEmail(false);
    }
  
    // Kiểm tra username không được để trống
    if(username === '') {
      setShowErrorUsername(true);
      valid = false;
    }else{
      setShowErrorUsername(false)
    }

    // Kiểm tra mật khẩu không được để trống
    if (password === '') {
      setShowErrorPassword(true);
      valid = false;
    } else {
      setShowErrorPassword(false);
    }
  
    // Kiểm tra mật khẩu và nhập lại mật khẩu phải khớp nhau
    if (password !== repass) {
      setShowErrorRepass(true);
      valid = false;
    } else {
      setShowErrorRepass(false);
    }
  
    // Nếu tất cả các kiểm tra đều hợp lệ
    if (valid) {
      const userData = { username, email, password }; // Tạo object chứa thông tin người dùng
      dispatch(register(userData)) // Gửi action register với thông tin người dùng
        .unwrap()
        .then((response) => {
          console.log('Response:', response);
          // Đảm bảo response.status là boolean hoặc giá trị hợp lệ để kiểm tra
          if (response) {
            navigation.navigate('Login'); // Chuyển hướng đến trang đăng nhập
          } else {
            setshowError(response.message);
          }
        })
        .catch((error) => {
          console.log('Error:', error);
          setshowError(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles2.logo}>
        <Logo /> 
      </View>
      <View style={styles.footer}>
        <ViewDangKi /> 
        <InputName 
          placeholder="Username" 
          value={username} 
          onChangeText={setUsername}  
          showError={showErrorUsername}
        /> 
        <InputEmail
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          showError={showErrorEmail}
        /> 
        <InPutPass
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          showError={showErrorPassword}
        /> 
        <Repass
          placeholder="Nhập lại mật khẩu"
          value={repass}
          onChangeText={setRepass}
          showError={showErrorRepass}
        /> 
        <Privacy /> 
        <DangKiButton onPress={onRegister} /> 
        <Line /> 
        <SocialLoginButtons /> 
        <DaCoTK onPress={() => navigation.navigate('Login')} /> 
      </View>
    </View>
  );
};

export default DangKi;

const styles2 = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
});
