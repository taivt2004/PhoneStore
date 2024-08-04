import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CaiNut = () => {
  return (
    <TouchableOpacity
        style = {styles.button}>
        <Text style={styles.ChiTiet}>Chi Tiết</Text>
    </TouchableOpacity>
  )
}

export default CaiNut

const styles = StyleSheet.create({
    button: {
        width: '91%',
        height: 40,
        backgroundColor: '#33CCFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius:5
      },
      ChiTiet:{
        color:'white'
    },
})