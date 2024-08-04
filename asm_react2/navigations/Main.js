import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import AppNavigation from './AppNavigation';

import { Provider } from 'react-redux'
import { store, persistor } from '../rtk/Store';
import { PersistGate } from 'redux-persist/integration/react'

function Main_ASM_React2() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> 
        <SafeAreaView style={styles.container}>
          <StatusBar/>
          <AppNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  }
});

export default Main_ASM_React2;
