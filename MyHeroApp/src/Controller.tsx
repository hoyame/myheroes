import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Animated, Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setLocalisation } from './data/actions/localisation';
import { MyHeroService } from './api/Service';
import { useDispatch } from 'react-redux';
import HeaderComponent from './components/Header/header';
import NavbarComponent from './components/Navbar/navbar';
import HomeScreen from './views/Home/home';
import AlertScreen from './views/Alerts/alerts';
import NavScreen from './views/Nav/nav';
import MapScreen from './views/Map/map';
import AccountScreen from './views/Account/account';
import ConnexionScreen from './views/Connection/connexion';
import AlertPageScreen from './views/Alerts/alert_page';
import CreateAlertScreen from './views/Alerts/create_alert';
import { SenderAcceptAlertPage, HelperAcceptAlertPage } from './views/Alerts/accept_alert';
import GDPSPage from './views/GDPS/index';
import NDUPage from './views/NDU/index'
import { useReduxState } from './data/store';
import { setHelpAlertData, setImage, setMail, setName, setRate, setXp } from './data/actions/user';
import { WaveIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';
import { useState } from 'react';
import Users from './api/User';
import ParametresScreen from './views/Parametres';
import AvisScreen from './views/Avis';
import ConfidentialiteScreen from './views/Confidentialite';
import ProposScreen from './views/Propos';
import EndAlertScreen from './views/Alerts/end_alert';
import { Root, Popup, Toast } from 'popup-ui';
import I18n, { setLanguage } from './i18n/i18n';
import FAQScreen from './views/FAQ';
import GeneralScreen from './views/General';
import BackgroundTimer from 'react-native-background-timer';
import MyHeroAlerts, { AlertsData, AlertStatusDataView, AlertStatusDataViewReq, AlertStatusView, setAlertStatus } from './api/Alerts';
import { addAlert, getAlert } from './data/actions/alerts';
import { API_LINK, API_LINK_CDN } from './App';
import ViewStream from './views/Alerts/view_stream';
import * as RNLocalize from "react-native-localize";
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import 'react-native-gesture-handler';
import { Langues } from './data/langues';
import SocketIOClient from 'socket.io-client/dist/socket.io.js'
import io from 'socket.io-client';

const SOCKET_URL = 'http://146.59.227.90:3333';

export const socket = io.connect(SOCKET_URL, {
  transports: ['websocket'],
  reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
});

const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();
  const dispatch = useDispatch();
  const userInformation = useReduxState(state => state.user.name);
  const userMail = useReduxState(state => state.user.mail);
  const statusSend = useReduxState(state => state.user.send.status);
  const alerts = useReduxState(state => state.alerts.list);
  const language = useReduxState(state => state.user.language);
  const [initialize, setInitialize] = useState(false);
  const [isNewUser, setNewUser] = useState(true);
  const [nameA, setAName] = useState('');
  const [mailA, setAMail] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [languageS, setLanguageS] = useState(false);
  const alertDataHelp = useReduxState(state => state.user.showAlert);
  const statusHelp = useReduxState(state => state.user.help.status);

  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false)
    }, 1500) 
  }, []);

  setTimeout(() => {
    if (statusSend == true) {
      MyHeroAlerts.setViewerDataStatus(userMail, true)
    }
  }, 2000)

  setInterval(() => {
    if (MyHeroAlerts.StatusUpdate == true) {
      let lenghtAlerts = AlertsData.length;
   
      if (lenghtAlerts === alerts.length) {
        return
      } else {          
        dispatch(getAlert(false));
          
        AlertsData.map((v, k) => {
          dispatch(addAlert({ 
            identifier: v.identifier,
            latitude: v.latitude, 
            longitude: v.longitude, 
            source: v.source, 
            level: v.level, 
            description: v.description,
            webrtc: v.webrtc 
          }))
        })
        
        MyHeroAlerts.SetStatusUpdate(false)
      }
    }
  }, 1000);

  setInterval(() => {
    if (statusHelp == true) {
        console.log("AlertStatusDataView", AlertStatusDataView)
        console.log("AlertStatusDataViewReq", AlertStatusDataViewReq)
        console.log("AlertStatusView", AlertStatusView)
        
        if (AlertStatusDataView === AlertStatusDataViewReq && AlertStatusView == true) {
          setAlertStatus(false, '')
          MyHeroAlerts.removeAlert(alertDataHelp.identifier)
          dispatch(setHelpAlertData({status: false, data: {
            identifier: "",
            id: 0,
            level: 0,
            source: "",
            latitude: 0,
            longitude: 0,    
            description: "",
            webrtc: ""
          }}))              
        }
      }
    }, 5000)
    
    useEffect(() => {
    setTimeout(() => {
      if (MyHeroService.latitude !== 0 && MyHeroService.longitude !== 0) {
        dispatch(setLocalisation({ latitude: MyHeroService.latitude, longitude: MyHeroService.longitude, localisation: true, state: true }))
      }

    }, 5000)

    setTimeout(async () => {
      if (initialize == false) {
        let AMail = await AsyncStorage.getItem('@mail') || '';
        let ALanguage = await AsyncStorage.getItem('@language') || '';

        try {
          if (ALanguage !== "") {
            setLanguage(ALanguage);
            onRefresh();
          } else {
            console.log("err lang")
            const locales = RNLocalize.getLocales();

            if (Array.isArray(locales)) {
              setLanguage(locales[0].languageTag);
              onRefresh();
            }
          }

          if (ALanguage == "") {
            setLanguageS(true);
          }

        } catch {
          console.log("err lang")

          const locales = RNLocalize.getLocales();

          if (Array.isArray(locales)) {
            setLanguage(locales[0].languageTag);
            onRefresh();
          }
        }

        try {
          if (AMail !== "") {
            Users.GetData(AMail, (e: any) => {
              const data = JSON.stringify(e.data[0])
              const status: number = e.status
              const pseudo = e.data[0].pseudo
              const rate = parseFloat(JSON.stringify(e.data[0].rate))
              const xp = parseFloat(JSON.stringify(e.data[0].xp))
              const img = e.data[0].img

              if (status == 200) {
                dispatch(setMail(AMail));
                dispatch(setName(pseudo));
                dispatch(setRate(rate));
                dispatch(setXp(xp));
                dispatch(setImage(`http://146.59.227.90:3000/api/avatar/${pseudo}?time=${new Date()}`));
                setNewUser(false);
                setInitialize(true);
                Users.GetRate(AMail);
                Users.GetMessagesH24(1, 1);
                console.log("200");
              } else {
                setNewUser(true);
                setInitialize(true);
                console.log("else200")
              }
            }, (error: number) => {
              if (error == 500) {
                setNewUser(true);
                setInitialize(true);
                console.log("e500")
              } else if (error == 0) {
                Alert.alert(I18n.t("errorServMH"));
              }
            })
          } else {
            setNewUser(true);
            setInitialize(true);
          }  
        } catch (error) {
          setNewUser(true);
          setInitialize(true);
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
            <ImageBackground     
                resizeMode="repeat"
                source={{uri: "https://cdn.discordapp.com/attachments/785109841416683520/805510989868040242/1.png"}} 
                style={{      
                  position: 'absolute',
                  height: screenHeight,
                  width: screenWidth,
                }
            }>
            </ImageBackground>

            <Image 
              source={{uri: "https://cdn.discordapp.com/attachments/785109841416683520/805546399299141662/myhero.png"}}
              style={{
                marginTop: -90,
                height: 300,
                width: 300
              }}
            > 

            </Image>
            <Text style={{
                color: "#fff",
                fontSize: 30,
                fontWeight: "100",
                textAlign: "center"
            }}>{I18n.t("initMHServ")} ...</Text>
        </View>
    );
  }

  const _storeDataLanguage = async (d: string) => {
      try {
          await AsyncStorage.setItem('@language', d)
      } catch (error) {
          console.log("error", error)
      }
  };

  const returnLangues = () => {
    return Langues.map((v, k) => {
        return (
            <TouchableOpacity key={k} onPress={() => {
                _storeDataLanguage(v.id);
                setLanguage(v.id);
                setLanguageS(false);
            }} >
                <View style={{
                    display: 'flex',
                    flexDirection: "row",
                    height: 63,
                    backgroundColor: '#ffffff',
                    marginBottom: 10,
                    borderRadius: 15,
                    alignItems: "center",
                }}>
                    <View style={{
                        marginLeft: 10,
                        height: 65,
                        width: 65,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Image key={Date.now()}  source={{uri: v.img}} style={{
                            height: 35,
                            width: 45,
                            marginRight: 10,
                            borderRadius: 12
                        }} />    
                    </View> 

                    <Text style={{fontSize: 25}}>{v.name}</Text>  
                </View>
            </TouchableOpacity>
        );
    })
  }

  if (languageS == true) {
    return (
      <>        
          <ScrollView>
                <View style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  paddingTop: 90,
                  paddingLeft: 35,
                  paddingRight: 35,
                }}>
                  <Text style={{
                    fontSize: 30,
                    marginBottom: 20,
                  }}>Languages</Text>

                  {returnLangues()}
              </View>
          </ScrollView>
      </>
  );
  }


  return (
    <>
      <Root>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={isNewUser == true ? "Connexion" : "Home"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="General" component={GeneralScreen} />
            <Stack.Screen name="Parametres" component={ParametresScreen} />
            <Stack.Screen name="Avis" component={AvisScreen} />
            <Stack.Screen name="Alert" component={AlertScreen} />
            <Stack.Screen name="AlertPageScreen" component={AlertPageScreen} />
            <Stack.Screen name="CreateAlertScreen" component={CreateAlertScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Connexion" component={ConnexionScreen} />
            <Stack.Screen name="Nav" component={NavScreen} />
            <Stack.Screen name="SenderAcceptAlertPage" component={SenderAcceptAlertPage} />
            <Stack.Screen name="HelperAcceptAlertPage" component={HelperAcceptAlertPage} />
            <Stack.Screen name="NDU" component={NDUPage} />
            <Stack.Screen name="GDPS" component={GDPSPage} />
            <Stack.Screen name="Confidentialite" component={ConfidentialiteScreen} />
            <Stack.Screen name="Propos" component={ProposScreen} />
            <Stack.Screen name="EndAlertScreen" component={EndAlertScreen} />
            <Stack.Screen name="FAQScreen" component={FAQScreen} />
            <Stack.Screen name="ViewStream" component={ViewStream} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    </>
  );
}

export default Controller;
