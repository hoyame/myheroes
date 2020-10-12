import { faBell, faComments, faHome, faMapSigns, faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const NavScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);

    interface IPropsNav {
        title: string;
        description: string;
        onClick?: any;
        fontAwesome?: any;
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
                        //backgroundColor: "#434343",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        { props.fontAwesome && 
                            <FontAwesomeIcon icon={props.fontAwesome} size={35} style={{color: "#434343"}} />
                        }
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
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size={45} style={{color: "#434343", marginRight: 20}} />
                </TouchableOpacity>

                <View>   
                    <Text style={{
                        fontSize: 35
                    }}>Pages</Text>

                    <Text onPress={() => navigation.navigate('Home')}>Listes des pages disponibles</Text>
                </View>
            </View>
        
            <View style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>              
                <View style={{
                    marginTop: 35
                }}>
                    <PropsNav fontAwesome={faHome} onClick={() => navigation.navigate('Home')} title="Acceuil" description="Page d'acceuil" />
                    <PropsNav fontAwesome={faMapSigns} onClick={() => navigation.navigate('Map')} title="Carte" description="Carte avec les alertes" />
                    <PropsNav fontAwesome={faBell} onClick={() => navigation.navigate('Alert')} title="Alertes" description="Listes des alertes" />
                    <PropsNav fontAwesome={faComments} onClick={() => navigation.navigate('Faq')} title="F.A.Q" description="Foire aux questions" />
                </View>

                <View style={{
                    marginTop: 50
                }}>
                    <PropsNav fontAwesome={faUser} onClick={() => navigation.navigate('Account')} title="Compte" description="Mon Compte" />   
                </View>
            </View>
        </View>
    );
}

export default NavScreen;