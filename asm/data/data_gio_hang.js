import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../styles_app/styles_gio_hang'


const data_gio_hang = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.btn_menu}>
          <Text></Text>
        </TouchableOpacity>
    
        <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2FIntersect.png?alt=media&token=58b29167-8c91-43c3-8839-68d9ece54e40'}} style={{width: 35, height: 35}} />
      </View>

      <Text style={styles.title_text}>Find the best coffee for you</Text>
      <View style={styles.searchSection}>
        <FontAwesomeIcon style={styles.searchIcon} icon={faSearch}/>

        <TextInput 
          style={styles.text_input}
          placeholder="Find your coffee..."
          placeholderTextColor='#828282'
        />
        
      </View>

      <View>
      <FlatList
          data={dataList}
          renderItem={({ item }) => <List ItemList={item}/>}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
     
        <FlatList
          data={dataCoffee}
          renderItem={({ item }) => <TrangChu dataItems={item}/>}
          keyExtractor={(item) => item.id}
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
  )
}

export default data_gio_hang

const styles = StyleSheet.create({})