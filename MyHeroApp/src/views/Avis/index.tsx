import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';

const AvisScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginBottom: 5
                }}>MyHeroes</Text>

                <RateComponent title="Noter l'application" placeholder="Avis" onClick={() => null} />
            </View>
        </>
    );
}

export default AvisScreen;