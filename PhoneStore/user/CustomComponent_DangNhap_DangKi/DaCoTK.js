import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DaCoTK = ({onPress}) => {
  return (
    <View style={styles.signupRow}>
    <Text>Tôi đã có tài khoản</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.signupText}>Đăng nhập</Text>
    </TouchableOpacity>
  </View>
  )
}

export default DaCoTK

const styles = StyleSheet.create({
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      signupText: {
        color: '#ec672b',
        marginLeft: 5,
      },
})