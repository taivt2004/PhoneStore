import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ButtonThanhToan = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.btn_add_to_cart} onPress={onPress}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Đặt hàng</Text>
        </TouchableOpacity>
      )
    }
    
export default ButtonThanhToan
    
    const styles = StyleSheet.create({
        btn_add_to_cart: {
            width: '35%',
            padding: 10,
            backgroundColor: '#ec672b',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#F03E2F',
            borderWidth: 1,
        }
    })