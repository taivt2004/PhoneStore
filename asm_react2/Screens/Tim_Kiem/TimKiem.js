import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import CustomItemSearch from './Custom_component/Custom_Items_Search';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../rtk/API';

const TimKiem = ({ navigation }) => {

  const [searchQuery, setSearchQuery] = useState(''); 
  const [filteredProducts, setFilteredProducts] = useState([]); // Tạo state cho danh sách sản phẩm sau khi lọc.
  const [Products, setProducts] = useState([]); // Khởi tạo state với một mảng rỗng
  const dispatch = useDispatch();

  const onGetProducts = async () => {
    try {
      const result = await dispatch(getProducts({ categoryId: '66934046d17f3d54f6e88ed9', brandId: null }));
      console.log(result.payload);
      setProducts(result.payload); // Đảm bảo result.payload là một mảng
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onGetProducts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query); // Cập nhật giá trị searchQuery.
    if (query === '') {
      setFilteredProducts([]); // Nếu ô tìm kiếm trống, danh sách filteredProducts sẽ trống.
    } else {
      // Lọc danh sách Product để tìm các sản phẩm có tên chứa chuỗi tìm kiếm (không phân biệt chữ hoa chữ thường).
      const filtered = Products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered); // Cập nhật danh sách filteredProducts.
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm sản phẩm..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <CustomItemSearch dataItems={item} navigation={navigation} />}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.emptyText}>Không có sản phẩm nào</Text>}
        contentContainerStyle={{ paddingBottom: 70 }} 
      />
    </View>
  );
};

export default TimKiem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});
