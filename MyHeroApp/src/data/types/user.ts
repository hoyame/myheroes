import { IAlert } from "./alerts";

export const SET_NAME = "SET_NAME";
export const SET_RATE = "SET_RATE";
export const SET_IMAGE = "SET_IMAGE";
export const SET_XP = "SET_XP";

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


export interface IUserSend {
    status: boolean;
    data: IAlert
}

export interface IUserHelp {
    status: boolean;
    data: IAlert
}

export interface IUser {
    name: string;
    rate: number;
    image: string;
    xp: number;

    statusSend: boolean;
    statusHelp: boolean;

    send: IUserSend,
    help: IUserHelp,

    createAlertLevel: number;
    showAlert: IAlert;
    
}