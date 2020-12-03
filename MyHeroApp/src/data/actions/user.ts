import { IAlert } from '../types/alerts';
import { 
    SET_NAME, 
    SET_RATE, 
    SET_IMAGE, 
    SET_XP, 
    SET_STATUS_SEND, 
    SET_STATUS_HELP, 
    SET_SEND_ALERT_DATA,
    SET_HELP_ALERT_DATA, 
    SET_CACHE_NAVIGATION,
    SET_CACHE_CREATE_ALERT_LEVEL, 
    SET_CACHE_SHOW_ALERT,
    SET_CACHE_USER,
    IUser, 
    IUserSend,
    IUserHelp,
    SET_MAIL,
    IUserCache
} from '../types/user';

////////////////////////////////////////////////////

export interface ISetMail {
    type: typeof SET_MAIL;
    payload: {
        mail: string;
    }
}

export const setMail = (data: string) => ({
    type: SET_MAIL,
    payload: {
        mail: data
    }
})

////////////////////////////////////////////////////

export interface ISetName {
    type: typeof SET_NAME;
    payload: {
        name: string;
    }
}

export const setName = (data: string) => ({
    type: SET_NAME,
    payload: {
        name: data
    }
})

////////////////////////////////////////////////////

export interface ISetRate {
    type: typeof SET_RATE;
    payload: {
        rate: number;
    }
}

export const setRate = (data: number) => ({
    type: SET_RATE,
    payload: {
        rate: data
    }
})

////////////////////////////////////////////////////

export interface ISetImage {
    type: typeof SET_IMAGE;
    payload: {
        image: string;
    }
}

export const setImage = (data: string) => ({
    type: SET_IMAGE,
    payload: {
        image: data
    }
})

////////////////////////////////////////////////////

export interface ISetXp {
    type: typeof SET_XP;
    payload: {
        xp: number;
    }
}

export const setXp = (data: number) => ({
    type: SET_XP,
    payload: {
        xp: data
    }
})

////////////////////////////////////////////////////

export interface ISetStatusSend {
    type: typeof SET_STATUS_SEND;
    payload: {
        statusSend: boolean
    }
}

export const setStatusSend = (data: boolean) => ({
    type: SET_STATUS_SEND,
    payload: {
        statusSend: data
    }
})

////////////////////////////////////////////////////

export interface ISetStatusHelp {
    type: typeof SET_STATUS_HELP;
    payload: {
        status: boolean
    }
}

export const setStatusHelp = (data: boolean) => ({
    type: SET_STATUS_HELP,
    payload: {
        status: data
    }
})

////////////////////////////////////////////////////

export interface ISetSendAlertData {
    type: typeof SET_SEND_ALERT_DATA;
    payload: {
        send: IUserSend
    }
}

export const setSendAlertData = (data: IUserSend) => ({
    type: SET_SEND_ALERT_DATA,
    payload: {
        send: data
    }
})

////////////////////////////////////////////////////

export interface ISetHelpAlertData {
    type: typeof SET_HELP_ALERT_DATA;
    payload: {
        help: IUserHelp
    }
}

export const setHelpAlertData = (data: IUserHelp) => ({
    type: SET_HELP_ALERT_DATA,
    payload: {
        help: data
    }
})


////////////////////////////////////////////////////

export interface ISetCacheCreateAlertLevel {
    type: typeof SET_CACHE_CREATE_ALERT_LEVEL;
    payload: {
        createAlertLevel: number
    }
}

export const setCacheCreateAlertLevel = (data: number) => ({
    type: SET_CACHE_CREATE_ALERT_LEVEL,
    payload: {
        createAlertLevel: data
    }
})

////////////////////////////////////////////////////

export interface ISetCacheShowAlert {
    type: typeof SET_CACHE_SHOW_ALERT;
    payload: {
        showAlert: IAlert
    }
}

export const setCacheShowAlert = (data: IAlert) => ({
    type: SET_CACHE_SHOW_ALERT,
    payload: {
        showAlert: data
    }
})

////////////////////////////////////////////////////

export interface ISetCacheNav {
    type: typeof SET_CACHE_NAVIGATION,
    payload: {
        nav: string;
    }
}

export const setCacheNav = (data: string) => ({
    type: SET_CACHE_NAVIGATION,
    payload: {
        nav: data
    }
})

////////////////////////////////////////////////////

export interface ISetCacheUser {
    type: typeof SET_CACHE_USER,
    payload: {
        userCache: IUserCache
    }
}

export const setCacheUser = (d: IUserCache) => ({
    type: SET_CACHE_USER,
    payload: {
        userCache: d
    }
})

export type IUserActions = 
    ISetMail |
    ISetName | 
    ISetRate | 
    ISetImage |
    ISetXp |
    ISetSendAlertData |
    ISetStatusHelp |
    ISetStatusSend |
    ISetHelpAlertData |
    ISetCacheCreateAlertLevel |
    ISetCacheShowAlert |
    ISetCacheNav |
    ISetCacheUser
;