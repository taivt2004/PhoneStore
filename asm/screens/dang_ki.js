import React, { useContext, useState } from "react";
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from 'react-native-axios'
import styles from "../styles_app/styles_dang_nhap";
import logo_app from '../img/logo_app.png';
import icon_eye from '../img/icon_eye.png';
import { AppContext } from "../../demo_useContext/AppContext";
function Dang_Ki_Screen (props) {
    const {setNameUser} = useContext(AppContext);
    const {navigation} = props;
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')

    const Dang_ki = () => {
        axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/register',{
            email : Email,
            password : Pass,
            name : Name
        })
        .then(function (response){
            if(response.data.status == true){
                navigation.navigate('Login')
                setNameUser(Name);
            }else{
                Alert.alert('Da co loi xay ra');
            }
        })
        .catch(function (error){
            console.log(error)
            Alert.alert('Đã có lỗi xảy ra');
        })



        axios.post
    }

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
                keyboardType="default"
                placeholder="Name"
                placeholderTextColor='#828282'
                style={[styles.inputControl]}
                onChangeText={(text) => setName(text)}
                // value={form.email}
                // onChangeText={password => setForm({...form, password})}
                />
                <TextInput 
                // autoCapitalize="none"
                // autoCorrect={false}
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor='#828282'
                style={[styles.inputControl]}
                onChangeText={(text) =>setEmail(text)}
                // value={form.email}
                // onChangeText={password => setForm({...form, password})}
                />
                <View style={styles.passwordContainer}>
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

                    <View style={styles.passwordContainer}>
                        <TextInput 
                            placeholder="Re-type Password"
                            placeholderTextColor='#828282'
                            style={[styles.inputControl, { flex: 1 }]}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}>
                            <Image source={icon_eye} style={styles.iconImage} />
                        </TouchableOpacity>
                    </View>
              </View>


              <View style={[styles.formAction]}>
                <TouchableOpacity onPress={() => Dang_ki()}>
                    <View style={[styles.btn,]}>
                      <Text style={[{color: 'white', fontSize:14,fontWeight: '700' }]}>Register</Text>
                    </View>
                </TouchableOpacity>
                
              </View>
              <View style={styles.header}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.title_register}>You have an account? Click
                        </Text>
                        <Pressable onPress={()=>navigation.navigate('Login')}>
                        <Text style={{color: '#D17842', fontWeight: 'bold'}}> Sign in</Text>
                        </Pressable>
                    </View>
                   </View>
            </View>
        </SafeAreaView>
        
    );
}



export default Dang_Ki_Screen;
