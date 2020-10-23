import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import AccountStats from '../../components/AccountStats';
import AlertInformationProps from '../../components/AlertPropsDetails';
import HeaderComponent from '../../components/Header/header';

const AlertPageScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);

    

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
                    marginBottom: 5
                }}>Alerte</Text>
                
                <Text style={{
                    fontSize: 15,
                    marginBottom: 20
                }}>ID de l'alerte: 1541161</Text>


                <View style={{
                    marginBottom: 10,
                }}>
                    <AccountStats name="jibril" xp="5613" rate={5} img="https://cdn.discordapp.com/avatars/516712735484936193/e40f4e67193ef53a94ae1eed5d5ec902.png?size=128" />
                </View>
                
                <View style={{
                    marginBottom: 10,
                }}>
                    <AlertInformationProps level={1} sender="Hoyame" avatar="" distance="510" />
                </View>

                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginBottom: 10
                    }}>
                        Description: 
                    </Text>

                    <Text style={{
                        color: "#262626",
                        fontSize: 15,
                        marginBottom: 10
                    }}>
                        Je me fais suivre par une voiture, depuis 1h, 
                        ils ont armée et je suis dans la campagne.
                    </Text>
                </View>

                <TouchableOpacity>
                    <View style={{
                        height: 60, 
                        width: screenWidth,
                        borderRadius: 7.5,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            fontSize: 25
                        }}>Prendre l'alerte</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AlertPageScreen;