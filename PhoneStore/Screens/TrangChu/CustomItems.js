import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/styles_items';

const CustomItems = (props) => {
    const { dataItems, navigation } = props;

    const sendDetail = () => {
        navigation.navigate('Detail', { productId: dataItems._id });
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    };

    return (
        <View style={styles.itemContainer}>
            <View style={styles.img_container}>
                <Image source={{ uri: dataItems.image }} style={styles.image} />
            </View>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {dataItems.title}
            </Text>
            <View style={styles.ctsp}>
                <Text style={styles.price}>{formatPrice(dataItems.price)}</Text>
                <AnimatedButton onPress={sendDetail} />
            </View>
        </View>
    );
};

const AnimatedButton = ({ onPress }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withTiming(0.8, { duration: 100 });
    };

    const handlePressOut = () => {
        scale.value = withTiming(1, { duration: 100 });
    };

    return (
        <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={onPress}
        >
            <Animated.View style={[styles.icon_arrow, animatedStyle]}>
                <FontAwesomeIcon size={18} icon={faArrowRight} style={styles.image2} />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default CustomItems;
