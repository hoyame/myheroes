import React from 'react';
import {View, Text } from 'react-native';


const TitleComponent = () => {
    return (
        <View style={{
            justifyContent: "center",
            height: 40,
            width: 120,
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: '#1d1d1d'
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "700",
                textAlign: "center",
                color: '#ffffff'
            }}>MyHeroes</Text>
        </View>
    );
}

export default TitleComponent;