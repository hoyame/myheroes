import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const GeneralScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("acceuil")} navigation={navigation} />

            <View>
                <Text>{I18n.t("acceuil")}</Text>
            </View>
        </>
    );
}

export default GeneralScreen;