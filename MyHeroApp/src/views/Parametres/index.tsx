import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';

const ParametresScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 25
                }}>Parametres</Text>

            </View>
        </>
    );
}

export default ParametresScreen;