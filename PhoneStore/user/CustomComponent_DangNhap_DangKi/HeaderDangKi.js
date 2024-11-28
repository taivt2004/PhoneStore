import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const HeaderDangKi = () => {
  return (
    <View style={styles.header}>
        <Image
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/ASM-react2%2Fback_ground.jpg?alt=media&token=0f65db57-66d1-4828-9fad-9356c638be58' }}
        style={styles.imageBackground}/>
  </View>
  )
}

export default HeaderDangKi

const styles = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageBackground: {
        borderBottomRightRadius: 350,
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
})