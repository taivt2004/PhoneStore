import React from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// Lấy chiều cao của màn hình
const { height } = Dimensions.get('window');

export default function Bai1Lab3() {
  // Khai báo một biến shared value để giữ vị trí hiện tại của hình vuông
  const offset = useSharedValue(0);

  // Tạo style cho animation dựa trên giá trị của offset
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  // Hàm di chuyển hình vuông đến vị trí ngẫu nhiên
  const moveSquare = () => {
    // Tính toán vị trí ngẫu nhiên trong khoảng chiều cao của màn hình trừ đi kích thước của hình vuông
    const randomVitri = Math.random() * (height - 100);
    // Cập nhật giá trị offset với animation withTiming để di chuyển hình vuông đến vị trí mới
    offset.value = withTiming(randomVitri, { duration: 500 });
  };

  return (
    <View style={styles.container}>
      {/* Nút MOVE để kích hoạt hàm moveSquare */}
      <View style={styles.buttonContainer}>
        <Button title="MOVE" onPress={moveSquare} />
      </View>
      {/* Hình vuông màu xanh với style được áp dụng animation */}
      <Animated.View style={[styles.square, animatedStyles]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Căn chỉnh các phần tử ở phía trên của màn hình
    margin: 15,
    alignItems: 'center', // Căn giữa các phần tử theo chiều ngang
  },

  square: {
    width: 50,
    height: 50,
    backgroundColor: 'blue', // Màu nền của hình vuông
  },
});
