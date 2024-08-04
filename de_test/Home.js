import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {  faSearch,faHeart,faAngleLeft,faCartArrowDown,faStar,faVoteYea  } from '@fortawesome/free-solid-svg-icons';
import Items from './Items';

const Home = (props) => {
  const {navigation} = props;
  return (
    <View>
       <View style={{padding: 10, backgroundColor: '#1BB693', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', paddingBottom: 50}}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('Login') } >
        {/* Icon back */}
            <FontAwesomeIcon style={{color: 'black'}} icon={faAngleLeft } size={25} />
        </Pressable>
        <Text style={{fontSize: 25,fontWeight: '500', fontFamily: 'serif', color: 'white'}}>Beverages</Text>
        <FontAwesomeIcon style={{color: 'black'}} icon={faCartArrowDown} size={25}  />
    </View>  

        <View>

       
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                
            <FlatList
                data={data}
                renderItem={({ item }) => <Items dataItems={item} />}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContainer}/>
                
            </View>

        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer:{
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
  
      },
      searchSection: {
        flexDirection: 'row',
        backgroundColor: '#21262E',
        borderRadius: 15,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      },
      searchIcon: {
        color: '#828282',
        padding: 10,
      },
})



const data = [
    {
      id: '1',
      ten: 'Coffee Table',
      gia: '50.50',
      hang: 'Tradly',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Fpexels-photo-247878%5B1%5D.png?alt=media&token=9a92b68f-9f6f-4b56-93a1-3e288fbbdd34'
    },
    {
      id: '2',
      ten: 'Coffee Table',
      gia: '50',
      hang: 'Tradly',
      ngay_thang : '6/6/2024',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table2.webp?alt=media&token=efaa814f-32ed-4ea9-bf4c-8cf066235a81'
    },
    {
      id: '3',
      ten: 'Coffee Table',
      gia: '50',
      hang: 'Tradly',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcofee%20table%203.webp?alt=media&token=84cb4d11-3949-4006-a3a3-5024cc6aaf2f'
    },
    {
      id: '4',
      ten: 'Coffee Table',
      gia: '50',
      hang: 'Tradly',
      icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
      image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table%204.webp?alt=media&token=3b4d57aa-5864-4864-83a0-2357806d8006'
    },
   
    {
        id: '5',
        ten: 'Coffee Table',
        gia: '50',
        hang: 'Tradly',
        icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
        image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcofee%20table%203.webp?alt=media&token=84cb4d11-3949-4006-a3a3-5024cc6aaf2f'
      },
      {
        id: '6',
        ten: 'Coffee Table',
        gia: '50',
        hang: 'Tradly',
        icon: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_thi%2Favatar2%5B1%5D.png?alt=media&token=7696022e-0c3d-481d-a3db-23da5ad3e975',
        image: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/lab6_7_8%2Fcoffee%20table%204.webp?alt=media&token=3b4d57aa-5864-4864-83a0-2357806d8006'
      },

  ]