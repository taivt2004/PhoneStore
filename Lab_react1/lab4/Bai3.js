import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bai3 = () => {
  return (
    <View style={{width:'100%',height:'100%'}}>
      <View style={{width:'100%',height:'25%',backgroundColor:'yellow',flexDirection:'row',justifyContent:'flex-end'}}>
        <View style={{width:'50%',height:'100%',backgroundColor:'green',flexDirection: 'row',flexWrap: 'wrap',}}>
          <View style={{width: '50%',height: '50%',backgroundColor:'blue'}}></View>
          <View style={{width: '50%',height: '50%',backgroundColor:'green'}}></View>
          <View style={{width: '50%',height: '50%',backgroundColor:'gray'}}></View>
          <View style={{width: '50%',height: '50%',backgroundColor:'violet'}}></View>
        </View>
      </View>
      <View style={{width:'100%',height:'25%',backgroundColor:'pink'}}></View>
      <View style={{width:'100%',height:'25%',backgroundColor:'red',flexDirection:'row'}}>
        <View style={{width:'50%',height:'100%',backgroundColor:'green',flex:1}}>
          <View style={{flex:0.5,backgroundColor:'violet'}}></View>
          <View style={{flex:0.5,backgroundColor:'orange'}}></View>
        </View>
        <View style={{width:'50%',height:'100%',backgroundColor:'green',flexDirection:'row'}}>
        <View style={{flex:0.5,backgroundColor:'blue'}}></View>
          <View style={{flex:0.5,backgroundColor:'red'}}></View>
        </View>
      </View>
      <View style={{width:'100%',height:'25%',backgroundColor:'red'}}>
        <View style={{width:'100%',height:'50%',backgroundColor:'green',flex:1,flexDirection:'row'}}>
          <View style={{backgroundColor:'blue',flex:0.25}}></View>
          <View style={{backgroundColor:'green',flex:0.5}}></View>
          <View style={{backgroundColor:'blue',flex:0.25}}></View>
        </View>
        <View style={{width:'100%',height:'50%',backgroundColor:'green',flex:1,flexDirection:'row'}}>
          <View style={{backgroundColor:'green',flex:0.25}}></View>
          <View style={{backgroundColor:'red',flex:0.5}}></View>
          <View style={{backgroundColor:'green',flex:0.25}}></View>
        </View>
      </View>
    </View>

  )
}

export default Bai3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quarter: {
    width: '50%',
    height: '50%',
  },
  redBg: {
    backgroundColor: 'red',
  },
  greenBg: {
    backgroundColor: 'green',
  },
  blueBg: {
    backgroundColor: 'blue',
  },
  yellowBg: {
    backgroundColor: 'yellow',
  },
})