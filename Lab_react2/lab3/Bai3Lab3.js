import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, withTiming, interpolate } from 'react-native-reanimated';

const Bai3Lab3 = () => {
  // Giá trị động lưu trữ vị trí cuộn
  const scrollY = useSharedValue(0);

  // Handler cho sự kiện cuộn
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y; // Cập nhật giá trị scrollY khi cuộn
    },
  });

  // Style động cho header
  const headerStyle = useAnimatedStyle(() => {
    const height = interpolate(scrollY.value, [0, 150], [200, 70], 'clamp'); // Chiều cao của header thay đổi khi cuộn
    const opacity = interpolate(scrollY.value, [0, 150], [1, 0.9], 'clamp'); // Độ mờ của header thay đổi khi cuộn

    return {
      height: withTiming(height, { duration: 200 }), // Thay đổi chiều cao với animation
      opacity: withTiming(opacity, { duration: 200 }), // Thay đổi độ mờ với animation
      width: '100%', // Đảm bảo header chiếm toàn bộ chiều rộng
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row', // Sắp xếp các phần tử trong header theo hàng ngang
      paddingHorizontal: 10, // Khoảng cách ngang bên trong header
    };
  });

  // Style động cho avatar
  const avatarStyle = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 150], [1, 0.5], 'clamp'); // Kích thước của avatar thay đổi khi cuộn
    const translateX = interpolate(scrollY.value, [0, 150], [0, -30], 'clamp'); // Di chuyển avatar theo trục X khi cuộn
    const translateY = interpolate(scrollY.value, [0, 150], [0, -15], 'clamp'); // Di chuyển avatar theo trục Y khi cuộn

    return {
      transform: [
        { scale: withTiming(scale, { duration: 200 }) }, // Thay đổi kích thước với animation
        { translateX: withTiming(translateX, { duration: 200 }) }, // Di chuyển theo trục X với animation
        { translateY: withTiming(translateY, { duration: 200 }) }, // Di chuyển theo trục Y với animation
      ],
    };
  });

  // Style động cho title
  const titleStyle = useAnimatedStyle(() => {
    const translateX = interpolate(scrollY.value, [0, 150], [0, -20], 'clamp'); // Di chuyển title theo trục X khi cuộn
    const translateY = interpolate(scrollY.value, [0, 150], [0, 15], 'clamp'); // Di chuyển title theo trục Y khi cuộn
    const scale = interpolate(scrollY.value, [0, 150], [1, 0.8], 'clamp'); // Kích thước của title thay đổi khi cuộn

    return {
      transform: [
        { translateX: withTiming(translateX, { duration: 200 }) }, // Di chuyển theo trục X với animation
        { translateY: withTiming(translateY, { duration: 200 }) }, // Di chuyển theo trục Y với animation
        { scale: withTiming(scale, { duration: 200 }) }, // Thay đổi kích thước với animation
      ],
    };
  });

  return (
    <View style={styles.container}>
      {/* Header có vị trí tuyệt đối */}
      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image source={{ uri: 'https://via.placeholder.com/150' }} style={[styles.avatar, avatarStyle]} />
        <Animated.Text style={[styles.title, titleStyle]}>Nguyen Van A</Animated.Text>
      </Animated.View>

      {/* Danh sách cuộn */}
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={scrollHandler} // Sự kiện cuộn được xử lý bởi scrollHandler
        scrollEventThrottle={16} // Tần suất nhận sự kiện cuộn
      >
        <View style={styles.content}>
          {Array.from({ length: 30 }).map((_, index) => (
            <View key={index} style={styles.item}>
              <Text>Item {index + 1}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute', // Header cố định vị trí
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green', // Màu nền của header
    justifyContent: '', // Căn giữa các phần tử trong header
    alignItems: 'center',
    zIndex: 1, // Đảm bảo header luôn nằm trên các phần tử khác
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Avatar hình tròn
  },
  title: {
    marginLeft: 10, // Khoảng cách giữa avatar và title
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 200, // Khoảng cách để header có thể hiển thị
  },
  content: {
    paddingTop: 20,
  },
  item: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Bai3Lab3;
