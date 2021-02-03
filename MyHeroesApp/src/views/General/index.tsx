import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import { Langues } from '../../data/langues';
import I18n from '../../i18n/i18n';

const GeneralScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("acceuil")} navigation={navigation} />

            <View style={{ paddingLeft: 35, paddingRight: 35}}>

            
            </View>
        </>
    );
}

export default GeneralScreen;