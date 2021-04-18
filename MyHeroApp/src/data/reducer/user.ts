import { ActionSheetIOS } from 'react-native';
import { IUserActions } from '../actions/user';
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
    SET_CACHE_CREATE_ALERT_LEVEL, 
    SET_CACHE_SHOW_ALERT,
    SET_CACHE_USER,
    SET_VIEWER_COUNT,
    IUser, 
    IUserSend,
    IUserHelp,
    SET_MAIL,
    SET_CACHE_NAVIGATION,
    SET_TEMP_LANGAGE,
    SET_TEMP_LANGAGE_STATUS,
    SET_NEWS_STATUS,
    SET_NEWS_CONTENT
} from '../types/user';


const UserReducer = (state = initialState, action: IUserActions): IUser => {
    switch (action.type) {
        case SET_MAIL: 
            return { 
                ...state, 
                mail: action.payload.mail 
            }; 
        case SET_NAME: 
            return { 
                ...state, 
                name: action.payload.name 
            }; 
        case SET_RATE: 
            return { 
                ...state, 
                rate: action.payload.rate 
            }; 
        case SET_IMAGE: 
            return { 
                ...state, 
                image: action.payload.image 
            }; 
        case SET_XP: 
            return { 
                ...state, 
                xp: action.payload.xp 
            }; 
        case SET_SEND_ALERT_DATA: 
            return { 
                ...state, 
                send: action.payload.send 
            }; 
        case SET_HELP_ALERT_DATA: 
            return { 
                ...state, 
                help: action.payload.help 
            }; 
        case SET_CACHE_CREATE_ALERT_LEVEL: 
            return { 
                ...state, 
                createAlertLevel: action.payload.createAlertLevel 
            }; 
        case SET_CACHE_SHOW_ALERT: 
            return { 
                ...state, 
                showAlert: action.payload.showAlert 
            };
        case SET_CACHE_NAVIGATION: 
            return { 
                ...state, 
                navCache: action.payload.nav            
            }
        case SET_CACHE_USER: 
            return {
                ...state,
                userCache: action.payload.userCache
            }
        case SET_VIEWER_COUNT:
            return {
                ...state,
                countViewers: action.payload.count
            }
        case SET_TEMP_LANGAGE:
            return {
                ...state,
                tempLangage: action.payload.temp
            }
        case SET_TEMP_LANGAGE_STATUS:
            return {
                ...state,
                tempLangageStatus: action.payload.tempStatus
            } 
        case SET_NEWS_STATUS:
            return {
                ...state,
                statusNews: action.payload.statusNews
            } 
        case SET_NEWS_CONTENT:
            return {
                ...state,
                news: action.payload.news
        } 
        default: return state;
    }
}

const initialState: IUser = {
    name: '',
    rate: 0,
    image: '',
    xp: 0,
    language: '',
    countViewers: 0,

    tempLangage: "",
    tempLangageStatus: false,

    statusSend: false,
    statusHelp: false,
    statusNews: false,

    news: "",

    send: {
        id: 0,
        status: false,
        data: {}
    },

    help: {
        id: 0,
        status: false,
        data: {}
    },

    createAlertLevel: 0,
    showAlert: {},
    navCache: "",
    userCache: {
        status: false,
        mail: "",
        name: "",
        rate: 0,
        image: "",
        xp: 0
    },
}

export default UserReducer;