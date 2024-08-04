import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductDetail from './Custom_component/Product_Detail';

const CTSP = (props) => {
    const { navigation, route } = props;
    const { dataItems } = route.params;

    return (
        <View style={styles.container}>
            <ProductDetail dataItems={dataItems} />
        </View>
    );
};

export default CTSP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
