import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faSearch,faHeart,faAngleLeft,faCartArrowDown,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';

const Items = (props) => {
    const { dataItems } = props;

  return (
    <View style={styles.container}>
    <View style={styles.items}>
      <View style={styles.itemContent}>
        <Image source={{ uri: dataItems.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={{fontFamily: 'serif', fontSize: 18, justifyContent: 'center', alignItems: 'center'}}>{dataItems.ten}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <Image source={{uri: dataItems.icon}} style={styles.icon}></Image>
       <Text style={styles.mota}>{dataItems.hang}   </Text>
       <Text style={{fontWeight: 'bold', fontSize: 15, color: '#1BB693'}}>${dataItems.gia}</Text>

       </View>
          
     
    </View>
    
  </View>



  
  )
}

export default Items

const styles = StyleSheet.create({
     container: {
      
        alignItems: 'center',
        justifyContent: 'center',
    },
  items: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 170,
    width: '95%',
    margin: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  icon:{
      width: 25,
      height: 25,
  },
  itemContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    width: 130,
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'black',
    width: 182,
    height: 120,
  },
  
 
});