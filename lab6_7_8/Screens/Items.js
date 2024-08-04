import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Items = (props) => {
  const { dataItems } = props;
  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <View style={styles.itemContent}>
          <Image source={{ uri: dataItems.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={{fontFamily: 'serif', fontSize: 18}}>{dataItems.ten}</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>${dataItems.gia}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingHorizontal: 10,}}>
       <View style={{flexDirection: 'row'}}>
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         <FontAwesomeIcon  style={{color: '#F9CE10'}} icon={faStar} />
         </View>
            <Text>{dataItems.ngay_thang}</Text>
        </View>
        <Text style={styles.mota}>{dataItems.mota}</Text>
      </View>
      
    </View>
  );
}

export default Items;

const styles = StyleSheet.create({
  container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
  items: {
    width: '95%',
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  itemContent: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    alignItems: 'center',
    width: '100%',
  },
  image: {
    marginVertical: 4,
    borderRadius: 100,
    backgroundColor: 'black',
    width: 110,
    height: 110,
  },
  textContainer: {
    marginLeft: 30,
  },
  mota: {
    lineHeight: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: 'serif'
  }
});
