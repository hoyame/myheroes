import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';;
import Controller from './Controller';
import { Provider } from 'react-redux';
import store from './data/store';
import { MyHeroService } from './Service';

const App = () => {
  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.requestLocationPermission();
      }, 1000)
      return
    } else {
      try {
        setTimeout(() => {
          MyHeroService.requestLocationPermission();
        }, 1000)
      } catch {
        return
      }
    }
  })

  return (
    <Provider store={store}>
      <Controller />
    </Provider>
  );
}

export default App;