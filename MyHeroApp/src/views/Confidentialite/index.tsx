import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const ConfidentialiteScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View>
                <Text>{I18n.t("confidentiality")}</Text>

            </View>
        </>
    );
}

export default ConfidentialiteScreen;