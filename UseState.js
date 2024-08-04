import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {
    const [isLoading, setIsLoading] = useState(0)

    const Handle = () =>{
        const count = isLoading +1;
        setIsLoading(count)
    }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={Handle} style={{backgroundColor: 'lightblue', justifyContent: 'center', alignItems: 'center', padding: 50, borderRadius: 20}}>
            <Text>Button</Text>
      </TouchableOpacity>
      <Text>{isLoading}</Text>
    </View>
  )
}

export default UseState

const styles = StyleSheet.create({})