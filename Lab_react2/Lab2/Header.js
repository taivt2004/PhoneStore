import { Image, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const Header = memo(props => {
    const {user} = props
    console.log('re-render header')
    return (
        <View style={styles.containerStyles} >
            <Image
                resizeMode='center'
                style={styles.avatar}
                source={{uri: user.avatar}}/>
                <View>
                <Text style={styles.chao_ngay_moi}>Chào ngày mới</Text>
            <Text style={styles.name}>{user.name}</Text>
            </View>
        </View>
    );
});

export default Header

const styles = StyleSheet.create({
    containerStyles:{
        flex: 2,
        height: 100,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    avatar: {
        marginRight: 10,
        borderRadius: 300,
        width: 150,
        height: 150
    },
    name:{
        fontSize: 25,
        fontWeight: '600',
        color: 'black',
        fontFamily: 'serif'
    },
    chao_ngay_moi:{
        fontSize: 20,
        color: '#39D3FA',
        fontFamily: 'serif'
    }
})