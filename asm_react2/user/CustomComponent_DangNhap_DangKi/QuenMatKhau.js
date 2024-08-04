import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QuenMatKhau = () => {
  return (
    <View style={styles.row}>
          <Text style={styles.remember}>Nhớ tài khoản</Text>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
  )
}

export default QuenMatKhau

const styles = StyleSheet.create({
    
  row: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  remember: {
    color: '#666',
  },
  forgot: {
    color: '#ec672b',
  },
})