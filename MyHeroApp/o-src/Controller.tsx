import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { View as DefaultView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch } from 'react-redux';
import HomeScreen from '../o-src/views/Home/home';
import AlertScreen from '../o-src/views/Alerts/alerts';
import NavScreen from '../o-src/views/Nav/nav';
import MapScreen from '../o-src/views/Map/map';
import AccountScreen from '../o-src/views/Account/account';
import ConnexionScreen from '../o-src/views/Connection/connexion';
import InscriptionScreen from '../o-src/views/Inscription/inscription';
import AlertPageScreen from '../o-src/views/Alerts/alert_page';
import CreateAlertScreen from '../o-src/views/Alerts/create_alert';
import store from '../o-src/data/store';
import { setLocalisation } from '../o-src/data/actions/localisation';
import { MyHeroService } from '../o-src/Service';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

  let localisationData = false;
  
  useEffect(() => {

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