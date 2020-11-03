import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import axios, { AxiosInstance } from 'axios';

const apiLink = 'http://146.59.227.90:3333/';
axios.defaults.baseURL = apiLink;
axios.defaults.timeout = 1000 * 60 * 5;

interface IOptions {
  method?: any;
  headers?: any;
  body?: any;
}

export abstract class MyHeroService {
    public static notInitialized: boolean = true;
    public static instance: AxiosInstance;
    public static latitude: number = 0;
    public static longitude: number = 0;

    public static initialize() {
      if (this.notInitialized == false) return;
  
      console.log('Initialize application service');
    
      this.instance = axios.create();
      this.instance.defaults.timeout = 5000;
      this.instance.defaults.baseURL = `https://myheroapp/`;
  
      this.notInitialized = false;
    }

    public static post(eventName: string, payload: any = {}): Promise<Response> {
      return new Promise((resolve, reject) => {
        this.instance
          .post(`/${eventName}`, payload)
          .then((res: any) => resolve(res))
          .catch((err: any) => reject(err));
      });
    }
  
    public static get(eventName: string, payload: any = {}): Promise<Response> {
      return new Promise((resolve, reject) => {
        this.instance
          .post(`/${eventName}`, payload)
          .then((res: any) => resolve(res))
          .catch((err: any) => reject(err));
      });
    }
    
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
      if (Platform.OS == 'android') {
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
      } else {
        Geolocation.requestAuthorization()
        this.getLocalisation();
      }
    }

    public static async getNotificationToken() {

    }

    public static futch(url: string, opts: IOptions, onProgress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null) {
      console.log(url, opts)
      return new Promise( (res, rej)=>{
          var xhr = new XMLHttpRequest();
          xhr.open(opts.method || 'get', url);
          for (var k in opts.headers||{})
              xhr.setRequestHeader(k, opts.headers[k]);
          xhr.onload = (e: any) => res(e.target);
          xhr.onerror = rej;
          if (xhr.upload && onProgress)
              xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
          xhr.send(opts.body);
      });
  }
}