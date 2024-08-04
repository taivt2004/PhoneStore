import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import styles from "../styles_app/styles_trang_chu"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

const TrangChu = (props) => {
  const navigation = useNavigation();
  const { dataItems } = props;

  return (
    <View style={styles.itemContainer}>
      <LinearGradient 
        colors={['#52555A', '#262B33','#242121','#262B33']}
        style={styles.gradientBackground}/>
      <TouchableOpacity onPress={() => navigation.navigate('CTSP', { dataItems })}>
        <Image source={{ uri: dataItems.image }} style={styles.image}/>  
        <View style={styles.ratingView}>
          <FontAwesomeIcon icon={faStar} size={10} style={styles.icon_rating}/> 
           <Text style={{color: 'white', paddingHorizontal: 5, fontWeight: '500', fontSize: 12, fontFamily:'serif' }}>{dataItems.rating}</Text>
           </View>  
      </TouchableOpacity>
      <Text 
        style={styles.textStyle_name}
        numberOfLines={1}
        ellipsizeMode="tail">
        {dataItems.name}
      </Text> 
      <View style={styles.view_btn}>
        <Text style={styles.textStyle_price}> 
          <Text style={{ fontWeight: '500', color: '#D17842' }}>$</Text> {dataItems.price}
        </Text>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.number}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrangChu;
