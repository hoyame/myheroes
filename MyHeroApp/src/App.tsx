import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from '../o-src/data/store';
import Controller from './Controller';
import { MyHeroService } from '../o-src/Service';

const App = () => {

  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}

export default App;