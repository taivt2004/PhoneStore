import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { getProducts, getBrands } from '../../rtk/API';
import CustomItems from './CustomItems';
import styles from './styles/styles_data';

const Data = (props) => {
  const { navigation } = props;
  const [selectedBrandId, setSelectedBrandId] = useState('All'); // State để quản lý ID của thương hiệu đã chọn
  const [products, setProducts] = useState([]); // State để lưu danh sách sản phẩm
  const [brands, setBrands] = useState([]); // State để lưu danh sách thương hiệu
  const [noProductsMessage, setNoProductsMessage] = useState(''); // State để lưu thông báo khi không có sản phẩm
  const dispatch = useDispatch(); // Hook để dispatch các hành động đến Redux store

  // Hàm để lấy sản phẩm dựa trên category ID và brand ID
  const fetchProducts = useCallback(async (categoryId, brandId) => {
    try {
      // Dispatch hành động để lấy sản phẩm và đợi kết quả
      const result = await dispatch(getProducts({ categoryId, brandId }));
      setProducts(result.payload); // Cập nhật state products với dữ liệu lấy được
      if (result.payload.length === 0) {
        setNoProductsMessage('Hiện không còn hàng'); // Thiết lập thông báo nếu không có sản phẩm
      } else {
        setNoProductsMessage(''); // Xóa thông báo nếu có sản phẩm
      }
    } catch (error) {
      console.log(error);
      setNoProductsMessage('Đã xảy ra lỗi khi lấy sản phẩm'); // Thiết lập thông báo lỗi nếu có vấn đề khi lấy sản phẩm
    }
  }, [dispatch]);

  // Hàm để lấy danh sách thương hiệu
  const fetchBrands = useCallback(async () => {
    try {
      const result = await dispatch(getBrands());
      console.log("Brands data: ", result.payload); // Thêm dòng này để kiểm tra dữ liệu trả về
      const allBrand = { _id: 'All', name: 'All' };
      setBrands([allBrand, ...result.payload]);
    } catch (error) {
      console.log("Lỗi: " + error);
    }
  }, [dispatch]);

  // Effect để lấy sản phẩm khi ID thương hiệu đã chọn thay đổi
  useEffect(() => {
    fetchProducts('66934046d17f3d54f6e88ed9', selectedBrandId === 'All' ? null : selectedBrandId);
  }, [selectedBrandId, fetchProducts]);

  // Effect để lấy danh sách thương hiệu khi component được mount
  useEffect(() => {
    fetchBrands();
  }, [fetchBrands]);

  // Hàm xử lý khi chọn một thương hiệu
  const handleBrandPress = useCallback((id) => {
    setSelectedBrandId(id); // Cập nhật state với ID thương hiệu đã chọn
  }, []);

  const [refreshing, setRefreshing] = useState(false); // State để quản lý trạng thái làm mới

  // Hàm xử lý khi kéo để làm mới
  const onRefresh = useCallback(async () => {
    setProducts([]); //set danh sách sản phẩm trống
    setRefreshing(true); // Đặt trạng thái refresh là true
    await fetchProducts('66934046d17f3d54f6e88ed9', selectedBrandId === 'All' ? null : selectedBrandId); // Lấy lại danh sách sản phẩm
    setRefreshing(false); // Đặt trạng thái làm mới là false sau khi lấy lại sản phẩm
  }, []);
//fetchProducts, selectedBrandId
  // Component memoized để render danh sách thương hiệu
  const renderedBrands = useMemo(() => (
    <FlatList
      data={brands}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handleBrandPress(item._id)} 
          style={[styles.brandButton, selectedBrandId === item._id && styles.selectedBrandButton]}
        >
          <Text style={[styles.brandText, selectedBrandId === item._id && styles.selectedBrandText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item._id}
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
    />
  ), [brands, selectedBrandId, handleBrandPress]);

  // Component memoized để render danh sách sản phẩm
  const renderedProducts = useMemo(() => (
    <FlatList
      data={products}
      renderItem={({ item }) => <CustomItems dataItems={item} navigation={navigation} />} 
      keyExtractor={item => item._id} 
      showsVerticalScrollIndicator={false} 
      numColumns={2} 
      scrollEnabled={true} // Đặt thành true để cho phép cuộn
      refreshing={refreshing} 
      onRefresh={onRefresh}
      contentContainerStyle={{ paddingBottom: 70 }} // Đảm bảo có đủ không gian để cuộn
    />
  ), [products, refreshing, navigation, onRefresh]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
      {/* Render danh sách các thương hiệu */}
        {renderedBrands}   
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.text}>Tất cả sản phẩm</Text>
        {noProductsMessage ? (
          <Text style={styles.noProductsText}>{noProductsMessage}</Text> 
        ) : (
          renderedProducts // Render danh sách sản phẩm
        )}
      </View>
    </SafeAreaView>
  );
};

export default Data;