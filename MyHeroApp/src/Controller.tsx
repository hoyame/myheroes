import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setLocalisation } from './data/actions/localisation';
import { MyHeroService } from './Service';
import { useDispatch } from 'react-redux';

import 'react-native-gesture-handler';

import HeaderComponent from './components/Header/header';
import NavbarComponent from './components/Navbar/navbar';
import HomeScreen from './views/Home/home';
import AlertScreen from './views/Alerts/alerts';
import NavScreen from './views/Nav/nav';
import MapScreen from './views/Map/map';
import AccountScreen from './views/Account/account';
import ConnexionScreen from './views/Connection/connexion';
import InscriptionScreen from './views/Inscription/inscription';
import AlertPageScreen from './views/Alerts/alert_page';
import CreateAlertScreen from './views/Alerts/create_alert';
import { SenderAcceptAlertPage, HelperAcceptAlertPage } from './views/Alerts/accept_alert';
import GDPSPage from './views/GDPS/index';
import NDUPage from './views/NDU/index'

const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

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
            <Stack.Screen name="SenderAcceptAlertPage" component={SenderAcceptAlertPage} />
            <Stack.Screen name="HelperAcceptAlertPage" component={HelperAcceptAlertPage} />
            <Stack.Screen name="NDU" component={NDUPage} />
            <Stack.Screen name="GDPS" component={GDPSPage} />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  );
}

export default Controller;
