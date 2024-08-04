import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getProductDetail } from '../../../rtk/API';
import SlideProduct from './SlideProduct';
import styles from '../styles/ImageProductStyle';
import DungLuongSelector from './DungLuong';
import ColorSelector from './ColorSelector';
import ThongSo from './ThongSo';
import ButtonThanhToan from './ButtonThanhToan';
import TabBar from './TabBar'; // Import TabBar
import ButtonAddtoCart from './ButtonAddtoCart';

const ProductDetail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { productId } = route.params;
    const dispatch = useDispatch();

    const [Product, setProduct] = useState(null);
    const [selectedDungLuong, setSelectedDungLuong] = useState(null);
    const [currentPrice, setCurrentPrice] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const onGetProductDetail = async () => {
        try {
            console.log('productId:', productId);
            const result = await dispatch(getProductDetail(productId)).unwrap();
            setProduct(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        onGetProductDetail();
    }, [productId]);

    useEffect(() => {
        if (Product && Product.chi_tiet_sp) {
            const chiTiet = Product.chi_tiet_sp;
            setSelectedDungLuong({
                ram: chiTiet.dung_luong_Gia[0].ram,
                luu_tru: chiTiet.dung_luong_Gia[0].luu_tru,
            });
            setCurrentPrice(chiTiet.dung_luong_Gia[0].gia);
            setSelectedColor(chiTiet.mau_sac[0]);
            setSelectedImage(chiTiet.mau_sac[0].anh);
        }
    }, [Product]);

    if (!Product || !Product.chi_tiet_sp) {
        console.log('Product detail not loaded yet');
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </SafeAreaView>
        );
    }

    const chiTiet = Product.chi_tiet_sp;
    const images = chiTiet.anh_chi_tiet_sp;
    const dung_luong = chiTiet.dung_luong_Gia;
    const mau_sac = chiTiet.mau_sac;
    const camera_truoc = chiTiet.camera[0].camera_truoc;
    const camera_sau = chiTiet.camera[0].camera_sau;

    const handleSelectDungLuong = (dungLuong) => {
        setSelectedDungLuong(dungLuong);
        const selectedPrice = chiTiet.dung_luong_Gia.find(
            (item) => item.ram === dungLuong.ram && item.luu_tru === dungLuong.luu_tru
        ).gia;
        setCurrentPrice(selectedPrice);
    };

    const handleSelectColor = (color) => {
        setSelectedColor(color);
        setSelectedImage(color.anh);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TabBar 
                dataItems={Product} 
                onPress={() => { /* Thêm hành động khi bấm nút back hoặc heart */ }} 
                navigation={navigation} // Truyền navigation vào TabBar
            />
            <View style={styles.container}>
                <DungLuongSelector
                    dung_luong={dung_luong}
                    selectedDungLuong={selectedDungLuong}
                    onSelect={handleSelectDungLuong} // Đảm bảo truyền đúng hàm
                />
                <View style={styles.imageContainer}>
                    <SlideProduct images={images} style={styles.image} />
                </View>
                <ColorSelector
                    mau_sac={mau_sac}
                    selectedColor={selectedColor}
                    handleSelectColor={handleSelectColor} // Đảm bảo truyền đúng hàm
                />
            </View>
            <ThongSo
                title={Product.name} // Kiểm tra giá trị name
                man_hinh={chiTiet.man_hinh}
                currentPrice={currentPrice}
                selectedDungLuong={selectedDungLuong}
                camera_truoc={camera_truoc}
                camera_sau={camera_sau}
                selectedColor={selectedColor}
                chip={chiTiet.chip}
                pin={chiTiet.pin}
                he_dieu_hanh={chiTiet.he_dieu_hanh}
                hang={chiTiet.hang}
            />
            <View style={styles.view_button}>
                <ButtonAddtoCart 
                    product_id={Product._id}
                    name={Product.name} 
                    selectedImage={selectedImage}
                    currentPrice={currentPrice}
                    selectedColor={selectedColor}
                    selectedDungLuong={selectedDungLuong}
                />
                <ButtonThanhToan />
            </View>
        </SafeAreaView>
    );
};

export default ProductDetail;
