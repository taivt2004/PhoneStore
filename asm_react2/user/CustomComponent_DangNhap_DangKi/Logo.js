import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Flogo_app.png?alt=media&token=52d8f43d-2b7d-4feb-8b70-2265aa690377'}}></Image>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150
    },
    container: {
        margin: 20,
        borderRadius: 80,
        width: 120,
        height: 120,
        backgroundColor: '#ec672b',
        justifyContent: 'center',
        alignItems: 'center'
    }
})