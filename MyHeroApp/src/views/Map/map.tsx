import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import MapView from 'react-native-maps';
import HeaderComponent from '../../components/Header/header';

const MapScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    return (
        <>
            <HeaderComponent map={true} navigation={navigation} />

            <MapView
                showsUserLocation={true}

                style={{
                    height: screenHeight,
                    width: screenWidth,
                    borderRadius: 10
                }}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </>
    );
}

export default MapScreen;