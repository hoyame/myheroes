import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const FAQScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("faq")} navigation={navigation} />

            <View>
                <Text>{I18n.t("faq")}</Text>
            </View>
        </>
    );
}

export default FAQScreen;