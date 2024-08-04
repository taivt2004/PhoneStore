import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { capnhatProfile } from '../../../rtk/API';

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.app.user);
  
  const [address, setAddress] = useState(user?.address || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [username, setUsername] = useState(user?.username || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setAddress(user.address);
      setPhone(user.phone);
      setUsername(user.username);
    }
  }, [user]);

  const updateProfile = async () => {
    setLoading(true);
    try {
      await dispatch(capnhatProfile({ email: user.email, address, phone, username })).unwrap();
      setLoading(false);
      navigation.goBack(); 
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Lỗi');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Địa chỉ"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Số điện thoại"
      />
      <Button title="Lưu" onPress={updateProfile} disabled={loading} />
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});
