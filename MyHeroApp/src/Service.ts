import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

import { Notifications } from 'expo';


export abstract class MyHeroService {

    public static async getLocalisation() {
        try {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
      
            if (status !== 'granted') {
              return
            }
        
            let latitudeA = await (await Location.getCurrentPositionAsync({})).coords.latitude;
            let longitudeA = await (await Location.getCurrentPositionAsync({})).coords.longitude;
      
            const latitudeS = parseFloat(JSON.stringify(latitudeA).replace(/,/g, ''));
            const longitudeS = parseFloat(JSON.stringify(longitudeA).replace(/,/g, ''));
      
            const data = {
                latitude: latitudeS,
                longitude: longitudeS
            }

            return data;
        } catch {
            return null;
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