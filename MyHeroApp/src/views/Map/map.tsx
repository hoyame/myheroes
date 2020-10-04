import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from 'src/components/Header/header';

const MapScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <Text style={{
                fontSize: 35
            }}>Map</Text>
        
            <Text onPress={() => navigation.navigate('Home')}>go home</Text>
        </>
    );
}

export default MapScreen;