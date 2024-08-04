import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ViewWelcome = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
       <Text style={styles.title}>Chào mừng bạn</Text>
       <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>
    </View>
  )
}

export default ViewWelcome

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