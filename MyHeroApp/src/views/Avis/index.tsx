import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import I18n from '../../i18n/i18n';

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

                <RateComponent title={I18n.t("avisRateApp")} placeholder={I18n.t("avisDescApp")} onClick={() => null} />
            </View>
        </>
    );
}

export default AvisScreen;