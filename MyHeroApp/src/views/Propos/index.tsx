import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';

const ProposScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View>
                <Text>Propos</Text>

            </View>
        </>
    );
}

export default ProposScreen;