import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';


export abstract class MyHeroService {
    public static latitude = 0;
    public static longitude = 0;

    public static async getLocalisation() {
      Geolocation.getCurrentPosition(
        (position) => {
            let currentLatitude = parseFloat(JSON.stringify(position.coords.latitude).replace(/,/g, ''));
            let currentLongitude = parseFloat(JSON.stringify(position.coords.longitude).replace(/,/g, ''));

            this.latitude = currentLatitude;
            this.longitude = currentLongitude;

            console.log(this.longitude);
            console.log(this.latitude);
        }, 
        
        (error) => console.error(error.message), 
        
        {}
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

    }

}