import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { faArrowAltCircleLeft, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Users from '../../User';
import { WaveIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';

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
  

const ConnexionScreen = ({ navigation }) => {
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)

    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
    })

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@name', state.name)
            await AsyncStorage.setItem('@mail', state.mail)
        } catch (error) {
            console.log("error", error)
        }
    };

    //useEffect(() => {
    //    setStatus(false);
    //})

    const onPress = () => {
        setStatus(true);

        Users.Login({
            pseudo: state.mail,
            email: state.mail,
            password: state.password,
        }, (res: any) => {
            if (res == 200) {
                setTimeout(() => {
                    _storeData();
                    navigation.navigate('Home');
                }, 2500)
            } else {
                setTimeout(() => {
                    setStatus(false);
                    setError(true);
                }, 3000)
            }
        })
    }

    const Ze = () => {
        return (
            <>
                <Text style={{
                    color: "#6d9bff",
                    fontSize: 30,                    
                    marginBottom: 10,
                    textAlign: "center"
                }}>Bienvenue sur MyHero</Text>
      
                <Text style={{
                    color: "#6d9bff",
                    fontSize: 25,
                    marginBottom: 30,
                    textAlign: "center"
                }}>Connexion en cours</Text>
            </>
        );
    }

    if (status == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Ze />
                <WaveIndicator color='#6d9bff' size={40} />
            </View>
        );
    }

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
                }}>Connexion</Text>
                
                <Text style={{
                    marginBottom: 20
                }}>Se connecter a son compte</Text>

                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <InputComponent name="Identifiant" placeholder="Identifiant" value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                    <InputComponent password={true} name="Mot de passe" placeholder="Mot de passe" value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 7.5,
                        flexDirection: 'row'
                    }}>
                        <Text>Vous n'avez pas de compte ?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                            <Text style={{
                                color: "#6d9bff"
                            }}> S'inscrire</Text>
                        </TouchableOpacity>
                    </View>

                    {error && <Text style={{color: 'red', textAlign: "center", marginBottom: 10}}>Identifiant ou/et mot de passe erronée</Text>}

                    <TouchableOpacity onPress={() => onPress()}>
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
                            }}>Se connecter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default ConnexionScreen;