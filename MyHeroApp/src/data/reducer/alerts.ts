import { Alert } from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import { IAlertsAction } from '../actions/alerts';
import { ADD_ALERT, GET_ALERTS, UPDATE_ALERTS, IAlert } from '../types/alerts'


export interface IAlertState {
    list: IAlert[];
}

const AlertReducer = (state = initialState, action: IAlertsAction): IAlertState => {
    switch (action.type) {
        case ADD_ALERT: 
            return { 
                ...state, 
                list: [...state.list, action.payload] 
            };
        case UPDATE_ALERTS: 
            return { 
                ...state, 
                list: [action.payload] 
            };
        case GET_ALERTS: 
            return { 
                ...state, 
                list: [] 
            };
        default: return state;
    }
}

const initialState: IAlertState = {
    list: []
}

export default AlertReducer;