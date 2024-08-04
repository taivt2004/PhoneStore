// components/LoginButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DangNhapButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress} >
      <LinearGradient colors={['#ec672b', '#F46F18']} style={styles.gradient}>
        <Text style={styles.loginText}>Đăng nhập</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 20,
  },
  gradient: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DangNhapButton;
