import React, { useState } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import password from '../icon/password.png';

const InPutPass = ({ placeholder, value, onChangeText, showError }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.inputContainer, showError && styles.errorBorder]}>
      <Image source={password} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity
        style={styles.eyeIcon}
        onPress={() => setShowPassword(!showPassword)}
      >
        <FontAwesomeIcon icon={faEye} size={25} style={styles.eyeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  eyeIcon: {
    color: 'gray',
    position: 'absolute',
    right: 7,
    bottom: 7,
  },
  errorBorder: {
    borderColor: 'red',
  },
});

export default InPutPass;
