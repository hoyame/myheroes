import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';;
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

const SOCKET_URL = 'http://146.59.227.90:3333';

const credentials = {
  clientId: '911354456695-uteuqkfb2vq4s32s73su4ho6eo90g6te.apps.googleusercontent.com',
  appId: '1:911354456695:ios:296e5119c945f0013d3472',
  apiKey: 'AIzaSyBKzpbK2HMO47R822icS8cV77dwhyIjHiQ',
  databaseURL: 'https://myhero-291513.firebaseio.com',
  storageBucket: 'myhero-291513.appspot.com',
  messagingSenderId: '911354456695',
  projectId: 'myhero-291513',
};

const config = {
  name: 'SECONDARY_APP',
};

export const socket = io.connect(SOCKET_URL, {
  transports: ['websocket'],
  reconnectionAttempts: 15 //Nombre de fois qu'il doit réessayer de se connecter
});

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

export const API_LINK = "http://146.59.227.90:3333";
export const API_LINK_CDN = "http://146.59.227.90:3000";

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
        MyHeroAlerts.getCityGE(MyHeroService.latitude, MyHeroService.longitude, (e: any) => {
          console.log("efiuebgiubegbeigbeirgbrebgiug", e)
          firebase.messaging().subscribeToTopic(e.replace(/\s+/g, ''));
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



export default App;
