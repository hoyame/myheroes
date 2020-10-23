import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const STYLES = StyleSheet.create({
    ROW: {
      display: "flex",
      flexDirection: "row"
    },

    INPUT: {
        height: 60, 
        width: screenWidth,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 20
    }
});
  

const AccountScreen = ({ navigation }) => {
    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: '',

    })

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
                }}>Mon Compte</Text>

                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>

                    <AccountStats />
                </View>
            </View>
        </>
    );
}

export default AccountScreen;