import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/TabBar_styles';

const TabBar = (props) => {
    const { onPress, dataItems, navigation } = props;
    const backToHome =() =>{
        navigation.navigate('TabHome')
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={backToHome}>
                <View style={styles.icon_arrow}>
                    <FontAwesomeIcon size={22} icon={faArrowLeft} style={styles.backButtonIcon2} />
                </View>
            </Pressable>
            <Text style={styles.nameProduct}>{dataItems ? dataItems.title : 'Loading...'}</Text>
            <Pressable onPress={onPress}>
                <View style={styles.icon_arrow}>
                    <FontAwesomeIcon size={22} icon={faHeart} style={styles.backButtonIconHeart} />
                </View>
            </Pressable>
        </View>
    );
};

export default TabBar;
