import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const AlertScreen = ({ navigation }) => {
    return (
        <Text onPress={() => navigation.navigate('Home')}>go home</Text>
    );
}

export default AlertScreen;