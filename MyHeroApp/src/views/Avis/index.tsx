import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';

const AvisScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View>
                <Text>Avis</Text>

            </View>
        </>
    );
}

export default AvisScreen;