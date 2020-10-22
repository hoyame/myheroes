import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/data/store';
import Controller from './Controller';
import { MyHeroService } from './src/Service';

const App = () => {
  
  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.getLocalisation();
      }, 2500)
      console.log("longitudeS");
      return
    } else {
      try {
        setTimeout(() => {
          MyHeroService.getLocalisation();
        }, 2500)
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