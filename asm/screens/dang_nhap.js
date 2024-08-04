import React, { useContext, useState } from "react";
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../demo_useContext/AppContext";
import styles from "../styles_app/styles_dang_nhap";
import logo_app from '../img/logo_app.png';
import icon_gg from "../img/icon_google.png";
import icon_eye from '../img/icon_eye.png';
import axios from 'react-native-axios'



function Dang_Nhap_Screen (props) {
  const {navigation} = props;
  const [userName, setUsername] = useState('')
  const [Pass, setPass] = useState('')


  const {setEmail} = useContext(AppContext);
  const {setPass_CT} =  useContext(AppContext)
  const {setNameUser} = useContext(AppContext);

 
  const Dang_Nhap = () => {
    axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/login', {
      email: userName,
      password: Pass
    })
    .then(function (response) {
      const user = response.data.user;
      if (response.data.status === true) {
        navigation.navigate('Home')
        setEmail(userName);
        setPass_CT(Pass);
        setNameUser(user.name)
        console.log(response)
      } else {
        Alert.alert('Đã có lỗi xảy ra');
      }
    })
    .catch(function (error) {
      Alert.alert('Đã có lỗi xảy ra!', error.message);
    });
  };

  
    
    const [showPassword, setShowPassword] = useState(false);
    return( 
        <SafeAreaView style={styles.back_ground} >
            <View style={styles.header}>
            <Image source={logo_app} style={styles.logo_man_hinh_chao} />
            <Text style={[styles.title]}>Welcome To Lungo !!</Text>
            <Text style={[styles.title_dang_nhap]}>Login to Continue</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.input}>
                
                <TextInput 
                // autoCapitalize="none"
                // autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email Address"
                placeholderTextColor='#828282'
                style={[styles.inputControl]}
                onChangeText={(text) => setUsername(text)}
                // value={form.email}
                // onChangeText={password => setForm({...form, password})}
                />
                   <View  style={styles.passwordContainer}>
                        <TextInput 
                            placeholder="Password"
                            placeholderTextColor='#828282'
                            style={[styles.inputControl, { flex: 1 }]}
                            secureTextEntry={!showPassword}
                            onChangeText={(text) => setPass(text)}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>
              </View>


              <View style={[styles.formAction]}>
                <TouchableOpacity onPress={() => Dang_Nhap()}>
                    <View style={[styles.btn,]}>
                      <Text style={[{color: 'white', fontSize:14,fontWeight: '700' }]}>Sign In</Text>
                    </View>
                </TouchableOpacity>

               <Pressable onPress={() =>{
               }}>
                <View style={[styles.btn_login_gg, {  paddingLeft: 20  }]}>
                 <Image source={icon_gg} style={{ width: 20, height: 20, paddingLeft: 20 }} />
                 <Text style={[{ color: 'black', fontSize: 14, fontWeight: '700', marginLeft: 90}]}>Sign In with Google</Text>
                </View>
                  
               </Pressable>
                
              </View>
              <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.title_register}>Don’t have account? Click 
                    </Text>
                    <Pressable onPress={()=>navigation.navigate('DangKi')}>
                      <Text style={{color: '#D17842', fontWeight: 'bold'}}> Register</Text>
                      </Pressable>
                 </View>
                <Text style={styles.title_register}>Forget Password? Click <Text style={{color: '#D17842', fontWeight: 'bold', flexDirection: 'row' }}>Reset</Text> </Text>

                   </View>
            </View>
        </SafeAreaView>
        
        
    );
}



export default Dang_Nhap_Screen;
