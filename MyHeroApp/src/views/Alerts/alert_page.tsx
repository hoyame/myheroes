import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import AccountStats from '../../components/AccountStats';
import AlertInformationProps from '../../components/AlertPropsDetails';
import BottomComponent from '../../components/Bottom';
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
            <HeaderComponent title={I18n.t("alertes")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>               
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
                    padding: 15,
                    height: 120,
                    borderRadius: 15,
                    backgroundColor: '#ffffff',
                    elevation:10,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.5,
                    shadowRadius: 5, 
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

                <BottomComponent title={I18n.t("alertPrendreAlert")} onClick={() => {
                    dispatch(setHelpAlertData({status: true, data: alertData}))              
                    navigation.navigate('HelperAcceptAlertPage')  
                }}/>
            </View>
        </>
    );
}

export default AlertPageScreen;