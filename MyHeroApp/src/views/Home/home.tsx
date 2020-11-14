import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/headerTw';
import { faExclamationCircle, faUser, faMapSigns, faSmile, faPhoneAlt, faPlus, faFirstAid, faFileAlt, faQuestionCircle, faBell, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MapComponent from '../Map/service';
import { useReduxState } from '../../data/store';
import { PulseIndicator } from 'react-native-indicators';
import { useDispatch } from 'react-redux';
import { setCacheCreateAlertLevel, setCacheNav, setName } from '../../data/actions/user';
import I18n from '../../i18n/i18n';
//import SosSVG from '../../assets/sos.svg'

const HomeScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const screenHeight = Math.round(Dimensions.get('window').height / 4);
    
    const alertDataHelp = useReduxState(state => state.user.showAlert);
    const alertDataSend = useReduxState(state => state.user.send);
    const statusHelp = useReduxState(state => state.user.help.status);
    const statusSend = useReduxState(state => state.user.send.status);
    const createAlertLevel = useReduxState(state => state.user.createAlertLevel)

    interface IAlertProps {
        title?: string;
        color?: string;
        description?: string;
        colorComponent?: string;
        onClick: any;
    }

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

    const AlertProps = (props: IAlertProps) => {
        const pHeight = (screenHeight - 20)
        const pWidth = (screenWidth / 3 - 10)

        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 55,
                    width: screenWidth,
                    marginBottom: 7.5,
                    backgroundColor: props.color,
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 20
                }}>
                    <View>
                        <Text style={{
                            fontSize: 18,
                        }}>{props.title}</Text>

                        <Text style={{
                            fontSize: 12,
                        }}>{props.description} </Text>
                    </View>

                    <View style={{
                        marginRight: 15,
                        height: 35,
                        width: 35,
                        opacity: 0.40,
                        backgroundColor: props.colorComponent,
                        borderRadius: 50,
                        //display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size={25}></FontAwesomeIcon>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    interface IAlertComponent {
        title: string;
        logo?: any;
        color?: string;
        fontAwesome?: any;
        onClick?: any;
    }

    const AlertComponent = (props: IAlertComponent) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 55,
                    borderRadius: 15,
                    width: screenWidth,
                    marginBottom: 7.5,
                    backgroundColor: props.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingLeft: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                        textAlign: "center",
                        color: 'white'
                    }}>{props.title}</Text>
                                        
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 45, 
                        width: 45,
                        margin: 10,
                        borderRadius: 50,
                        opacity: 0.5,
                    }}>
                        { props.fontAwesome && 
                            <FontAwesomeIcon icon={props.fontAwesome} size={25} style={{ color: "#ffffff" }} />
                        }
                    </View>
                </View>
                
            </TouchableOpacity>
        );
    }
    
    const dispatch = useDispatch();

    return (
        <View style={{
            display: "flex",
        }}>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35
            }}>

                    {   statusHelp == false && statusSend == false &&
                        <>
                            <AlertProps 
                                onClick={() => {
                                    dispatch(setCacheNav('Home'));
                                    dispatch(setCacheCreateAlertLevel(3))
                                    navigation.navigate("CreateAlertScreen")
                                }}
                                title={I18n.t("alertGrave")}
                                color="#d80000" 
                                colorComponent="#860258" 
                                description={I18n.t("alertDescGrave")} 
                            />

                            <AlertProps 
                                onClick={() => {
                                    dispatch(setCacheNav('Home'));
                                    dispatch(setCacheCreateAlertLevel(2))
                                    navigation.navigate("CreateAlertScreen")
                                }}
                                title={I18n.t("alertMoyen")}
                                color="#ff9600" 
                                colorComponent="#860258" 
                                description={I18n.t("alertDescMoyen")}
                            />

                            <AlertProps 
                                onClick={() => {
                                    dispatch(setCacheNav('Home'));
                                    dispatch(setCacheCreateAlertLevel(1))
                                    navigation.navigate("CreateAlertScreen")
                                }}
                                title={I18n.t("alertFaible")}
                                color="#ffd100" 
                                colorComponent="#860258" 
                                description={I18n.t("alertDescFaible")}
                            />
                        </>   
                    }

                    { statusHelp == true &&
                        <TouchableOpacity onPress={() => navigation.navigate("HelperAcceptAlertPage")}>
                            <View style={{
                                padding: 5,
                                height: 165,
                                width: screenWidth,
                                borderRadius: 10,
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
                                        }}>{alertDataHelp.description}</Text>
                                    </View>
                                </View>
                            </View>  
                        </TouchableOpacity>
                    }

                    { statusSend == true &&
                        <TouchableOpacity onPress={() => { dispatch(setCacheNav('Home')); navigation.navigate("SenderAcceptAlertPage")}}>
                            <View style={{
                                padding: 5,
                                height: 165,
                                width: screenWidth,
                                borderRadius: 15,
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
                                        }}>.......</Text>
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
                        </TouchableOpacity>
                    }
      
                <TouchableOpacity onPress={() => { dispatch(setCacheNav('Home')); navigation.navigate('Map')}}>
                    <View style={{
                        height: Dimensions.get('window').height > 695 ? 170: 135,
                        marginTop: 7.5,
                        borderRadius: 10,
                        width: screenWidth,
                        backgroundColor: '#e1e1e1',
                    }}>
                        <MapComponent nav={navigation} height={Dimensions.get('window').height > 695 ? 170: 135} width={screenWidth} />
                    </View>
                </TouchableOpacity>

                
                <View style={{marginTop: 15}}>
                    <AlertComponent onClick={() => { dispatch(setCacheNav('Home')); navigation.navigate('GDPS')}} fontAwesome={faFirstAid} color="#008b00" title={I18n.t("gdps")} />
                    <AlertComponent onClick={() => { dispatch(setCacheNav('Home')); navigation.navigate('NDU')}} fontAwesome={faPhoneAlt} color="#d80000" title={I18n.t("ndu")} />
        
                    { Dimensions.get('window').height > 695 &&
                        <AlertComponent onClick={() => { dispatch(setCacheNav('Home')); navigation.navigate('Alert')}} fontAwesome={faBell} color="#1f7ceb" title="Listes des alertes" />
                    }
                </View>
 

            </View>
        </View>
    );
}

export default HomeScreen;