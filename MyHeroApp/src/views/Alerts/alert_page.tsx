import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import MyHeroAlerts, { setAlertStatus } from '../../api/Alerts';
import Users from '../../api/User';
import AccountStats from '../../components/AccountStats';
import AlertInformationProps from '../../components/AlertPropsDetails';
import BottomComponent from '../../components/Bottom';
import HeaderComponent from '../../components/Header/header';
import { setCacheUser, setHelpAlertData, setSendAlertData, setStatusHelp } from '../../data/actions/user';
import { useReduxState } from '../../data/store';
import I18n from '../../i18n/i18n';


const AlertPageScreen = ({ navigation }) => {
    const userMail = useReduxState(state => state.user.mail);
    const userCache = useReduxState(state => state.user.userCache);
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const alertData = useReduxState(state => state.user.showAlert);
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(false);
    
    useEffect(() => {
        console.log(alertData.source)
    
        if (userCache.status == false) {

            Users.GetData(alertData.source, (e: any) => {
                const rate = parseFloat(JSON.stringify(e.data[0].rate))
                const xp = parseFloat(JSON.stringify(e.data[0].xp))
                
                dispatch(setCacheUser({ status: true,mail: "", name: "", image: "", xp: xp, rate: rate }));
            }, () => null)
        }
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

            <ScrollView>
                <View style={{
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 35
                }}>      
                    <View style={{
                        marginBottom: 15,
                    }}>
                        <AccountStats name={alertData.source} xp={userCache.xp} rate={userCache.rate} img={`http://146.59.227.90:3000/api/avatar/${alertData.source}?time=${new Date()}`} />
                    </View>
                    
                    <View style={{
                        marginBottom: 0,
                    }}>
                        <AlertInformationProps level={alertData.level} sender={alertData.source} avatar="" distance="510" />
                    </View>
                    <View style={{
                        height: 200,
                        marginTop: 0,
                        marginBottom: 15,
                        borderRadius: 15,
                        padding: 10,
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: "#ffffff"
                    }}>
                        { photo == false &&
                            <Image source={{uri: `http://146.59.227.90:3000/api/avatar/alert-${alertData.identifier}?time=${new Date()}`}} style={{
                                height: "99%",
                                width: "99%",
                                borderRadius: 10,
                            }}></Image>
                        }
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
                        marginBottom: 15
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
                        setAlertStatus(true, alertData.identifier)
                        MyHeroAlerts.takeAlert(alertData.identifier, userMail)
                        dispatch(setHelpAlertData({status: true, data: alertData}))              
                        dispatch(setCacheUser({ status: false, mail: "", name: "", image: "", xp: 0, rate: 0 }));
                        navigation.navigate('HelperAcceptAlertPage')  
                    }}/>
                </View>
            </ScrollView>         
        </>
    );
}

export default AlertPageScreen;