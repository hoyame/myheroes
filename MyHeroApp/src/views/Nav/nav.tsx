import { faBell, faComments, faHome, faInfoCircle, faLock, faMapSigns, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ScrollView, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useReduxState } from '../../data/store';
import { PulseIndicator } from 'react-native-indicators';
import I18n from '../../i18n/i18n';

const NavScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const statusHelp = useReduxState(state => state.user.help.status);
    const statusSend = useReduxState(state => state.user.send.status);

    interface IPropsNav {
        title: string;
        description: string;
        onClick?: any;
        fontAwesome?: any;
    }

    interface IAlertPropsNav {
        title: string;
        color: string;
        description: string;
        onClick?: any;
        //fontAwesome?: any;
    }

    const PropsNav = (props: IPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 70,
                    width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: '#E1E1E1',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5,
                        borderRadius: 7.5,
                        //backgroundColor: "#434343",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        { props.fontAwesome && 
                            <FontAwesomeIcon icon={props.fontAwesome} size={35} style={{color: "#434343"}} />
                        }
                    </View>

                    <View style={{
                        paddingTop: 10
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#222222"
                        }}>{props.title}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "#767676"
                        }}>{props.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const AlertPropsNav = (props: IAlertPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 70,
                    width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: props.color,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5,
                        borderRadius: 7.5,
                        //backgroundColor: "#434343",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <PulseIndicator color='white' />
                    </View>

                    <View style={{
                        paddingTop: 10
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "white"
                        }}>{I18n.t("alertInProgress")}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "white"
                        }}>{I18n.t("alertInProgressDesc")}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={ 
            Dimensions.get('window').height > 695 ? {
                marginTop: 50,
                display: "flex", 
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35,
            } : {
                marginTop: 30,
                display: "flex", 
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35   
            }
        }>
            <View style={{alignItems: "center"}}>
                <View style={{
                    marginBottom: 25,
                    justifyContent: "center",
                    height: 40,
                    width: 120,
                    borderRadius: 10,
                    backgroundColor: '#1d1d1d'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textAlign: "center",
                        color: '#ffffff'
                    }}>MyHeroes</Text>
                </View>

            </View>

            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 25,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size={45} style={{color: "#434343", marginRight: 20}} />
                </TouchableOpacity>

                <View>   
                    <Text style={{
                        fontSize: 35
                    }}>{I18n.t("menu")}</Text>
                </View>
            </View>
        
            <ScrollView>
                <View style={{
                    marginTop: 0,
                    marginBottom: 90,
                }}>
                    { statusSend == true &&
                        <AlertPropsNav color="#ff7f00" onClick={() => navigation.navigate('SenderAcceptAlertPage')} title="" description="" />
                    }
                
                    { statusHelp == true &&
                        <AlertPropsNav color="#1f7ceb" onClick={() => navigation.navigate('HelperAcceptAlertPage')} title="" description="" />
                    }
                    
                    <PropsNav fontAwesome={faHome} onClick={() => navigation.navigate('Home')} title={I18n.t("acceuil")} description={I18n.t("descacceuil")} />
                    <PropsNav fontAwesome={faMapSigns} onClick={() => navigation.navigate('Map')} title={I18n.t("carte")} description={I18n.t("desccarte")} />
                    <PropsNav fontAwesome={faBell} onClick={() => navigation.navigate('Alert')} title={I18n.t("alertes")} description={I18n.t("descalertes")} />
                    <PropsNav fontAwesome={faStar} onClick={() => navigation.navigate('Avis')} title={I18n.t("avis")} description={I18n.t("descavis")} />
                    <PropsNav fontAwesome={faUser} onClick={() => navigation.navigate('Parametres')} title={I18n.t("parametres")} description={I18n.t("descparametres")} />
                    <PropsNav fontAwesome={faComments} onClick={() => navigation.navigate('FAQScreen')} title={I18n.t("faq")} description={I18n.t("descfaq")} />
                    <PropsNav fontAwesome={faLock} onClick={() => navigation.navigate('Confidentialite')} title={I18n.t("confidentiality")} description={I18n.t("descconfidentiality")} />
                    <PropsNav fontAwesome={faInfoCircle} onClick={() => navigation.navigate('Propos')} title={I18n.t("apropos")} description={I18n.t("descapropos")} />
                </View>
            </ScrollView>
        </View>
    );
}

export default NavScreen;