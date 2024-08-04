import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const SECTION = [
  { id: '1', name: 'Messi' },
  { id: '2', name: 'Ronaldo' },
  { id: '3', name: 'Mbappe' },
  { id: '4', name: 'Neymar' },
  { id: '5', name: 'Kane' },
  { id: '6', name: 'Nokia' },
  { id: '7', name: 'LG' },
  { id: '8', name: 'Nokia3' },
  { id: '9', name: 'Nokia4' },
  { id: '10', name: 'Nokia4' },
  { id: '11', name: 'Nokia4' },
  { id: '12', name: 'Nokia4' },
  { id: '13', name: 'Nokia4' },
  { id: '14', name: 'Nokia4' },
];

// Component ListItem để hiển thị từng item trong FlatList
const ListItem = React.memo(({ item, viewableItems }) => {
  // Sử dụng useSharedValue để tạo giá trị động cho opacity
  const opacity = useSharedValue(0);
  // Sử dụng useSharedValue để tạo giá trị động cho scale
  const scale = useSharedValue(1);

  // Tạo các style động với useAnimatedStyle
  const animatedStyles = useAnimatedStyle(() => {
    // Kiểm tra xem item hiện tại có đang hiển thị trên màn hình không
    const isVisible = viewableItems.value.some(viewableItem => viewableItem.item.id === item.id);
    if (isVisible) {
      // Nếu item đang hiển thị, thiết lập opacity và scale với animation
      opacity.value = withTiming(1, { duration: 500 });
      scale.value = withTiming(1, { duration: 500 });
    } else {
      // Nếu item không hiển thị, thiết lập opacity và scale với animation
      opacity.value = withTiming(0, { duration: 500 });
      scale.value = withTiming(0.8, { duration: 500 });
    }
    // Trả về các style động
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <Animated.View style={[styles.item, animatedStyles]}>
      <Text>{item.name}</Text>
    </Animated.View>
  );
});

export default function Bai2Lab3() {
  // Sử dụng useSharedValue để lưu trữ danh sách các item hiện đang hiển thị
  const viewableItems = useSharedValue([]);

  // Callback này sẽ được gọi mỗi khi danh sách các item hiện đang hiển thị thay đổi
  const onViewableItemsChanged = ({ viewableItems: vItems }) => {
    viewableItems.value = vItems;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={SECTION} // Thiết lập dữ liệu cho FlatList từ mảng SECTION
        renderItem={({ item }) => <ListItem item={item} viewableItems={viewableItems} />} // Render từng item bằng ListItem
        keyExtractor={(item) => item.id} // Thiết lập key cho từng item
        onViewableItemsChanged={onViewableItemsChanged} // Gọi callback khi danh sách các item hiển thị thay đổi
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }} // Thiết lập ngưỡng phần trăm hiển thị của item để callback được gọi
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderRadius: 10,
    margin: 15,
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
