import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TaoTaiKhoan = ({onPress}) => {
  return (
    <View style={styles.signupRow}>
    <Text>Bạn không có tài khoản</Text>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.signupText}> Tạo tài khoản</Text>
    </TouchableOpacity>
  </View>
  )
}

export default TaoTaiKhoan

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