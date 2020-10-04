import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from 'src/components/Header/header';

const MapScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent map={true} navigation={navigation} />

  
        </>
    );
}

export default MapScreen;