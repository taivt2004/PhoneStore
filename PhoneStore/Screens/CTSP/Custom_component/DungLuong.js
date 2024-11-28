import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from '../styles/ImageProductStyle';

const DungLuongSelector = ({ dung_luong, selectedDungLuong, onSelect }) => {
    if (!Array.isArray(dung_luong)) {
        return null;
    }

    return (
        <View style={styles.dungluongContainer}>
            <Text style={styles.label}>Dung lượng</Text>
            <View style={styles.dungluong_view}>
                {dung_luong.map((item, index) => (
                    <Pressable
                        key={index}
                        style={[
                            styles.dung_luongButton,
                            item.ram === selectedDungLuong?.ram && item.luu_tru === selectedDungLuong?.luu_tru
                                ? styles.dung_luongButtonSelected
                                : null
                        ]}
                        onPress={() => onSelect({ ram: item.ram, luu_tru: item.luu_tru })}
                    >
                        <Text style={styles.dungLuongText}>{`${item.ram}/${item.luu_tru}`}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default DungLuongSelector;
