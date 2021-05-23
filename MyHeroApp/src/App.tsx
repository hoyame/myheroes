import React, { useEffect } from 'react';
import { Alert, Platform, StyleSheet } from 'react-native';;
import Controller from './Controller';
import { Provider } from 'react-redux';
import { store, persistor } from './data/store';
import { MyHeroService } from './api/Service';
import MyHeroAlerts, { SetStatusDataViewReq } from './api/Alerts';
import BackgroundTimer from 'react-native-background-timer';
import firebase from '@react-native-firebase/app';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { PersistGate } from 'redux-persist/integration/react';
import io from 'socket.io-client';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-community/async-storage';

const SOCKET_URL = 'http://176.31.230.112:3333';

const credentials = {
  clientId: '990257045964-ok4752hr40qedgcpuk42s7d3psoe38fp.apps.googleusercontent.com',
  appId: '1:990257045964:ios:c901b4cc34a2a63512bd69',
  apiKey: 'AIzaSyBO_SCkI6qYiI-WjgQaPduqmYt-Rw9x8_M',
  databaseURL: '',
  storageBucket: 'inlaid-chiller-308723.appspot.com',
  messagingSenderId: '990257045964',
  projectId: 'inlaid-chiller-308723',
};

const config = {
  name: 'SECONDARY_APP',
};

export const socket = io.connect(SOCKET_URL, {
  transports: ['websocket'],
  reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
});

String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
     
    return str;
}

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token: any) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification: { finish: (arg0: any) => void; }) {
    console.log("NOTIFICATION:", notification);

    // process the notification
    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification: { action: any; }) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  onRegistrationError: function(err: { message: any; }) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: true,
});

export const API_LINK = "http://176.31.230.112:3333";
export const API_LINK_CDN = "http://176.31.230.112:3000";

const unsubscribeFromTopic = async () => {
    const AOldNotif = await AsyncStorage.getItem('@old_notif') || '';
    messaging().unsubscribeFromTopic(AOldNotif)
}

const _storeData = async (e: string) => {
  try {
    await AsyncStorage.setItem('@old_notif', e)
  } catch (error) {
    console.log("old_notif_error", error)
  }
}

const App = () => {
  useEffect(() => {
    socket.on('connect', function(data: any) {
      socket.emit('join', 0);
    });

    socket.on('add_alerts', function(data: any){
      console.log("add_alerts");
      MyHeroService.sendNotification('Alertes', 'Des alertes sont disponibles');
      MyHeroAlerts.GetAlerts(data);
    });

    socket.on('remove_alerts', function(data: any){
      console.log("remove_alerts");
      console.log("remove_data", data[1])
      SetStatusDataViewReq(data[1].identifier)
      MyHeroAlerts.GetAlerts(data[0]);
    });

    socket.on('get_alerts', function(data: any){
      console.log("get_alerts");
      MyHeroAlerts.GetAlerts(data);
    });
  })
  
  useEffect(() => {
    firebase.initializeApp(credentials);
  })

  setTimeout(() => {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
            console.log("token = ", fcmToken)
        } else {
          // user doesn't have a device token yet
        } 
      })
    ;

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
        );
        
    });
      
      // Check whether an initial notification is available
      messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
            );
          }
          console.log("ddddd", true)
        });
  }, 5000)

  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.requestLocationPermission();
        MyHeroService.requestCamAudioPermission();
        MyHeroService.initialize();
      }, 1000)
      return
    } else {
      try {
        setTimeout(() => {
          MyHeroService.requestLocationPermission();
          MyHeroService.requestCamAudioPermission();
          MyHeroService.initialize();
        }, 1000)
      } catch {
        return
      }
    }
  })

  setTimeout(() => {
    console.log("zufzfizvuibvizvizvzvziuvk")
    firebase.messaging().unsubscribeFromTopic('all')

    MyHeroAlerts.getCityGE(MyHeroService.latitude, MyHeroService.longitude, (e: any) => null, (departement: any) => {
      const e = departement.sansAccent()
      
      console.log("efiuebgiubegbeigbeirgbrebgiug", e)

      MyHeroAlerts.getCityGE(MyHeroService.latitude, MyHeroService.longitude, (city: any) => {
        MyHeroService.city = city;
        
        MyHeroService.departement = e;
        
        console.log("appp ", MyHeroService.departement, MyHeroService.city)
        unsubscribeFromTopic();
        
        setTimeout(() => {
          const messaging = firebase.messaging();
          messaging
          .requestPermission()
          .then(() => {
            return messaging.getToken();
          })
          .then(token => {
            messaging
            .subscribeToTopic(e.replace(/\s+/g, ''))
            .then((response) => {
              _storeData(e.replace(/\s+/g, ''));
              console.log("2353526626236", response);
            })
            .catch(function(error) {
              console.log('Error subscribing to topic:', error);
            });
          })
          .catch(err => {
            console.log('Unable to get permission to notify.', err);
          });
        }, 2500)
      }, (e: any) => null)
    })
  }, 10000)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Controller />
      </PersistGate>
    </Provider>
  );
}

BackgroundTimer.runBackgroundTimer(() => { 
  //MyHeroAlerts.GetAlerts();
}, 200000);


/*
setTimeout(() => {
  console.log("zufzfizvuibvizvizvzvziuvk")

  MyHeroAlerts.getCityGE(MyHeroService.latitude, MyHeroService.longitude, (ed: any) => null, (e: any) => {
    console.log("efiuebgiubegbeigbeirgbrebgiug")

    setTimeout(() => {
      unsubscribeFromTopic()
      messaging().subscribeToTopic(e.replace(/\s+/g, ''))
        .then(() => {
          console.log("scrubcrite a: ", e.replace(/\s+/g, ''));
          Alert.alert('scrubcrite a: ', e.replace(/\s+/g, ''));
        })
            
        .catch((e) => {
          console.log("errrr scrubcrite", e);
          Alert.alert('errr scrubcrite', e);
        });

      _storeData(e.replace(/\s+/g, ''));
    }, 1500) 
  })
}, 10000)
*/
export default App;
