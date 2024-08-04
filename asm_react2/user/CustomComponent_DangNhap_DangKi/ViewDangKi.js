import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ViewDangKi = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
       <Text style={styles.title}>Đăng Ký</Text>
       <Text style={styles.subtitle}>Tạo tài khoản</Text>
    </View>
  )
}

export default ViewDangKi

const styles = StyleSheet.create({
    title: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
      },
      subtitle: {
        fontSize: 18,
        color: '#666',
        marginVertical: 10,
      },
      
})