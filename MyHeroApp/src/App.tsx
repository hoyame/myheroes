import React from 'react';
import { Platform, StyleSheet } from 'react-native';;
import Controller from './Controller';
import { Provider } from 'react-redux';
import store from './data/store';

const App = () => {
  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}

export default App;