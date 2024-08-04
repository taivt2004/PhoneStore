import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'

const customButton = (props) => {
    const { title, onPress, backGroundColor } = props

    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: backGroundColor}]}
            onPress={onPress}>
            <Text style={[styles.text, styles.color]}>{title}</Text>
        </TouchableOpacity>
    )
}
export default customButton