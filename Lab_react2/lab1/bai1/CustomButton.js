// custom lại button với style của mình
import React from 'react'
import { TouchableOpacity, Text, Pressable } from 'react-native'
import styles from './AppStyle'

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const CustomButton2 = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button2}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const CustomButton3 = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button3}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton