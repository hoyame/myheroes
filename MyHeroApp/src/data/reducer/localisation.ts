import { ILocalisationAction } from "../actions/localisation";
import { SET_LOCALISATION, UPDATE_LOCALISATION, DELETE_LOCALISATION, IPosition } from "../types/localisation";

const LocalisationReducer = (state = initialState, action: ILocalisationAction) => {
	switch (action.type) {
		case SET_LOCALISATION:
			return {
				...state,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				state: action.payload.state,
				localisation: action.payload.localisation,
			};
		case UPDATE_LOCALISATION:
			return {
				...state,
				latitude: action.payload.latitude,
				longitude: action.payload.longitude,
				state: action.payload.state,
				localisation: action.payload.localisation,
			};
		case DELETE_LOCALISATION:
			return { ...state, latitude: 0, longitude: 0, state: false, localisation: false };
		default:
			return initialState;
	}
};

const initialState: IPosition = {
	latitude: 0,
	longitude: 0,
	state: false,
	localisation: false,
};

export default LocalisationReducer;
