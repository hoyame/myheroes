import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
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
                    <TextInput
                        style={STYLES.INPUT}
                        placeholder="Pseudo"
                        onChangeText={text => setState({...state, name: text})}
                        value={state.name}
                    />

                    <TextInput
                        style={STYLES.INPUT}
                        placeholder="E-Mail"
                        onChangeText={text => setState({...state, mail: text})}
                        value={state.mail}
                    />

                    
                    <TextInput
                        style={STYLES.INPUT}
                        placeholder="Mot de passe"
                        onChangeText={text => setState({...state, password: text})}
                        value={state.password}
                    />

                    
                    <TextInput
                        style={STYLES.INPUT}
                        placeholder="Confirmer le mot de passe"
                        onChangeText={text => setState({...state, cPassword: text})}
                        value={state.cPassword}
                    />

                    <TouchableOpacity>
                        <View style={{
                            height: 60, 
                            width: screenWidth,
                            borderRadius: 7.5,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#e1e1e1'           
                        }}>
                            <Text style={{
                                fontSize: 25
                            }}>Sauvegarder</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default AccountScreen;