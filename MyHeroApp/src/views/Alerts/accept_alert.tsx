import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';
import AlertInformationProps from '../../components/AlertPropsDetails';
import { useReduxState } from '../../data/store';
import { setHelpAlertData, setSendAlertData, setViewerCount } from '../../data/actions/user';
import { useDispatch } from 'react-redux';
import MyHeroAlerts from '../../api/Alerts';
import I18n from '../../i18n/i18n';
import CheckBoxComponent from '../../components/Checkbox';
import BottomComponent from '../../components/Bottom';
import { faUser, faQuestionCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { PulseIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';

const screenWidth = Math.round(Dimensions.get('window').width - 70);


const returnColor = (alert: number) => {
    switch (alert) {
        case 1: 
            return "#ffd100";
        case 2: 
            return "#ff9600";
        case 3:
            return "#d80000";
        default: return "";
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 7.5,
      marginBottom: 15,
    },
    checkbox: {
      alignSelf: "center",
      color: "red"
    },
    label: {
      margin: 8,
      fontSize: 20
    },
});

  
export const SenderAcceptAlertPage = ({ navigation }) => {
    const alerts = useReduxState(state => state.user.send);
    const alertDataSend = useReduxState(state => state.user.send);
    const createAlertLevel = useReduxState(state => state.user.createAlertLevel)
    const dispatch = useDispatch();
    const count = useReduxState(state => state.user.countViewers)

    setInterval(() => {
        if (MyHeroAlerts.ViewerData.status == true) {
            dispatch(setViewerCount(MyHeroAlerts.ViewerData.count))
        }
    }, 5000)

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@send_alert', 'false')
        } catch (error) {
            console.log("error", error)
        }
    };

    return (
        <>
            <HeaderComponent title={I18n.t("alertes")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
            }}>                
                <View style={{
                    padding: 5,
                    height: 165,
                    width: screenWidth,
                    borderRadius: 15,
                    marginTop: 10,
                    marginBottom: 7.5,
                    backgroundColor: returnColor(createAlertLevel)
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: 10
                    }}>
                        <PulseIndicator color='white' />
                        <Text style={{
                            marginTop: 6,
                            marginLeft: 5,
                            color: 'white',
                            fontSize: 20
                        }}>{I18n.t("alertInProgress")}</Text>
                        </View>
                    <View style={{
                        marginLeft: 30
                    }}>
                        <View style={{
                            marginBottom: 10,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <FontAwesomeIcon icon={faUser} style={{
                                color: 'white'
                            }} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 5
                            }}>{count}</Text>
                        </View>
                        <View style={{
                            marginBottom: 10,
                            width: screenWidth - 80,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <FontAwesomeIcon icon={faQuestionCircle} style={{
                                color: 'white'
                            }} />
                            
                            <Text style={{
                                color: 'white',
                                marginLeft: 5
                            }}>En attente</Text>
                        </View>
                        <View style={{
                            width: screenWidth - 80,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <FontAwesomeIcon icon={faFileAlt} style={{
                                color: 'white'
                            }} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 5
                            }}>{alertDataSend.data.description}</Text>
                        </View>
                    </View>
                </View> 
                                            
                <View style={styles.checkboxContainer}>
                    <CheckBoxComponent />
                    <Text style={styles.label}>{I18n.t("alertActivCam")}</Text>
                </View>

                <BottomComponent title={I18n.t("alertNotDanger")} onClick={() => {
                    dispatch(setSendAlertData({status: false, data: {
                        identifier: "",
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: "",
                        webrtc: ""
                    }}))
                    MyHeroAlerts.cleanViewerData();
                    MyHeroAlerts.DeleteAlert({
                        identifier: alerts.data.identifier,
                        level: alerts.data.level,
                        source: alerts.data.source,
                        latitude: alerts.data.latitude,
                        longitude: alerts.data.longitude,    
                        description: alerts.data.description,
                        webrtc: alerts.data.webrtc
                    })
                    navigation.navigate('Home') 
                }}/>

                <View style={{marginBottom: 10}}></View>
                
                <BottomComponent title={I18n.t("alertSave")} onClick={() => {
                    dispatch(setSendAlertData({status: false, data: {
                        identifier: "",
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: "",
                        webrtc: ""
                    }}))
                    MyHeroAlerts.cleanViewerData();
                    MyHeroAlerts.DeleteAlert({
                        identifier: alerts.data.identifier,
                        level: alerts.data.level,
                        source: alerts.data.source,
                        latitude: alerts.data.latitude,
                        longitude: alerts.data.longitude,    
                        description: alerts.data.description,
                        webrtc: ""
                    })
                    navigation.navigate('EndAlertScreen') 
                }}/>
            </View>
        </>
    );
}

export const HelperAcceptAlertPage = ({ navigation }) => {
    const alerts = useReduxState(state => state.user.help);
    const createAlertLevel = useReduxState(state => state.user.createAlertLevel)
    const alertDataHelp = useReduxState(state => state.user.showAlert);
    const dispatch = useDispatch();

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@help_alert', 'false')
        } catch (error) {
            console.log("error", error)
        }
    };
   
    let description = alertDataHelp.description

    if (description == "") {
        description = "Pas de description";
    } 

    return (
        <>
            <HeaderComponent title={I18n.t("alertes")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
            }}>
                <View style={{
                    padding: 5,
                    height: 165,
                    width: screenWidth,
                    borderRadius: 15,
                    marginBottom: 10,
                    backgroundColor: returnColor(alertDataHelp.level),
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        margin: 10
                    }}>
                        <PulseIndicator color='white' />
                        <Text style={{
                            marginTop: 6,
                            marginLeft: 5,
                            color: 'white',
                            fontSize: 20
                        }}>{I18n.t("alertInProgress")}</Text>
                    </View>
                    <View style={{
                        marginLeft: 30
                    }}>
                        <View style={{
                            marginBottom: 10,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <FontAwesomeIcon icon={faUser} style={{
                                color: 'white'
                            }} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 5
                            }}>{alertDataHelp.source}</Text>
                        </View>
                        <View style={{
                            width: screenWidth - 80,
                            display: "flex",
                            flexDirection: "row"
                        }}>
                            <FontAwesomeIcon icon={faFileAlt} style={{
                                color: 'white'
                            }} />
                            <Text style={{
                                color: 'white',
                                marginLeft: 5
                            }}>{description}</Text>
                        </View>
                    </View>
                </View>  

                <BottomComponent title={I18n.t("alertApercCam")} onClick={() => navigation.navigate('ViewStream')}/>
                <View style={{marginBottom: 10}}></View>
                <BottomComponent title={I18n.t("alertLancerItt")} onClick={() => Linking.openURL(`http://maps.google.com/maps?q=loc:${alerts.data.latitude},${alerts.data.longitude}`)}/>
                <View style={{marginBottom: 10}}></View>
                <BottomComponent title={I18n.t("alertAbbandoner")} onClick={() => { 
                    _storeData()
                    MyHeroAlerts.removeAlert(alertDataHelp.identifier)
                    dispatch(setHelpAlertData({status: false, data: {
                        identifier: "",
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: "",
                        webrtc: ""
                    }}))              
                    navigation.navigate('Home')  
                }}/>
            </View>
        </>
    );
}