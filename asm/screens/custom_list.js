import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = (props) => {
    const {ItemList} = props;
  return (
    <View>
      <Text style={{color: '#52555A', fontSize: 15, marginBottom: 10, paddingHorizontal: 10, paddingVertical: 10, fontWeight: 'bold'}}>{ItemList.name}</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({})