import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import logoutIcon from '../icon_profile/logout.png';

const ButtonLogout = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Image source={logoutIcon} style={styles.icon} />
      <Text style={styles.title}>Đăng xuất</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogout;

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 15,
  },
  title: {
    fontWeight: '600',
    color: '#ee1f96',
    fontSize: 18,
  },
});
