import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const NavScreen = ({ navigation }) => {
    return (
        <Text onPress={() => navigation.navigate('Home')}>navbaaaaaaaar</Text>
    );
}

export default NavScreen;