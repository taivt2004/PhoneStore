import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItemFromCart, changeQuantity } from '../../rtk/Reducer';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/CartStyles';

const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector((state) => state.app.cart);

  const xoaItem = (_id, selectedColor, selectedDungLuong) => {
    dispatch(removeItemFromCart({ _id, selectedColor, selectedDungLuong }));
  };

  const xoaTatca = () => {
    dispatch(clearCart());
  };

  const tangSoluong = (_id, selectedColor, selectedDungLuong, quantity) => {
    dispatch(changeQuantity({ _id, quantity: quantity + 1 }));
  };

  const giamSoluong = (_id, selectedColor, selectedDungLuong, quantity) => {
    if (quantity > 1) {
      dispatch(changeQuantity({ _id, quantity: quantity - 1 }));
    }
  };

  const formatGia = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const renderItem = ({ item }) => {
    if (!item.selectedImage || !item.currentPrice) {
      console.warn('Item thiếu ảnh hoặc giá:', item);
      return null; // Không hiển thị mục này nếu thiếu dữ liệu cần thiết
    }

    const totalPrice = item.currentPrice * item.quantity;

    return (
      <Pressable onPress={() => navigation.navigate('Detail', { productId: item._id })}>
        <View style={styles.itemContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => giamSoluong(item._id, item.selectedColor, item.selectedDungLuong, item.quantity)}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => tangSoluong(item._id, item.selectedColor, item.selectedDungLuong, item.quantity)}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.thong_tin}>Tổng tiền: {formatGia(totalPrice)}</Text>
            {item.selectedDungLuong && (
              <Text style={styles.thong_tin}>Bộ nhớ: {item.selectedDungLuong.ram}/{item.selectedDungLuong.luu_tru}</Text>
            )}
          </View>
          <Image source={{ uri: item.selectedImage }} style={styles.itemImage} />
          <View style={{ flexDirection: 'column', paddingVertical: 5 }}>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => xoaItem(item._id, item.selectedColor, item.selectedDungLuong)}
            >
              <Text style={styles.removeButtonText}>Xóa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Mua</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) =>
          `${item._id}-${item.selectedColor.ten}-${item.selectedDungLuong.ram}-${item.selectedDungLuong.luu_tru}`
        }
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>Giỏ hàng trống</Text>}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.clearButton} onPress={xoaTatca}>
        <Text style={styles.clearButtonText}>Xóa tất cả</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
