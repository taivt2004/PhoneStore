import { StyleSheet, Text, View, Image,TouchableOpacity, Pressable } from 'react-native';

import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faLocationDot,faHeart,faLeaf,faAngleLeft,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles_app/styles_chi_tiet_sp';


const ChiTietSanPham = (props) => {
  const navigation = useNavigation();

  const {route} = props;
  const { dataItems } = route.params;
  const [selectedSize, setSelectedSize] = useState('');
  

  
  
  const setIcon = () => {
    if (dataItems._id != null) {
      return (
        <Pressable style={styles.square}>
            <FontAwesomeIcon style={styles.color_icon} icon={faLeaf} />
            <Text style={{ fontSize: 10, color: '#AEAEAE' }}>Coffee</Text>
        </Pressable>
      );
    } else if(dataItems.loaisp === 'Beans') {
      return (
          <Pressable style={styles.square}>
              <FontAwesomeIcon style={styles.color_icon} icon={faHeart} />
              <Text style={{ fontSize: 10, color: '#AEAEAE' }}>Beans</Text>
          </Pressable>
      );
    }else{
      return null;
    }
  };
  const renderSize = () => {
    if (dataItems._id != null) {
      return (
        <View style={styles.size}>
        <Text style={styles.text_title}>Size</Text>
        <View style={styles.sizeButtons}>
          <TouchableOpacity style={selectedSize === 'S' ? styles.selectedButton : styles.sizeButton} onPress={() => setSelectedSize('S')}>
            <Text style={styles.sizeButtonText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedSize === 'M' ? styles.selectedButton : styles.sizeButton} onPress={() => setSelectedSize("M")}>
            <Text style={styles.sizeButtonText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedSize === 'L' ? styles.selectedButton : styles.sizeButton}onPress={() => setSelectedSize("L")}>
            <Text style={styles.sizeButtonText}>L</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    } else if (dataItems.loaisp === 'Beans') {
      return (
        <View style={styles.size}>
        <Text style={styles.text_title}>Size</Text>
        <View style={styles.sizeButtons}>
          <TouchableOpacity style={selectedSize === '250GR' ? styles.selectedButton : styles.sizeButton} onPress={() => setSelectedSize('250GR')}>
            <Text style={styles.sizeButtonText}>250GR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedSize === '500GR' ? styles.selectedButton : styles.sizeButton} onPress={() => setSelectedSize('500GR')}>
            <Text style={styles.sizeButtonText}>500GR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedSize === '1000GR' ? styles.selectedButton : styles.sizeButton} onPress={() => setSelectedSize('1000GR')}>
            <Text style={styles.sizeButtonText}>1000GR</Text>
          </TouchableOpacity>
        </View>
      </View>
      );
    } else {
      return null; // Trả về null nếu loại sản phẩm không phải là Bean hoặc Coffee
    }
  };




  return (
    <View style={styles.container}>
      
      <View style={styles.image_view}>
        <Image source={{ uri: dataItems.image }} style={styles.image} />
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Home') } >
        {/* Icon back */}
            <FontAwesomeIcon style={styles.backButtonIcon} icon={faAngleLeft } />
        </Pressable>
          <Pressable style={styles.backButton2} >
        {/* Icon back */}
            <FontAwesomeIcon style={styles.backButtonIcon2} icon={faHeart} />
        </Pressable> 
        <View style={styles.overlay} >
          <View style={styles.nameAndCoutry}>
            <Text style={styles.textStyle_hang} numberOfLines={1} ellipsizeMode="tail">{dataItems.name}</Text>
             <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems: 'center'}}>
                <Text style={{fontSize: 18, color: 'white' }}>Rating: </Text>
                <Text style={styles.textStyle_from}><FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} /> {dataItems.rating}</Text>
              </View>
          </View>
          <View style={styles.LoaiVaXuatXu}>
            <View style={styles.view_btn}>
            <Pressable style={styles.square}>
                <Text style={{ fontSize: 10, color: '#AEAEAE' }}>{setIcon()}</Text>
              </Pressable>
              <Pressable style={styles.square}>
                <FontAwesomeIcon style={styles.color_icon} icon={faVoteYea} />
                <Text style={{ fontSize: 10, color: '#AEAEAE' }}>Vote: {dataItems.voting}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.text_title}>Description</Text>
        <Text style={styles.mota}>{dataItems.description}</Text>
        {renderSize()}
      </View>
      
   

      <Text style={{color:'#AEAEAE', left: 30, fontSize: 14, top:30}}>Price</Text>
      <View style={styles.gia}>
          <Text style={styles.textStyle_price}> 
            <Text style={{ fontWeight: '500', color: '#D17842' }}>$</Text> {dataItems.price}
          </Text>
          <TouchableOpacity style={styles.btn_addToCart} onPress={() => navigation.navigate('GioHang', { dataItems })}><Text style={{color: '#FFFFFF', fontSize:16, fontWeight:'600'}}>Add to cart</Text></TouchableOpacity>
      </View>
    </View>
  );
}


export default ChiTietSanPham;
