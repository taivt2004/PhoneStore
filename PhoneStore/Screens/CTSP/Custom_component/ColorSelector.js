// ColorSelector.jsx
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from '../styles/ImageProductStyle';

const ColorSelector = ({ mau_sac, selectedColor, handleSelectColor }) => {
    return (
        <View style={styles.colorContainer}>
            <Text style={styles.label}>Màu</Text>
            <View style={styles.colorButtons}>
                {mau_sac.map((color, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.colorButton,
                            { backgroundColor: color.ma },
                            selectedColor?.ma === color.ma && styles.colorButtonSelected,
                        ]}
                        onPress={() => handleSelectColor(color)}
                    />
                ))}
            </View>
        </View>
    );
};

export default ColorSelector;
