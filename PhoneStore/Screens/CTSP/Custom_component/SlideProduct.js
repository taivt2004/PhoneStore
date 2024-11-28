import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SlideProduct = ({ images }) => {
    const [imgActive, setimgActive] = useState(0);

    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== imgActive) {
                setimgActive(slide);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {images.map((e, index) => (
                        <Image
                            key={index}
                            resizeMode="stretch"
                            style={styles.wrap}
                            source={{ uri: e }}
                        />
                    ))}
                </ScrollView>
                <View style={styles.wrapDot}>
                    {images.map((e, index) => (
                        <Text
                            key={e}
                            style={imgActive === index ? styles.dotActive : styles.dot}
                        >
                            ●
                        </Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    wrap: {
        width: WIDTH * 0.6,
        height: HEIGHT * 0.3,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        margin: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#ec672b'
    },
    dot: {
        margin: 3,
        color: '#fff'
    }
});

export default SlideProduct;
