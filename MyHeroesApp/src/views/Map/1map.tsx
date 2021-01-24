/*
import React, { useState } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MapView from 'react-native-maps';
import HeaderComponent from '../../components/Header/header';
import * as Permissions from 'expo-permissions';
import getLocationAsync from './service';


const [state, setState] = useState({
    location: {},
    errorMessage: '',
})

const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
})

const _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        setState({...state, errorMessage: 'Permission to access location was denied' });
    }

    let location = await Location.getCurrentPositionAsync({});
    
    //location.coords.latitude
    //location.coords.longitude

    const maybeLocation = await getLocationAsync();

    setRegion({...region, latitude: maybeLocation.latitude });
    setRegion({...region, longitude: maybeLocation.longitude });
};



const MapScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    _getLocationAsync();
    
    return (
        <>
            {_getLocationAsync()}
            <HeaderComponent map={true} navigation={navigation} />

            <Text>{region.latitude}</Text>
            <Text>{region.longitude}</Text>

            <MapView
                showsUserLocation={true}
                followsUserLocation={true}
                
                style={{
                    height: screenHeight,
                    width: screenWidth,
                    borderRadius: 10
                }}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: region.latitudeDelta,
                    longitudeDelta: region.longitudeDelta,
                }}
            >
            </MapView>
        </>
    );
}

export default MapScreen;

*/