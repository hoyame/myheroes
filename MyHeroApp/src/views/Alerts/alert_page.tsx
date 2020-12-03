import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import MyHeroAlerts from '../../api/Alerts';
import Users from '../../api/User';
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

    const [state, setState] = useState({
        star: 0,
        xp: 0
    })
    
    useEffect(() => {
        console.log(alertData.source)
        
        Users.GetData(alertData.source, (e: any) => {
            const rate = parseFloat(JSON.stringify(e.data[0].rate))
            const xp = parseFloat(JSON.stringify(e.data[0].xp))
            
            setState({...state, star: rate, xp: xp})
        }, () => null)
    })


    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@help_alert', 'true')
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
                paddingBottom: 35
            }}>               
                <View style={{
                    marginBottom: 10,
                }}>
                    <AccountStats name={alertData.source} xp={state.xp} rate={state.star} img={`http://146.59.227.90:3000/api/avatar/${alertData.source}?time=${new Date()}`} />
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
                    _storeData();
                    dispatch(setHelpAlertData({status: true, data: alertData}))              
                    navigation.navigate('HelperAcceptAlertPage')  
                }}/>
            </View>
        </>
    );
}

export default AlertPageScreen;