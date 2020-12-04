import React, { useEffect } from 'react';
import { Platform, StyleSheet } from 'react-native';;
import Controller from './Controller';
import { Provider } from 'react-redux';
import { store, persistor } from './data/store';
import { MyHeroService } from './api/Service';
import MyHeroAlerts from './api/Alerts';
import BackgroundTimer from 'react-native-background-timer';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { PersistGate } from 'redux-persist/integration/react';


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


export const API_LINK = "http://146.59.227.90:3333"
export const API_LINK_CDN = "http://146.59.227.90:3000"

const App = () => {
  useEffect(() => {
    if (Platform.OS == "ios") {
      setTimeout(() => {
        MyHeroService.requestLocationPermission();
        MyHeroService.requestCamAudioPermission();
        MyHeroService.initialize();
        MyHeroAlerts.GetAlerts();
      }, 1000)
      return
    } else {
      try {
        setTimeout(() => {
          MyHeroService.requestLocationPermission();
          MyHeroService.requestCamAudioPermission();
          MyHeroService.initialize();
          MyHeroAlerts.GetAlerts();
        }, 1000)
      } catch {
        return
      }
    }
  })

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Controller />
      </PersistGate>
    </Provider>
  );
}

BackgroundTimer.runBackgroundTimer(() => { 
  MyHeroAlerts.GetAlerts();
}, 200000);



export default App;
