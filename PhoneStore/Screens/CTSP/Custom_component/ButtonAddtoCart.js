import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../rtk/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
const ButtonAddtoCart = ({ product_id, name, currentPrice, selectedDungLuong, selectedColor, selectedImage }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      _id: product_id,
      name: name, // Đảm bảo name không undefined
      currentPrice: currentPrice,
      selectedDungLuong: selectedDungLuong,
      selectedColor: selectedColor,
      selectedImage: selectedImage,
      quantity: 1
    };

    // Log ra các thông tin để kiểm tra
    console.log('Adding item to cart:', item);

    // Thực hiện hành động thêm vào giỏ hàng
    dispatch(addItemToCart(item));
  };

  return (
    <TouchableOpacity onPress={handleAddToCart} style={styles.btn_add_to_cart}>
      <View style={{flexDirection: 'row', justifyContent : 'center', alignItems: 'center'}}>
      <FontAwesomeIcon icon={faCartPlus} style={{color: '#fff', paddingHorizontal: 10, marginHorizontal: 5}}/>
      <Text style={{ color: '#fff', fontWeight: '600', fontSize: 20 }}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonAddtoCart;

const styles = StyleSheet.create({
  btn_add_to_cart: {
    width: '65%',
    padding: 10,
    backgroundColor: '#ec672b',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F03E2F',
    borderWidth: 1,
  }
});
