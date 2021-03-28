import { NativeSegmentedControlIOSChangeEvent } from "react-native";
import { IAlert } from "./alerts";

export const SET_MAIL = "SET_MAIL";
export const SET_NAME = "SET_NAME";
export const SET_RATE = "SET_RATE";
export const SET_IMAGE = "SET_IMAGE";
export const SET_XP = "SET_XP";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_VIEWER_COUNT = "SET_VIEWER_COUNT";

export const SET_TEMP_LANGAGE = "SET_TEMP_LANGAGE";
export const SET_TEMP_LANGAGE_STATUS = "SET_TEMP_LANGAGE_STATUS";

export const SET_STATUS_SEND = "SET_STATUS";
export const SET_STATUS_HELP = "SET_STATUS";

export const SET_SEND_ALERT_ID = "SET_SEND_ALERT_ID";
export const SET_SEND_ALERT_STATUS = "SET_SEND_ALERT_STATUS";
export const SET_SEND_ALERT_DATA = "SET_SEND_ALERT_DATA";

export const SET_HELP_ALERT_ID = "SET_HELP_ALERT_ID";
export const SET_HELP_ALERT_STATUS = "SET_HELP_ALERT_STATUS";
export const SET_HELP_ALERT_DATA = "SET_HELP_ALERT_DATA";

export const SET_CACHE_CREATE_ALERT_LEVEL = "SET_CACHE_CREATE_ALERT_LEVEL";
export const SET_CACHE_SHOW_ALERT = "SET_CACHE_SHOW_ALERT";
export const SET_CACHE_NAVIGATION = "SET_CACHE_NAVIGATION";
export const SET_CACHE_USER = "SET_CACHE_USER";


export interface IUserSend {
    status: boolean;
    data: IAlert
}

export interface IUserHelp {
    status: boolean;
    data: IAlert
}

export interface IUserCache {
    status: boolean;
    mail: string;
    name: string;
    rate: number;
    image: string;
    xp: number;
}

export interface IUser {
    mail?: string;
    name: string;
    rate: number;
    image: string;
    xp: number;
    language: string;
    countViewers: number;

    tempLangage: any;
    tempLangageStatus: boolean;

    statusSend: boolean;
    statusHelp: boolean;

    send: IUserSend,
    help: IUserHelp,

    createAlertLevel: number;
    showAlert: IAlert;
    navCache: string;

    userCache: IUserCache;
}