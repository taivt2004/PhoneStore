import { StyleSheet, Text, View } from 'react-native';
import React, { memo } from 'react';

// Component Footer là một component con, dùng để hiển thị thời gian cập nhật thông tin và thay đổi màu nền
const Footer = memo(props => {
    const { timeUpdate, backgroundColor } = props;
    return (
        <View style={[styles.containerStyles, { backgroundColor }]}>
            <Text style={styles.text}>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
});

export default Footer;

const styles = StyleSheet.create({
    containerStyles: {
        borderTopWidth: 1,
        borderColor: '#E7E4E4',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
