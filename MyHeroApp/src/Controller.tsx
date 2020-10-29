import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setLocalisation } from './data/actions/localisation';
import { MyHeroService } from './api/Service';
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
import { useReduxState } from './data/store';
import { setImage, setName, setRate, setXp } from './data/actions/user';
import { WaveIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';
import Users from './api/User';


const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const userInformation = useReduxState(state => state.user.name);
  const [initialize, setInitialize] = useState(false);
  const [isNewUser, setNewUser] = useState(true);
  const [nameA, setAName] = useState('');
  const [mailA, setAMail] = useState('');

  useEffect(() => {
    setTimeout(() => {
        if (MyHeroService.latitude !== 0 && MyHeroService.longitude !== 0) {
          dispatch(setLocalisation({ latitude: MyHeroService.latitude, longitude: MyHeroService.longitude, localisation: true, state: true }))
        }
    }, 5000)

    setTimeout(async () => {
      if (initialize == false) {
        let AMail = await AsyncStorage.getItem('@mail') || '';
        console.log(AMail)

        if (AMail !== "") {
          Users.GetData(AMail, (e: any) => {
            const data = JSON.stringify(e.data[0])
            const status: number = e.status
            const pseudo = e.data[0].pseudo
            const rate = parseFloat(JSON.stringify(e.data[0].rate))
            const xp = parseFloat(JSON.stringify(e.data[0].xp))
            const img = e.data[0].img

            if (status == 200) {
              dispatch(setName(pseudo));
              dispatch(setRate(rate));
              dispatch(setXp(xp));
              dispatch(setImage(img));
              setNewUser(false);
              setInitialize(true);
            } else {
              setNewUser(true);
              setInitialize(true);
            }
          }, (error: number) => {
            if (error == 500) {
              setNewUser(true);
              setInitialize(true);
            }
          })
        }  
      }
    }, 3000)
  });

  if (initialize == false) {
    return (
        <View style={{
            width: screenWidth,
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{
                color: "#6d9bff",
                fontSize: 30,
                textAlign: "center"
            }}>Initialisation de</Text>

            <Text style={{
                color: "#6d9bff",
                fontSize: 30,
                marginBottom: 30,
                textAlign: "center"
            }}>MyHeroServices</Text>
              <WaveIndicator color='#6d9bff' size={40} />
        </View>
    );
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isNewUser == true ? "Connexion" : "Home"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
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
