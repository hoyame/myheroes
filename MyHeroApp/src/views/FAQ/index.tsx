import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../Alerts/input';
import I18n from '../../i18n/i18n';

const FAQScreen = ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height - 150);
    const [state, setState] = useState({
        description: ""
    })
    
    return (
        <>
            <HeaderComponent title={I18n.t("faq")} navigation={navigation} />

            <ScrollView>
                <View style={{
                    paddingLeft: 35,
                    paddingRight: 35,
                }}>
                    <View style={{
                        //height: screenHeight,
                    }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Que se passe t-il si il y'a personne autour de moi qui a l'application pour me sauver ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            MyHeroes dispose d'une technologie d'elargissement du permietre de recherche automatique.
                        </Text>

                        {/* {/* *} */}

                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Quand j'envoie une alerte est-ce que plusieurs personnes de prendre mon alerte ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            MyHeroes permet a plusieur Hero de prendre votre alerte.
                        </Text>

                        {/* {/* *} */}

                        <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}>
                            Jusqu'ou la technologie d'elargissement de perimetre vaut-elle ?
                        </Text>

                        <Text style={{ fontSize: 13, fontWeight: "normal", marginBottom: 20 }}>
                            MyHeroes permet d'elargir jusqu'a qu'il trouve 10 personnes qui recoivent votre alerte.
                        </Text>
                    </View>

                    <InputComponent height={130} name="Question" placeholder="Question" value={state.description} icon={faFileAlt} onChange={(v: string) => setState({...state, description: v})} />

                    <TouchableOpacity onPress={() => {}}>
                        <View style={{
                            height: 60,
                            marginBottom: 15,
                            borderRadius: 8,
                            padding: 10,
                            justifyContent: "center",
                            backgroundColor: "#e1e1e1"
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 25      
                            }}>Envoyer votre question</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
}

export default FAQScreen;