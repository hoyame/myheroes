import { Value } from "react-native-reanimated";

export const ADD_ALERT = "ADD_ALERT";
export const GET_ALERTS = "GET_ALERTS";
export const UPDATE_ALERTS = "UPDATE_ALERTS";

export interface IAlert {
    identifier: string;
    id?: number;
    level: number;
    source: string;
    latitude: number;
    longitude: number;
    description: string;
    hour: string;
    webrtc: any;
}