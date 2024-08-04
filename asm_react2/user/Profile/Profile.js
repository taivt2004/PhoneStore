import React from 'react';
import { StyleSheet, View } from 'react-native';
import InfoUser from './Custom_component_profile/InfoUser';
import Tiltle from './Custom_component_profile/Tiltle';
import DetailProfile from './Custom_component_profile/DetailProfile';

const Profile = () => {

  return (
    <View style={{ flex: 1, marginVertical: 10, backgroundColor: '#fff', padding: 5 }}>
      <InfoUser />
      <DetailProfile />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});
