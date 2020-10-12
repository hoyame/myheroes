import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { faArrowAltCircleLeft, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

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
  

const InscriptionScreen = ({ navigation }) => {
    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: ''
    })

    return (
        <>
            <View style={{
                display: 'flex',
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 35,
                    textAlign: 'center',
                    marginBottom: 10
                }}>Inscription</Text>
                
                <Text style={{
                    marginBottom: 20
                }}>Créer son compte</Text>


                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <InputComponent name="Pseudo" placeholder="Pseudo" value={state.name} icon={faUser} onChange={(v: string) => setState({...state, name: v})} />
                    <InputComponent name="E-Mail" placeholder="E-Mail" value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                    <InputComponent name="Mot de passe" placeholder="Mot de passe" value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                    <InputComponent name="Confirmer son mot de passe" placeholder="Confirmer son mdp" value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />
                
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 15,
                        flexDirection: 'row'
                    }}>
                        <Text>Vous avez un compte ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                            <Text style={{
                                color: "#6d9bff"
                            }}> Se connecter</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <View style={{
                            height: 60, 
                            width: screenWidth,
                            borderRadius: 7.5,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#6d9bff'           
                        }}>
                            <Text style={{
                                fontSize: 25
                            }}>S'inscrire</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default InscriptionScreen;