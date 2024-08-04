import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Items from './Items'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft,faSearch } from '@fortawesome/free-solid-svg-icons';
const Reviews_Screen = (props) => {
  const {navigation} = props;
  return (
    <View style={{}}>    

    <View style={{padding: 10, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10}}>

        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Detail_Screen') } >
        {/* Icon back */}
            <FontAwesomeIcon style={{color: 'black', width: 70, height: 70}} icon={faAngleLeft } />
        </Pressable>
        <Text style={{fontSize: 20,fontWeight: '500', fontFamily: 'serif'}}>My Review</Text>
        <FontAwesomeIcon style={{color: 'black', width: 70, height: 70}} icon={faSearch } />
      </View>  
      <FlatList
      data={data}
      renderItem={({item}) => <Items dataItems={item}/>}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}>
        
      </FlatList>
    </View>
  )
}

export default Reviews_Screen

const styles = StyleSheet.create({
  backButton: {
    justifyContent: 'center',
    alignItems: 'center'
   
  }
})


const data = [
  {
    id: '1',
    ten: 'Coffee Table',
    gia: '50.50',
    rating: 4,
    ngay_thang : '5/6/2024',
    mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table.jpg?alt=media&token=6719d78b-63bd-4dbb-9b9e-8ded4661e660'
  },
  {
    id: '2',
    ten: 'Coffee Table',
    gia: '50',
    rating: 5,
    ngay_thang : '6/6/2024',
    mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table2.webp?alt=media&token=efaa814f-32ed-4ea9-bf4c-8cf066235a81'
  },
  {
    id: '3',
    ten: 'Coffee Table',
    gia: '50',
    rating: 6,
    ngay_thang : '7/6/2024',
    mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcofee%20table%203.webp?alt=media&token=84cb4d11-3949-4006-a3a3-5024cc6aaf2f'
  },
  {
    id: '4',
    ten: 'Coffee Table',
    gia: '50',
    rating: 2,
    ngay_thang : '8/6/2024',
    mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table%204.webp?alt=media&token=3b4d57aa-5864-4864-83a0-2357806d8006'
  },
  {
    id: '5',
    ten: 'Coffee Table',
    gia: '50',
    rating: 4,
    ngay_thang : '9/6/2024',
    mota: 'Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table%205.webp?alt=media&token=f396d32c-ce5b-4bff-b533-a4e6eb370000'
  }
]