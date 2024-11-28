import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View style={styles.container}>
        <View style={{width: 145, height: 1, backgroundColor: '#ec672b'}}></View>
         <Text style={styles.orText}>Hoặc</Text>
         <View style={{width: 145, height: 1, backgroundColor: '#ec672b'}}></View>
    </View>
        
  )
}

export default Line

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    orText: {
        fontWeight: '600'
      },
})