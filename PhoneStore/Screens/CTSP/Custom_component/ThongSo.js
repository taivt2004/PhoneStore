import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ImageProductStyle';

const ThongSo = ({ title, man_hinh, camera_truoc, camera_sau, currentPrice, selectedDungLuong, selectedColor, chip, pin, hang, he_dieu_hanh }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};
  return (
    <View style={styles.thongTinContainer}>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Tên:</Text>
        <Text style={styles.cellValue}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Màn hình:</Text>
        <Text style={styles.cellValue}>{man_hinh}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Giá:</Text>
        <Text style={styles.cellValue_Gia}>{formatPrice(currentPrice)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>RAM:</Text>
        <Text style={styles.cellValue}>{selectedDungLuong?.ram}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Dung lượng:</Text>
        <Text style={styles.cellValue}>{selectedDungLuong?.luu_tru}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Camera trước:</Text>
        <Text style={styles.cellValue}>{camera_truoc}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Camera sau:</Text>
        <Text style={styles.cellValue}>{camera_sau}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Màu sắc:</Text>
        <Text style={styles.cellValue}>{selectedColor?.ten}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Chip:</Text>
        <Text style={styles.cellValue}>{chip}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Pin:</Text>
        <Text style={styles.cellValue}>{pin}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Hệ điều hành:</Text>
        <Text style={styles.cellValue}>{he_dieu_hanh}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellLabel}>Hãng:</Text>
        <Text style={styles.cellValue}>{hang}</Text>
      </View>
    </View>
  );
};

export default ThongSo;
