import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';
import * as TaskManager from 'expo-task-manager';

import { Notifications } from 'expo';


export abstract class MyHeroService {
    public static latitude = 0;
    public static longitude = 0;

    public static taskManager() {
      TaskManager.defineTask("getLocalisation", this.getLocalisation)
    }

    public static async getLocalisation() {

      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
        if (status !== 'granted') {
          console.log("marche pô")
          return
        }
        
        let location = await Location.getCurrentPositionAsync({});
        let latitudeA = await (await Location.getCurrentPositionAsync({ enableHighAccuracy: false })).coords.latitude;
        let longitudeA = await (await Location.getCurrentPositionAsync({ enableHighAccuracy: false })).coords.longitude;
      
        let latitudeS = parseFloat(JSON.stringify(latitudeA).replace(/,/g, ''));
        let longitudeS = parseFloat(JSON.stringify(longitudeA).replace(/,/g, ''));
  
        this.latitude = latitudeS;
        this.longitude = longitudeS;
      
        //console.log(this.latitude);
        //console.log(this.longitude);
      } catch (err) {
        console.log("log", err)
        console.error("log", err)
      }
    }

    public static async getNotificationToken() {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    
      if (status !== "granted") {
        alert("No notification permission")
        return;
      }
  
      let token = await Notifications.getExpoPushTokenAsync();

      return token;
    }

}