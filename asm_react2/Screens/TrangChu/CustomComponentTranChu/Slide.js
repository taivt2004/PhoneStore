import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';

const images = [
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/poco-m6-sliding-cate-27-6-2024.jpg',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/laptop-ai-banner-chung-slide.png',
    'https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:90/plain/https://dashboard.cellphones.com.vn/storage/Redmi-Note-13-Series-home-31-7-2024.jpg'
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slide1 = () => {
    const [imgActive, setimgActive] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setimgActive((prev) => {
                const nextIndex = (prev + 1) % images.length;
                scrollRef.current.scrollTo({ x: WIDTH * nextIndex, animated: true });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

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
                    ref={scrollRef}
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {images.map((e, index) => (
                        <Image key={e} resizeMode='stretch' style={styles.wrap} source={{ uri: e }} />
                    ))}
                </ScrollView>
                <View style={styles.wrapDot}>
                    {images.map((e, index) => (
                        <Text key={e} style={imgActive === index ? styles.dotActive : styles.dot}>●</Text>
                    ))}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Slide1;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    wrap: {
        width: WIDTH * 1,
        height: HEIGHT * 0.2,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: '#ec672b',
    },
    dot: {
        margin: 3,
        color: '#fff',
    },
});
