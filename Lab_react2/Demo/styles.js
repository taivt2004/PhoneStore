import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20
    },
    spaceBox: {
        justifyContent: 'space-between'
    },
    box: {
        flexDirection: 'row',
    },
    align:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40
    },  
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    color: {
        color: 'white'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'blue',
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 5
    },
    time: {
        textAlign: 'center',
        fontSize: 17
    }
})

export default styles;