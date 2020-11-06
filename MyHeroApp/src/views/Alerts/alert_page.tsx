import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import AccountStats from '../../components/AccountStats';
import AlertInformationProps from '../../components/AlertPropsDetails';
import HeaderComponent from '../../components/Header/header';
import { setHelpAlertData, setSendAlertData, setStatusHelp } from '../../data/actions/user';
import { useReduxState } from '../../data/store';
import I18n from '../../i18n/i18n';

const AlertPageScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const alertData = useReduxState(state => state.user.showAlert);
    const dispatch = useDispatch();

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
                }}>{I18n.t("alertes")}</Text>
                
                <Text style={{
                    fontSize: 15,
                    marginBottom: 20
                }}>{I18n.t("alertIDAlert")}: {alertData.id}</Text>

                <View style={{
                    marginBottom: 10,
                }}>
                    <AccountStats name={alertData.source} xp="5613" rate={5} img="https://cdn.discordapp.com/avatars/516712735484936193/e40f4e67193ef53a94ae1eed5d5ec902.png?size=128" />
                </View>
                
                <View style={{
                    marginBottom: 10,
                }}>
                    <AlertInformationProps level={alertData.level} sender={alertData.source} avatar="" distance="510" />
                </View>

                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginBottom: 10
                    }}>
                        {I18n.t("description")}: 
                    </Text>

                    <Text style={{
                        color: "#262626",
                        fontSize: 15,
                        marginBottom: 10
                    }}>
                        {alertData.description}
                    </Text>
                </View>

                <TouchableOpacity onPress={() => {
                    dispatch(setHelpAlertData({status: true, data: alertData}))              
                    navigation.navigate('HelperAcceptAlertPage')  
                }}>
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
                        }}>{I18n.t("alertPrendreAlert")}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AlertPageScreen;