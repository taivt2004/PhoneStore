// components/SocialLoginButtons.js
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialLoginButtons = () => {
  return (
    <View style={styles.socialRow}>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Fgoogle.png?alt=media&token=ff9a7c16-addf-48aa-a8ae-532e8440cf0c' }}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Image
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Ffacebook.png?alt=media&token=385ddf69-21d2-4923-b2c0-3acdc7ea7da3' }}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    marginTop: 25,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default SocialLoginButtons;
