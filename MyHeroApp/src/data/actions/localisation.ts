import { SET_LOCALISATION, UPDATE_LOCALISATION, DELETE_LOCALISATION, IPosition } from "../types/localisation";


interface ISetLocalisation {
    type: typeof SET_LOCALISATION;
    payload: IPosition;
}

interface IUpdateLocalisation {
    type: typeof UPDATE_LOCALISATION;
    payload: IPosition;
}

interface IDeleteLocalisation {
    type: typeof DELETE_LOCALISATION;
    payload: IPosition;
}

export type ILocalisationAction = ISetLocalisation | IUpdateLocalisation | IDeleteLocalisation;