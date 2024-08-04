import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import line from '../anh/line.png'
import logo from '../anh/logo.png'
import icon_eye from '../anh/icon_eye.png'
import axios from 'react-native-axios'
import { Alert } from 'react-native'

const Register_Screen = (props) => {
  const {navigation} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Pass, setPass] = useState('')
  const [RePass, setRePass] = useState('')

  const Dang_ki = () => {

    axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/register',{
        email : Email,
        password : Pass,
        name : Name
    })
    .then(function (response){
        if(response.data.status == true){
            navigation.navigate('Login_Screen')
        }else{
            Alert.alert('Da co loi xay ra');
        }
    })
    .catch(function (error){
        Alert.alert('Đã có lỗi xảy ra');
    })
}
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{flexDirection: 'row', marginTop: 35, marginBottom: 30, alignItems: 'center', justifyContent: 'space-evenly'}}>
          <Image source={line}></Image> 
          <Image source={logo}></Image> 
          <Image source={line}></Image> 
        </View>

        <Text style={[styles.title_hello, styles.title]}>Welcome</Text>
        <Text style={[styles.title_welcome, styles.title]}></Text>

        <View style={styles.container}>
            <TextInput style={styles.text_input}
             placeholder='Name'
             placeholderTextColor='#828282'
             onChangeText={(text)=> setName(text)}>

            </TextInput>
            <TextInput style={styles.text_input}
             placeholder='Email'
             placeholderTextColor='#828282'
             onChangeText={(text)=> setEmail(text)}>

            </TextInput>
            <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder='Password'
                            placeholderTextColor='#828282'
                            style={[styles.text_input]}
                            secureTextEntry={!showPassword}
                            onChangeText={(text)=> setPass(text)}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}   >
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder='Re-Password'
                            placeholderTextColor='#828282'
                            style={[styles.text_input]}
                            secureTextEntry={!showPassword}
                            onChangeText={(text)=> setRePass(text)}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}   >
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>      

         
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        
            <TouchableOpacity style={styles.button} onPress={()=> Dang_ki()}>
                <Text style={styles.buttonText}>Sign up</Text>
           </TouchableOpacity>

           <View style={{marginTop: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.title_register}>You have an account? Click
                        </Text>
                        <Pressable onPress={()=>navigation.navigate('Login_Screen')}>
                        <Text style={{color: 'black', fontWeight: 'bold',fontFamily: 'serif',}}> Sign in</Text>
                        </Pressable>
                    </View>
                   </View>
          </View>
    </View>
  )
}

export default Register_Screen


const styles = StyleSheet.create({
  title_register: {
    fontFamily: 'serif',
  },
  title_hello:{
    fontFamily: 'serif',
    color: 'black', 
    fontSize: 35,
    fontWeight: '300'
  },
  title_welcome: {
    fontFamily: 'serif',
    color: 'black', 
    fontSize: 35, 
    fontWeight: '500'
  },
  title: {
    fontWeight :'600',
    fontFamily: 'serif',
    paddingHorizontal: 33
  },
  container:{
    top: 30,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text_input:{
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '95%',
    margin: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  passwordContainer:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    bottom: 18,
    position: 'absolute',
    right: 18,
  },
   button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 16,
  },


})