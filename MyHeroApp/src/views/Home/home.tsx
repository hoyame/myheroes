import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from 'src/components/Header/header';
import NavbarComponent from 'src/components/Navbar/navbar';

function HomeScreen({ navigation }) {

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <Text onPress={() => navigation.navigate('Details')}>Zboubf</Text>

        </>

    );
}

export default HomeScreen;