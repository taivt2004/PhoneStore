import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { AppContext } from '../../demo_useContext/AppContext';
import styles from '../styles_app/styles_update_profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft,faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'react-native-axios';
import icon_eye from '../img/icon_eye.png';

const Update_profile = (props) => {
  const { navigation } = props;
  const { Email, Pass_CT, NameUser, setEmail, setPass_CT, setNameUser } = useContext(AppContext);
  const [Email_Pro, setEmail_Pro] = useState(Email);
  const [Password, setPassword] = useState(Pass_CT);
  const [NameUser_Pro, setNameUser_Pro] = useState(NameUser);
  const [showPassword, setShowPassword] = useState(false);

  const CapNhapTaiKhoan = () => {
    axios.post('https://cro101-b166e76cc76a.herokuapp.com/users/update-profile', {
      email: Email_Pro,
      name: NameUser_Pro
    })
    .then(function (response) {
      if (response.data.status === true) {
        Alert.alert('Cập nhật thành công');
        setEmail(Email_Pro);
        setNameUser(NameUser_Pro);
      } else {
        Alert.alert('Cập nhật không thành công');
      }
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert('Đã có lỗi xảy ra');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.btn_menu} onPress={() => navigation.navigate('Home')}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text><Text></Text>
        
      </View>

      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/fire-7e1e5.appspot.com/o/anh_cafe%2Favatar.png?alt=media&token=5e0ea701-742c-4f6b-96af-5d8b3e37d6b5' }}
          style={styles.profileImage}
        />
      </View>
      <TextInput
        style={styles.input}
        value={NameUser_Pro}
        placeholder="Name"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setNameUser_Pro(text)}
      />
      <View>
        <TextInput
          style={styles.input}
          value={Email_Pro}
          placeholder="Email"
          placeholderTextColor="#aaa"
          editable={false}
        />
      </View>
      <View  style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={Password}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!showPassword}
          editable={false}
          onChangeText={(text) => setPassword(text)}/>
          <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon size={20} icon={faEye} style={styles.iconImage} />
          </TouchableOpacity>
      </View>
     
      <TouchableOpacity style={styles.saveButton} onPress={CapNhapTaiKhoan}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Update_profile;
