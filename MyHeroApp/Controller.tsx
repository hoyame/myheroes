import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { View as DefaultView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Notifications } from 'expo';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import { Provider, useDispatch } from 'react-redux';

import HeaderComponent from './src/components/Header/header';
import NavbarComponent from './src/components/Navbar/navbar';
import HomeScreen from './src/views/Home/home';
import AlertScreen from './src/views/Alerts/alerts';
import NavScreen from './src/views/Nav/nav';
import MapScreen from './src/views/Map/map';
import AccountScreen from './src/views/Account/account';
import ConnexionScreen from './src/views/Connection/connexion';
import InscriptionScreen from './src/views/Inscription/inscription';
import AlertPageScreen from './src/views/Alerts/alert_page';
import CreateAlertScreen from './src/views/Alerts/create_alert';
import store from './src/data/store';
import { setLocalisation } from './src/data/actions/localisation';
import { MyHeroService } from './src/Service';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

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



const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  let tokenNotifAndroid;
  let localisationData = false;
  
  const zboub = () => {
      return true;
  }

  useEffect(() => {
    tokenNotifAndroid = MyHeroService.getNotificationToken();

    setTimeout(() => {
        if (MyHeroService.latitude !== 0 && MyHeroService.longitude !== 0) {
            dispatch(setLocalisation({ latitude: MyHeroService.latitude, longitude: MyHeroService.longitude, localisation: true, state: true }))
        }
    }, 5000)
    
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
          <Stack.Screen name="Alert" component={AlertScreen} />
          <Stack.Screen name="AlertPageScreen" component={AlertPageScreen} />
          <Stack.Screen name="CreateAlertScreen" component={CreateAlertScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen name="Inscription" component={InscriptionScreen} />
          <Stack.Screen name="Nav" component={NavScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Controller;


/*

      //dispatch(setLocalisation({ latitude: latitudeS, longitude: longitudeS, localisation: true, state: true }))




  componentDidMount() {
    if (Platform.OS == "ios") {
      this._getLocationAsync();

    } else {
      try {
        firebase.initializeApp(firebaseConfig);
        this._getLocationAsync();
        this.registerForPushNotification();
      } catch {
        return null;
      }
    }
  }
*/