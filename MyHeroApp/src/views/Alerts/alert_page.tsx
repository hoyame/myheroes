import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';

const AlertPageScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>
                <Text style={{
                    fontSize: 35,
                    marginBottom: 20
                }}>Alerte</Text>

            </View>
        </>
    );
}

export default AlertPageScreen;