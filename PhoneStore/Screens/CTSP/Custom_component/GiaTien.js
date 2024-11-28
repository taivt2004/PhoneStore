import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/ImageProductStyle';

const GiaTien = ({ currentPrice }) => {
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Giá</Text>
            <Text style={styles.priceText}>{currentPrice}</Text>
        </View>
    );
};

export default GiaTien;
