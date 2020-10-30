import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';


const EndAlertScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 15
                }}>Votre alerte</Text>

            </View>
        </>
    );
}

export default EndAlertScreen;