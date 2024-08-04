import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productImage from '../anh/product.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faLocationDot,faBookmark,faLeaf,faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import star from '../anh/star.png'
const Detail_Screen = (props) => {
  const {dataItems } = props;
  const {navigation} = props
  const [soluong, setSoluong] = useState(1);
  const gia_tien = 50;
 
  const tang_gia = () => {
    setSoluong(soluong + 1);
  };
  
  const giam_gia = () => {
    if (soluong > 1) {
      setSoluong(soluong - 1);
    }
  };

  const tongTien = soluong * gia_tien;

  

  return (
    <View style={styles.container}>
      <Image source={productImage} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Minimal Stand</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.price}>$ {tongTien}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={styles.button2} onPress={giam_gia}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{soluong}</Text>
            <TouchableOpacity style={styles.button2} onPress={tang_gia}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
          <Image source={star} style={styles.star} />
          <Text>7</Text>
          <Pressable onPress={()=> navigation.navigate('Reviews_Screen')}>
          <Text style={{ marginLeft: 5, fontWeight: '500' }}>(50 reviews)</Text></Pressable>
        </View>
        <Text style={styles.description}>
          Minimal Stand is made of natural wood. The design is very simple and minimal. This is truly one of the best pieces of furniture in any family home. With 3 different colors, you can easily select the best match for your home.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.save} onPress={() => {}}>
         <FontAwesomeIcon  style={{color: 'gray'}} icon={faBookmark}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail_Screen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: 'flex-end',
   
    
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: 'serif',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontFamily: 'serif',
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  button: {
    width: '82%',
    height: '85%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  button2: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 20,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  save:{
    backgroundColor: '#DAD8D8',
    width : '15%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
    borderRadius: 5
  }
});