import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import I18n from '../../i18n/i18n';


const EndAlertScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 15
                }}>{I18n.t("alertMy")}</Text>

                <View style={{
                    height: 60,
                    marginBottom: 15,
                    borderRadius: 8,
                    padding: 10,
                    justifyContent: "center",
                    backgroundColor: "#0077be"
                }}>
                    <Text style={{
                        textAlign: "center",
                        color: "#fff",
                        fontSize: 15      
                    }}>Merci d'avoir utilisé MyHeroes, votre alerte a été supprimé.</Text>
                </View>

                <View>
                    <RateComponent title="Avis sur votre hero" placeholder="Description de votre avis" onClick={() => null} />
                </View>

                { /*          
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <View style={{
                        height: 50,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: '#1d1d1d'           
                    }}>
                        <Text style={{
                            color: '#ffffff',
                            textAlign: "center",
                            fontSize: 22      
                        }}>Retour a l'acceuil</Text>
                    </View>
                </TouchableOpacity>
                */ }
            </View>


        </>
    );
}

export default EndAlertScreen;