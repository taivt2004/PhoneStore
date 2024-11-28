import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../rtk/Reducer';
import bin from '../icon_profile/bin.png';
import clock from '../icon_profile/clock.png';
import creditcard from '../icon_profile/creditcard.png';
import heart from '../icon_profile/heart.png';
import internet from '../icon_profile/internet.png';
import iphoneprofile from '../icon_profile/iphoneprofile.png';
import swatchbook from '../icon_profile/swatchbook.png';
import download from '../icon_profile/download.png';
import location from '../icon_profile/location.png';
import ButtonLogout from './ButtonLogout';

const DetailProfile = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.option}>
          <Image source={heart} style={styles.icon} />
          <Text style={styles.title}>Yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={swatchbook} style={styles.icon} />
          <Text style={styles.title}>Hiển thị</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={internet} style={styles.icon} />
          <Text style={styles.title}>Ngôn ngữ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={location} style={styles.icon} />
          <Text style={styles.title}>Vị trí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={iphoneprofile} style={styles.icon} />
          <Text style={styles.title}>Tham khảo</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.option}>
          <Image source={bin} style={styles.icon} />
          <Text style={styles.title}>Xóa bộ nhớ đệm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={clock} style={styles.icon} />
          <Text style={styles.title}>Lịch sử đặt hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <ButtonLogout onPress={onLogout}/>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
  },
});
