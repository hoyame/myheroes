import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';


export abstract class MyHeroService {
    public static latitude = 0;
    public static longitude = 0;

    public static taskManager() {
      //TaskManager.defineTask("getLocalisation", this.getLocalisation)
    }

    public static async getLocalisation() {
      Geolocation.getCurrentPosition(
        (position) => {
            let currentLatitude = parseFloat(JSON.stringify(position.coords.latitude).replace(/,/g, ''));
            let currentLongitude = parseFloat(JSON.stringify(position.coords.longitude).replace(/,/g, ''));

            this.latitude = currentLongitude;
            this.longitude = currentLatitude;

            console.log(this.longitude);
            console.log(this.latitude);
         }, 
         
         (error) => console.error(error.message), { 
            enableHighAccuracy: false, timeout: 20000
         }
      );
    }

    public static async requestLocationPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use locations ")
          this.getLocalisation();
        } else {
          console.log("Location permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    public static async getNotificationToken() {
      //const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      //
      //if (status !== "granted") {
      //  alert("No notification permission")
      //  return;
      //}
      //
      //let token = await Notifications.getExpoPushTokenAsync();
      //
      //return token;
    }

}