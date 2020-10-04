import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const NavScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);

    interface IPropsNav {
        title: string;
        description: string;
        onClick?: any
    }

    const PropsNav = (props: IPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 70,
                    width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: '#E1E1E1',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5,
                        borderRadius: 7.5,
                        backgroundColor: "#efefef",
                        justifyContent: 'center',
                        alignItems: "center"
                    }}>

                    </View>

                    <View style={{
                        paddingTop: 10
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#222222"
                        }}>{props.title}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "#767676"
                        }}>{props.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{
            padding: 35,
            marginTop: 15
        }}>

            <Text style={{
                fontSize: 35
            }}>Pages</Text>

            <Text onPress={() => navigation.navigate('Home')}>Listes des pages disponibles</Text>
        
            <View style={{
                marginTop: 35
            }}>
                <PropsNav onClick={() => navigation.navigate('Home')} title="Acceuil" description="Page d'acceuil" />
                <PropsNav onClick={() => navigation.navigate('Carte')} title="Carte" description="Carte avec les alertes" />
                <PropsNav onClick={() => navigation.navigate('Alertes')} title="Alertes" description="Listes des alertes" />
                <PropsNav onClick={() => navigation.navigate('Compte')} title="Compte" description="Mon Compte" />
            </View>
        </View>
    );
}

export default NavScreen;