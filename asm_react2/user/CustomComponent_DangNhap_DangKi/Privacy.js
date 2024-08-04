import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Linking } from 'react-native';

const Privacy = () => {
  const openTerms = () => {
    Linking.openURL('https://reactnative.dev/docs/accessibilityinfo');
  };

  const openPrivacy = () => {
    Linking.openURL('https://reactnative.dev/docs/alert');
  };

  return (
    <Text style={styles.text}>
      Để đăng ký tài khoản, bạn đồng ý 
      <Text style={styles.link} onPress={openTerms}> Terms & Conditions </Text> 
      và 
      <Text style={styles.link} onPress={openPrivacy}> Privacy Policy</Text>
    </Text>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  link: {
    color: '#ec672b',
    textDecorationLine: 'underline',
  },
});
