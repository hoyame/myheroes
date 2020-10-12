import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';

const AlertPageScreen = ({ navigation }) => {
    const AlertInformationProps = () => {
        return (
            <View style={{
                height: 100,
                borderRadius: 8,
                display: "flex",
                flexDirection: 'row',
                backgroundColor: "#d80000"
            }}>
                <View style={{
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    opacity: 0.40,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <FontAwesomeIcon icon={faExclamationCircle} size={55}></FontAwesomeIcon>
                </View>

                <View style={{
                    justifyContent: "center",
                }}>
                    <Text style={{
                        fontSize: 25
                    }}>Grave</Text>

                    <Text style={{
                        color: "#262626",
                        fontSize: 15
                    }}>A 200km sur Chambery</Text>

                    <Text style={{
                        color: "#262626",
                        fontSize: 15
                    }}>De Hoyame</Text>
                </View>
            </View>
        );
    }

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

                <AlertInformationProps />

                <View style={{
                    
                }}>

                </View>

                <View style={{
                    marginTop: 15
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
                    }}>
                        Je me fais suivre par une voiture, depuis 1h, 
                        ils ont armée et je suis dans la campagne.
                    </Text>
                </View>
            </View>
        </>
    );
}

export default AlertPageScreen;