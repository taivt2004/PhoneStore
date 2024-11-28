import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCartShopping  } from '@fortawesome/free-solid-svg-icons';
import cart from './cart.png'
const TabMenu = ({onPress}) => {
  return (
      <View style={styles.toolbar}>
          <Pressable style={styles.btn_menu}>
            <FontAwesomeIcon icon={faBars }/>
          </Pressable>
          <Pressable>
          <Pressable style={styles.btn_menu} onPress={onPress}>
            <FontAwesomeIcon icon={faCartShopping } size={20}/>
          </Pressable>
          </Pressable>
      </View>
  )
}

export default TabMenu

const styles = StyleSheet.create({
    toolbar:{
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between'
      },
      btn_menu: {
        borderWidth: 2,
        borderColor: '#EBF1ED',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'gray',
        width: 35,
        height: 35,
        borderRadius: 10,
        backgroundColor: 'white'
      },
      cart:{
        margin: 5
      }
})
