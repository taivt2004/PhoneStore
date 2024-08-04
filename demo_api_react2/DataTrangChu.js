import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import axios from 'axios';

const DataTrangChu = () => {
  const [DataCate, setDataCate] = useState([]); // Danh sách các danh mục
  const [IdCate, setIdCate] = useState('all'); // ID của danh mục hiện tại
  const [DataProducts, setDataProducts] = useState([]); // Danh sách sản phẩm

  // Effect để lấy danh sách danh mục từ API
  useEffect(() => {
    axios.get('http://192.168.0.100:3005/categories')
      .then((response) => {
        if (response.data.status === true) {
          // Thêm mục 'All' vào đầu danh sách danh mục
          setDataCate([{ _id: 'all', name: 'Tất cả' }, ...response.data.categories]);
        }
      })
      .catch((error) => {
        console.error('Lỗi khi lấy danh mục:', error);
      });
  }, []);

  // Effect để lấy sản phẩm theo danh mục khi IdCate thay đổi
  useEffect(() => {
    let url = 'http://192.168.0.100:3005/products';
    if (IdCate !== 'all') {
      url += `?category=${IdCate}`;
    }

    axios.get(url)
      .then((response) => {
        if (response.data.status === true) {
          setDataProducts(response.data.products); // Cập nhật sản phẩm khi lấy thành công từ API
        }
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm:', error);
      });
  }, [IdCate]);

  // Xử lý khi người dùng chọn một danh mục
  const handleCategoryPress = (id) => {
    setIdCate(id); // Thiết lập IdCate với id của danh mục được chọn
  };

  // Render item cho danh sách sản phẩm
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price} VNĐ</Text>
      <Text style={styles.productDescription}>{item.chi_tiet_sp.man_hinh}</Text>
      <Text style={styles.productDescription}>{item.chi_tiet_sp.he_dieu_hanh}</Text>
      <Text style={styles.productDescription}>{item.chi_tiet_sp.chip}</Text>
      <Text style={styles.productDescription}>{item.chi_tiet_sp.camera[0].camera_sau}</Text>
      <Text style={styles.productDescription}>{item.chi_tiet_sp.pin}</Text>
      <View style={styles.colorContainer}>
        {item.chi_tiet_sp.mau_sac.map((color) => (
          <View key={color._id} style={[styles.colorOption, { backgroundColor: color.ma }]} />
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Danh sách các danh mục */}
      <FlatList
        data={DataCate}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategoryPress(item._id)}
            style={[styles.categoryButton, IdCate === item._id && styles.selectedCategoryButton]}>
            <Text style={[styles.categoryText, IdCate === item._id && styles.selectedCategoryText]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      {/* Danh sách sản phẩm */}
      <FlatList
        data={DataProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'lightblue'
  },
  categoryButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  selectedCategoryButton: {
    backgroundColor: '#D17842',
  },
  categoryText: {
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  productItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  colorContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  colorOption: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default DataTrangChu;
