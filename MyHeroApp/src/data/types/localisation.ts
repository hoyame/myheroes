export const SET_LOCALISATION = "SET_LOCALISATION";
export const UPDATE_LOCALISATION = "DELETE_LOCALISATION";
export const DELETE_LOCALISATION = "DELETE_LOCALISATION";

export interface IPosition {
	latitude: number;
	longitude: number;
	localisation: boolean;
	state: boolean;
}
