import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';
import CheckBox from '@react-native-community/checkbox';
import AlertInformationProps from '../../components/AlertPropsDetails';
import { useReduxState } from '../../data/store';
import { setHelpAlertData, setSendAlertData } from '../../data/actions/user';
import { useDispatch } from 'react-redux';
import MyHeroAlerts from '../../api/Alerts';

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginTop: 20,
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
      color: "red"
    },
    label: {
      margin: 8,
      fontSize: 16
    },
  });

  
export const SenderAcceptAlertPage = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const alerts = useReduxState(state => state.user.send);
    const dispatch = useDispatch();

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
            }}>
                <AccountStats name="hoyame" xp="5132" rate={3} img="https://hoyame.fr/e399d871b6455e3f2a7b0acd8add87c9.png" />
                
                <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      style={styles.checkbox}
                      tintColors={{ true: '#6d9bff', false: '#6d9bff' }}
                    />
                    <Text style={styles.label}>Vous voulez activer votre camera ?</Text>
                </View>

                <View style={{
                    height: 170,
                    borderRadius: 10,
                    marginBottom: 10,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "#6d9bff",
                        fontSize: 30,
                        marginBottom: 10,
                        textAlign: "center"
                    }}>Aperçu camera</Text>

                    <ActivityIndicator size="large" color="#6d9bff" />
                </View>

                <TouchableOpacity onPress={() => {
                    dispatch(setSendAlertData({status: false, data: {
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: ""
                    }}))
                    MyHeroAlerts.DeleteAlert({
                        level: alerts.data.level,
                        source: alerts.data.source,
                        latitude: alerts.data.latitude,
                        longitude: alerts.data.longitude,    
                        description: alerts.data.description
                    })
                    navigation.navigate('Home') 
                }}>
                    <View style={{
                        height: 50,
                        marginBottom: 10,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 20      
                        }}>Vous n'etes plus en danger</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(setSendAlertData({status: false, data: {
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: ""
                    }}))
                    MyHeroAlerts.DeleteAlert({
                        level: alerts.data.level,
                        source: alerts.data.source,
                        latitude: alerts.data.latitude,
                        longitude: alerts.data.longitude,    
                        description: alerts.data.description
                    })
                    navigation.navigate('EndAlertScreen') 
                }}>
                    <View style={{
                        height: 50,
                        marginBottom: 10,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 22      
                        }}>Vous avez été sauvé</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export const HelperAcceptAlertPage = ({ navigation }) => {
    const alerts = useReduxState(state => state.user.help);
    const dispatch = useDispatch();

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
            }}>
                <View style={{
                    marginBottom: 10
                }}>
                    <AccountStats name={alerts.data.source} xp="5613" rate={5} img="https://cdn.discordapp.com/avatars/516712735484936193/e40f4e67193ef53a94ae1eed5d5ec902.png?size=128" />
                </View>

                <View>
                    <AlertInformationProps level={alerts.data.level} sender={alerts.data.source} avatar="" distance="510" />
                </View>

                <View style={{
                    marginBottom: 0
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: "#000000",
                        marginBottom: 10
                    }}>
                        Description: {alerts.data.description}
                    </Text>
                </View>

                <View style={{
                    height: 140,
                    borderRadius: 10,
                    marginBottom: 10,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <Text style={{
                        color: "#6d9bff",
                        fontSize: 30,
                        marginBottom: 10,
                        textAlign: "center"
                    }}>Aperçu Camera</Text>

                    <ActivityIndicator size="large" color="#6d9bff" />
                </View>

                <TouchableOpacity onPress={() => Linking.openURL(`http://maps.google.com/maps?q=loc:${alerts.data.latitude},${alerts.data.longitude}`)}>
                    <View style={{
                        height: 50,
                        marginBottom: 10,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 22      
                        }}>Lancer l'itineraire</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    dispatch(setHelpAlertData({status: false, data: {
                        id: 0,
                        level: 0,
                        source: "",
                        latitude: 0,
                        longitude: 0,    
                        description: ""
                    }}))              
                    navigation.navigate('Home')  
                }}>
                    <View style={{
                        height: 50,
                        marginBottom: 10,
                        borderRadius: 8,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#e1e1e1"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            fontSize: 22      
                        }}>Abbandoner l'alerte</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );

    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
}