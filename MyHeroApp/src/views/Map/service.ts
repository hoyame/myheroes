import {
    getCurrentPositionAsync,
    LocationData,
    hasServicesEnabledAsync,
} from 'expo-location';

import { LOCATION, askAsync } from 'expo-permissions';
import ERRORS, { Error } from './error';
  
export const getLocationPermissions = async (): Promise<boolean> => {
    const { status } = await askAsync(LOCATION);
    return status === 'granted';
};

const getLocationAsync = async () => {
    const currentLocation = await getCurrentPositionAsync({});
    const data = { 
        latitude: currentLocation.coords.latitude, 
        longitude: currentLocation.coords.longitude 
    }
    
    return data;
};

export default getLocationAsync;