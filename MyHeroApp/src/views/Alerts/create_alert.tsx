import { faEnvelope, faExclamationCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';
import { useReduxState } from '../../data/store';
import InputComponent from './input';
import { WaveIndicator } from 'react-native-indicators';
import { useDispatch } from 'react-redux';
import { setSendAlertData } from '../../data/actions/user';
import MyHeroAlerts from '../../api/Alerts';
import I18n from '../../i18n/i18n';

const CreateAlertScreen = ({ navigation }) => {
    const [state, setState] = useState({
        description: ""
    })

    const alertLevelSe = useReduxState(state => state.user.createAlertLevel);
    const nameSe = useReduxState(state => state.user.name);
    const latitude = useReduxState(state => state.location.latitude);
    const longitude = useReduxState(state => state.location.longitude);
    const dispatch = useDispatch();

    if (alertLevelSe == 0) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "#6d9bff",
                    fontSize: 30,
                    marginBottom: 30,
                    textAlign: "center"
                }}>{I18n.t("chargement")}</Text>
                    
                <WaveIndicator color='#6d9bff' size={40} />
            </View>
        );
    }

    let color = '#ffd100';
    let name = 'Faible'
    let description = ''

    switch (alertLevelSe) {
        case 1: 
            color = '#ffd100'
            name = I18n.t("alertFaible")
            description = I18n.t("alertDescFaible")
            break
        case 2: 
            color = '#ff9600'
            name = I18n.t("alertMoyen")
            description = I18n.t("alertDescMoyen")
            break
        case 3: 
            color = '#d80000'
            name = I18n.t("alertGrave")
            description = I18n.t("alertDescGrave")
            break
        default: break
    }
 
    return (
        <>
            <HeaderComponent title={I18n.t("alertLaunch")} navigation={navigation} />

            <ScrollView>  
                <KeyboardAvoidingView 
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={{
                        flex: 1
                    }}
                >
                    <View style={{
                        paddingLeft: 35,
                        paddingRight: 35
                    }}>
                        <View style={{}}>
                            <View style={{
                                marginBottom: 15,
                                height: 100,
                                borderRadius: 8,
                                display: "flex",
                                flexDirection: 'row',
                                backgroundColor: "#e1e1e1"
                            }}>
                                <View style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 100,
                                    opacity: 0.60,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <FontAwesomeIcon icon={faExclamationCircle} size={55} style={{ color: color }}></FontAwesomeIcon>
                                </View>

                                <View style={{
                                    justifyContent: "center",
                                }}>
                                    <Text style={{
                                        fontSize: 25
                                    }}>{I18n.t("alertT")} {name}</Text>

                                    <Text style={{
                                        color: "#262626",
                                        fontSize: 12
                                    }}>{description}</Text>
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
                                }}>{I18n.t("alertWarn")}</Text>
                            </View>

                            <View>
                                <InputComponent height={150} name={I18n.t("description")} placeholder={I18n.t("descDescription")} value={state.description} icon={faFileAlt} onChange={(v: string) => setState({...state, description: v})} />
                            </View>

                            <TouchableOpacity onPress={() => {
                                MyHeroAlerts.SendAlert({
                                    level: alertLevelSe,
                                    source: nameSe,
                                    latitude: latitude,
                                    longitude: longitude,    
                                    description: state.description
                                })
                                navigation.navigate('SenderAcceptAlertPage') 
                                dispatch(setSendAlertData({ status: true, data: {
                                    level: alertLevelSe,
                                    source: nameSe,
                                    latitude: latitude,
                                    longitude: longitude,    
                                    description: state.description
                                } })) 

                            }} >
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
                                    }}>{I18n.t("alertLaunch")}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );    
}

export default CreateAlertScreen;