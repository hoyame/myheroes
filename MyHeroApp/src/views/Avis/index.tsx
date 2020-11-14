import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text } from 'react-native';
import FondComponent from '../../components/Fond';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import I18n from '../../i18n/i18n';

const AvisScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("avis")} navigation={navigation} />

            <FondComponent />
                
            <View style={{
                padding: 35
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginBottom: 10
                }}>MyHeroes</Text>

                <RateComponent title={I18n.t("avisRateApp")} placeholder={I18n.t("avisDescApp")} onClick={() => null} />
            </View>
        </>
    );
}

export default AvisScreen;