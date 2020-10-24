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
        case GET_ALERTS: 
            return state;
        default: return state;
    }
}

const initialState: IAlertState = {
    list: [
        {   
            id: 1,
            level: 1,
            source: "Hoyame",
            latitude: 45.684866,
            longitude: 5.9096452,    
            description: "Arrive pas a se reveiller"
        },
        {
            id: 2,
            level: 3,
            source: "Jibril",
            latitude: 45.6945534,
            longitude: 5.9058787,
            description: "Agression"
        },
        {
            id: 3,
            level: 2,
            source: "Ademo",
            latitude: 45.6940966,
            longitude: 5.8894133,
            description: "Maison prend feu"
        },
        {
            id: 4,
            level: 1,
            source: "Kiruu",
            latitude: 45.6914931,
            longitude: 5.9029322,
            description: "Panne d'essence"
        }
    ]
}

export default AlertReducer;