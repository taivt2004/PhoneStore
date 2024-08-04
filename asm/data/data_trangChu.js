import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, TextInput, ScrollView, Pressable } from 'react-native';
import TrangChu from '../screens/trang_chu';
import axios from 'react-native-axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch,faDog } from '@fortawesome/free-solid-svg-icons';
const DataTrangChu = (props) => {
  const {navigation} = props;
  
  const [DataCate, setDataCate] = useState([]); // Khai báo state để lưu trữ danh mục
  const [IdCate, setIdCate] = useState('all'); // Khai báo state để lưu trữ id của danh mục hiện tại (mặc định là 'all')
  const [DataProducts, setDataProducts] = useState([]); // Khai báo state để lưu trữ sản phẩm

  // useEffect này để lấy danh sách danh mục từ API 
  useEffect(() => {
    axios.get('https://cro101-b166e76cc76a.herokuapp.com/categories')
      .then(function (response){
        if(response.data.status === true){
          setDataCate([{ _id: 'all', name: 'All' }, ...response.data.categories]); // Thêm mục 'All' vào đầu danh sách danh mục
        }
      })
      .catch(function (error){
        console.error(error);
      });
  }, []);

  // useEffect này để lấy danh sách sản phẩm từ API mỗi khi IdCate thay đổi
  useEffect(() => {
    let url = 'https://cro101-b166e76cc76a.herokuapp.com/products';
    if (IdCate !== 'all') { // Nếu IdCate khác 'all', thêm query parameter để lọc theo danh mục được chọn
      url += `?category=${IdCate}`;
    }

    axios.get(url)
      .then(function (response){
        if(response.data.status === true){
          setDataProducts(response.data.products); // Cập nhật state DataProducts với danh sách sản phẩm lấy được từ API
        }
      })
      .catch(function (error){
        console.error(error);
      });
  }, [IdCate]); // Chỉ chạy lại effect này khi IdCate thay đổi

  // Hàm để xử lý khi một danh mục được nhấn
  const handleCategoryPress = (id) => {
    setIdCate(id); // Cập nhật IdCate với id của danh mục được chọn
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <Pressable style={styles.btn_menu}>
          <FontAwesomeIcon icon={faDog}></FontAwesomeIcon>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Update_Profile')}>
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Favatar.png?alt=media&token=5e0ea701-742c-4f6b-96af-5d8b3e37d6b5'}} style={{width: 35, height: 35, borderRadius: 10}} />
        </Pressable>
      </View>

      <Text style={styles.title_text}>Find the best coffee for you</Text>
      <View style={styles.searchSection}>
        <FontAwesomeIcon style={styles.searchIcon} icon={faSearch} />
        <TextInput 
          style={styles.text_input}
          placeholder="Find your coffee..."
          placeholderTextColor='#828282'
        />
      </View>

      <View>
        <FlatList
          data={DataCate}
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => handleCategoryPress(item._id)} // Gọi hàm handleCategoryPress khi một danh mục được nhấn
              style={[styles.categoryButton, IdCate === item._id && styles.selectedCategoryButton]}>
              <Text style={[styles.categoryText, IdCate === item._id && styles.selectedCategoryText]}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <FlatList
          data={DataProducts}
          renderItem={({ item }) => <TrangChu dataItems={item}/>}
          keyExtractor={(item) => item._id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title_text}>Coffee Beans</Text>
        <FlatList
          data={dataBean}
          renderItem={({ item }) => <TrangChu dataItems={item}/>}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151313',
    paddingVertical: 15,
  },
  scrollView: {
    paddingVertical: 10,
  },
  title_text: {
    fontFamily: 'serif',
    fontWeight: '600',
    margin: 5,
    color: 'white',
    fontSize: 28,
    width: 195,
  },
  toolbar:{
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between'
  },
  btn_menu: {
    borderWidth: 1,
    borderColor: '#181717',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray',
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#21262E'
  },
  text_input:{
    width: '90%',
    fontFamily: 'serif',
    color: '#828282',
    backgroundColor: '#21262E',
    margin: 5,
    height: 40,
    borderRadius: 15,
    paddingHorizontal: 5
  },
  searchSection: {
    flexDirection: 'row',
    backgroundColor: '#21262E',
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchIcon: {
    color: '#828282',
    padding: 10,
  },
  categoryButton: {
    fontFamily: 'serif',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#21262E',
  },
  selectedCategoryButton: {
    fontFamily: 'serif',
    backgroundColor: '#D17842',
  },
  categoryText: {
    fontFamily: 'serif',
    color: '#828282',
  },
  selectedCategoryText: {
    fontFamily: 'serif',
    color: '#fff',
  },
});

export default DataTrangChu;

const dataBean= [
  {
    id: '6',
    name: 'Robusta Beans',
    loai: 'Light Roasted',
    price: 4.20,
    loaisp: 'Beans',
    rating: 4.5,
    voting: 25,
    description : "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Fcoffee_bean4.jpg?alt=media&token=89dc8902-4dae-4277-8a39-292761686b78'
  },
  {
    id: '7',
    name: 'Robusta Beans',
    loai: 'Medium Roasted',
    loaisp: 'Beans',
    price: 4.20,
    voting: 4,
    rating: 5,
    description : "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Fcoffee_bean1.jpg?alt=media&token=520d6c8b-e37b-405d-a803-86e15d24a107'

  },
  {
    id: '8',
    name: 'Robusta Beans',
    loai: 'With Steamed Milk',
    price: 4.20,
    loaisp: 'Beans',
    rating: 5,
    voting: 423,
    description : "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Fcoffee_bean2.jpg?alt=media&token=fad9f78e-aa9c-42f5-8fdd-1a1cfe6cd8ea'

  },
  {
    id: '9',
    name: 'Robusta Beans',
    loai: 'Medium Roasted',
    price: 4.20,
    rating: 4.7,
    loaisp: 'Beans',
    voting: 984,
    description : "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Fcoffee_bean3.jpg?alt=media&token=bc62b482-ba43-427d-9aa4-abcbba9f9ea9'

  },
  {
    id: '10',
    name: 'Robusta Beans',
    loai: 'Medium Roasted',
    rating: 5,
    loaisp: 'Beans',
    price: 4.20,
    voting: 44,
    description : "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Fcoffee_bean5.jpg?alt=media&token=ab984a46-0be8-4b60-8e07-7025cbc308d3'

  },
]

