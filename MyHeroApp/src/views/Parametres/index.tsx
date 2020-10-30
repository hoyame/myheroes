import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';

const ParametresScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View>
                <Text>Parametres</Text>

            </View>
        </>
    );
}

export default ParametresScreen;