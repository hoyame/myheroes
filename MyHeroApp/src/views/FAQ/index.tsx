import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../Alerts/input';
import I18n from '../../i18n/i18n';
import { API_LINK } from '../../App';
import { useReduxState } from '../../data/store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const FAQScreen = ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height - 150);
    const userMail = useReduxState(state => state.user.mail);

    const [state, setState] = useState({
        description: ""
    })
    
    const sendQuestion = () => {
        var params = {
            source: userMail,
            content: state.description,
        }
    
        fetch(`${API_LINK}/app/add_faq`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
    }

    return (
        <>
            <HeaderComponent title={I18n.t("faq")} navigation={navigation} />

            <KeyboardAwareScrollView>
                <View style={{
                    paddingLeft: 35,
                    paddingRight: 35,
                }}>
                    <View style={{
                        marginBottom: 15
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Que se passe t-il si il y'a personne autour de moi qui a l'application pour me venir en aide ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            MyHeroes dispose d'une technologie d'élargissement du périmètre de recherche automatique.
                        </Text>

                        {/* {/* *} */}

                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Quand j'envoie une alerte est-ce que plusieurs personnes peuvent prendre mon alerte ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            MyHeroes permet a plusieurs heroes de prendre votre alerte.
                        </Text>

                        {/* {/* *} */}

                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Jusqu'ou la technologie d'élargissement de perimetre peut-elle aller ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            La technologie d'élargissement permet d'elargir jusqu'a ce qu'elle trouve 10 personnes qui recoivent votre alerte.
                        </Text>
                    </View>

                    <InputComponent height={60} name="Question" placeholder="Question" value={state.description} icon={faFileAlt} onChange={(v: string) => setState({...state, description: v})} />

                    <TouchableOpacity onPress={() => {
                        sendQuestion();
                        navigation.navigate("Home")
                    }}>
                        <View style={{
                            height: 60, 
                            borderRadius:15,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'           
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#ffffff",
                            }}>Envoyer votre question</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </>
    );
}

export default FAQScreen;