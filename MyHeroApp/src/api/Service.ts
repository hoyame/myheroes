import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";
import axios, { AxiosInstance } from "axios";

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

export const TURN_SERVER_URL = "176.31.230.112:3478";
export const TURN_SERVER_USERNAME = "username";
export const TURN_SERVER_CREDENTIAL = "password";

const apiLink = "http://176.31.230.112:3333/";
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
	public static city: string = "";
	public static departement: string = "";

	public static initialize() {
		if (this.notInitialized == false) return;

		console.log("Initialize application service");

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
			position => {
				let currentLatitude = parseFloat(JSON.stringify(position.coords.latitude).replace(/,/g, ""));
				let currentLongitude = parseFloat(JSON.stringify(position.coords.longitude).replace(/,/g, ""));

				this.latitude = currentLatitude;
				this.longitude = currentLongitude;

				console.log(this.longitude);
				console.log(this.latitude);
			},

			error => console.error(error.message),

			{ enableHighAccuracy: true }
		);
	}

	public static async requestLocationPermission() {
		if (Platform.OS == "android") {
			console.log("reqif");

			try {
				const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);

				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					console.log("You can use locations ");
					this.getLocalisation();
				} else {
					console.log("Location permission denied");
				}
			} catch (err) {
				console.warn(err);
			}
		} else {
			console.log("reqelse");
			Geolocation.requestAuthorization();
			setTimeout(() => {
				this.getLocalisation();
			}, 5500);
		}
	}

	public static async requestCamAudioPermission() {
		if (Platform.OS == "android") {
			try {
				const granted = await PermissionsAndroid.requestMultiple([
					PermissionsAndroid.PERMISSIONS.CAMERA,
					PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
				]);

				if (
					granted["android.permission.RECORD_AUDIO"] === PermissionsAndroid.RESULTS.GRANTED &&
					granted["android.permission.CAMERA"] === PermissionsAndroid.RESULTS.GRANTED
				) {
					console.log("You can use the cameras & mic");
				} else {
					console.log("Permission denied");
				}
			} catch (err) {
				console.warn(err);
			}
		} else {
			// get acces for ios
		}
	}

	public static async getNotificationToken() {}

	public static initConnexionStream() {
		return "";
	}

	public static sendNotification(title: string, content: string) {
		/*
      if (Platform.OS == "android") {        
        PushNotification.deleteChannel("myhero");
        
        PushNotification.createChannel(
          {
            channelId: "myhero", // (required)
            channelName: "MyHeroes", // (required)
          },
          (created) => {       
            PushNotification.localNotification({
              // Android Only Properties          
              channelId: "myhero", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.
              vibration: 1000, // vibration length in milliseconds, ignored if vibrate=false, default: 1000      
              alertAction: "view", // (optional) default: view
              category: "", // (optional) default: empty string
              title: title, // (optional)
              message: content, // (required)
            });
          }
        );
      } else if (Platform.OS == "ios") {
        PushNotificationIOS.presentLocalNotification({
          alertBody: content
        });    
      }
    */
	}
}
