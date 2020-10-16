import { faEnvelope, faExclamationCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';
import InputComponent from './input';

const CreateAlertScreen = ({ navigation }) => {
    const [state, setState] = useState({
        description: ""
    })

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35
            }}>
                <Text style={{
                    fontSize: 35,
                    marginBottom: 20
                }}>Lancer une alerte</Text>

                <View style={{}}>
                    <View style={{
                        marginBottom: 15,
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
                            }}>Alerte Grave</Text>

                            <Text style={{
                                color: "#262626",
                                fontSize: 12
                            }}>(Accident, agression, malaise...)</Text>
                        </View>
                    </View>
                    
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
                        }}>Lancer des fausses alertes peut entrainer des sanctions !</Text>
                    </View>

                    <View>
                        <InputComponent height={150} name="Description" placeholder="Description" value={state.description} icon={faFileAlt} onChange={(v: string) => setState({...state, description: v})} />
                    </View>
                </View>
            </View>
        </>
    );    
}

export default CreateAlertScreen;