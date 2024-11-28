import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const AnimatedButton = ({ onPress }) => {
    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const handlePressIn = () => {
        scale.value = withTiming(0.9, { duration: 100 });
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

const styles = StyleSheet.create({
    icon_arrow: {
        borderRadius: 20,
        bottom: 2,
        padding: 7,
        backgroundColor: '#ec672b',
    },
    image2: {
        color: 'white',
    },
});

export default AnimatedButton;
