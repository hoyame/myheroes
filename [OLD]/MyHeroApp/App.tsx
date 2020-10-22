import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/data/store';
import Controller from './Controller';
import firebase from 'firebase';
import { MyHeroService } from './src/Service';

const App = () => {
  
  const firebaseConfig = {
    apiKey: "AIzaSyCH29QA_5aTnTKjEZguPNjtQXfwmwxrbFU",
    //authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://myhero-291513.firebaseio.com",
    projectId: "myhero-291513",
    storageBucket: "myhero-291513.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id"
  };

  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.getLocalisation();
      }, 2500)
      console.log("longitudeS");
      return
    } else {
      try {
        firebase.initializeApp(firebaseConfig);
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

MyHeroService.taskManager();

export default App;