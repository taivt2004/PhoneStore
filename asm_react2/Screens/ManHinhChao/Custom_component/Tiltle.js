import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tiltle = () => {
  return (
      <Text style={styles.text}>WELCOME TO PHONESTORE</Text>
  )
}

export default Tiltle

const styles = StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: '600',
        paddingBottom: 25
    }
})