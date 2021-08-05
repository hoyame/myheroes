import { SET_LOCALISATION, UPDATE_LOCALISATION, DELETE_LOCALISATION, IPosition } from "../types/localisation";

interface ISetLocalisation {
	type: typeof SET_LOCALISATION;
	payload: IPosition;
}

export const setLocalisation = (data: IPosition) => ({
	type: SET_LOCALISATION,
	payload: data,
});

interface IUpdateLocalisation {
	type: typeof UPDATE_LOCALISATION;
	payload: IPosition;
}

export const updateLocalisation = (data: IPosition) => ({
	type: UPDATE_LOCALISATION,
	payload: data,
});

interface IDeleteLocalisation {
	type: typeof DELETE_LOCALISATION;
	payload: IPosition;
}

export const deleteLocalisation = (data: IPosition) => ({
	type: DELETE_LOCALISATION,
	payload: data,
});

export type ILocalisationAction = ISetLocalisation | IUpdateLocalisation | IDeleteLocalisation;
