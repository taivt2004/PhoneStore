import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dang_nhap = (props) => {
  const {route} = props;
  const {email, name, password, error} = route.params;
  return (
    <View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      <Text>Email: {email}</Text>
      <Text>pass: {password}</Text>
      <Text>Name: {name}</Text>
    </View>
  )
}

export default Dang_nhap

const styles = StyleSheet.create({})