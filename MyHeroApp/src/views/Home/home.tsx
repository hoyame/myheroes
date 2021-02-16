import React, { useRef, useState } from 'react';
import { Animated, Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/headerTw';
import { faExclamationCircle, faMapSigns, faSmile, faPhoneAlt, faPlus, faFirstAid, faBell, faCircle, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faUser, faQuestionCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import MapComponent from '../Map/service';
import { useReduxState } from '../../data/store';
import { PulseIndicator } from 'react-native-indicators';
import { useDispatch } from 'react-redux';
import { setCacheCreateAlertLevel, setCacheNav, setName, setViewerCount } from '../../data/actions/user';
import I18n from '../../i18n/i18n';
import BlurView from 'react-native-blur';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import MyHeroAlerts from '../../api/Alerts';

//import SosSVG from '../../assets/sos.svg'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const screenHeight = Math.round(Dimensions.get('window').height / 4);
    
    const alertDataHelp = useReduxState(state => state.user.showAlert);
    const alertDataSend = useReduxState(state => state.user.send);
    const statusHelp = useReduxState(state => state.user.help.status);
    const statusSend = useReduxState(state => state.user.send.status);
    const createAlertLevel = useReduxState(state => state.user.createAlertLevel)

    const [alertLevel, setAlertLevel] = useState(1)
    const [popup, setPopus] = useState(false)

    const count = useReduxState(state => state.user.countViewers)

    setInterval(() => {
        if (MyHeroAlerts.ViewerData.status == true) {
            dispatch(setViewerCount(MyHeroAlerts.ViewerData.count))
        }
    }, 30000)

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true, // <-- Add this
      }).start();
    };

    fadeIn();
    
    interface IAlertProps {
        title?: string;
        color?: string;
        description?: string;
        colorComponent?: string;
        onClick: any;
        onPresss: any;
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
            <TouchableOpacity onPress={props.onClick} onLongPress={props.onPresss}>
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
                    <View style={{}}>
                        <Text style={{
                            fontSize: 20,
                            color: "#000000"
                        }}>{props.title}</Text>
                        
                        <Text style={{
                            fontSize: 12,
                            color: "#000000"
                        }}>{I18n.t("maintPourPInfo")}</Text>
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


    let description = alertDataHelp.description
 
    if (description == "") {
        description = I18n.t("notDesc");
    } 


    let ptitle;
    let pdescription;

    if (alertLevel == 3) {
        ptitle = I18n.t("alertGrave")
        pdescription = I18n.t("alertDescGrave")
    } else if (alertLevel == 2) {
        ptitle = I18n.t("alertMoyen")
        pdescription = I18n.t("alertDescMoyen")
    } else if (alertLevel == 1) {
        ptitle = I18n.t("alertFaible")
        pdescription = I18n.t("alertDescFaible")
    }

    return (
        <View style={{
            display: "flex",
        }}>
            <Animated.View style={{
                opacity: fadeAnim 
            }}>
                <ScrollView>
                    <HeaderComponent navigation={navigation} />

                    <View style={{
                        paddingLeft: 35,
                        marginBottom: 60
                    }}>
                            {
                                statusHelp == false && statusSend == false && popup == true && 
                                <>

                                    <TouchableOpacity onPress={() => {
                                        if (alertLevel == 3) {
                                            dispatch(setCacheNav('Home'));
                                            dispatch(setCacheCreateAlertLevel(3))
                                            navigation.navigate("CreateAlertScreen")
                                        } else if (alertLevel == 2) {
                                            dispatch(setCacheNav('Home'));
                                            dispatch(setCacheCreateAlertLevel(2))
                                            navigation.navigate("CreateAlertScreen")
                                        } else if (alertLevel == 1) {
                                            dispatch(setCacheNav('Home'));
                                            dispatch(setCacheCreateAlertLevel(1))
                                            navigation.navigate("CreateAlertScreen")
                                        }
                                    }}>
                                    
                                    <View style={{
                                        height: 180,
                                        width: screenWidth,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 7.5,
                                        borderRadius: 15,
                                        backgroundColor: returnColor(alertLevel)
                                    }}>
                                        <TouchableOpacity onPress={() => setPopus(false)} style={{
                                            position: "absolute",
                                            top: 15,
                                            right: 15,
                                        }}>
                                            <View style={{
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: 27.5,
                                                width: 27.5,
                                                opacity: 0.40,
                                                borderRadius: 50,
                                                backgroundColor: "#860258",
                                            }}>
                                                <FontAwesomeIcon icon={faTimes} size={20}></FontAwesomeIcon>
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{
                                            height: 55,
                                            width: 55,
                                            opacity: 0.40,
                                            backgroundColor: "#860258",
                                            borderRadius: 50,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginBottom: 7.5,
                                        }}>
                                            <FontAwesomeIcon icon={faExclamationCircle} size={40}></FontAwesomeIcon>
                                        </View>

                                        <View style={{
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                            <Text style={{ 
                                                fontSize: 25,
                                                color: "#000000",
                                                marginBottom: 5,
                                            }}>{ptitle}</Text>

                                            <Text style={{
                                                fontSize: 15,
                                                color: "#000000",
                                            }}>{pdescription}</Text>
                                        </View>
                                    </View>
                                    </TouchableOpacity>
                                </>
                            }

                            {   statusHelp == false && statusSend == false && popup == false &&
                                <>
                                    <AlertProps 
                                        onClick={() => {
                                            dispatch(setCacheNav('Home'));
                                            dispatch(setCacheCreateAlertLevel(3))
                                            navigation.navigate("CreateAlertScreen")
                                        }}
                                        onPresss={() => { 
                                            setPopus(true)
                                            setAlertLevel(3)
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
                                        onPresss={() => { 
                                            setPopus(true)
                                            setAlertLevel(2)
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
                                        onPresss={() => { 
                                            setPopus(true)
                                            setAlertLevel(1)
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
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 5,
                                        height: 165,
                                        width: screenWidth,
                                        borderRadius: 15,
                                        marginBottom: 10,
                                        backgroundColor: returnColor(alertDataHelp.level),
                                    }}>
                                        <View style={{
                                            width: "75%"
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
                                        <View style={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginTop: 20,
                                        }}>
                                            <Image
                                                key={Date.now()} 

                                                style={{

                                                    height: 60,
                                                    width: 60,
                                                    borderRadius: 10,
                                                }}
                                            
                                                source={{
                                                    uri: `http://146.59.227.90:3000/api/avatar/${alertDataHelp.source}?time=${new Date()}`,
                                                }}
                                            />
                                        </View>    
                                    </View>                                           
                                </TouchableOpacity>
                            }

                            { statusSend == true &&
                                <TouchableOpacity onPress={() => { dispatch(setCacheNav('Home')); navigation.navigate("SenderAcceptAlertPage")}}>
                                    <View style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        padding: 5,
                                        height: 165,
                                        width: screenWidth,
                                        borderRadius: 15,
                                        marginTop: 10,
                                        marginBottom: 7.5,
                                        backgroundColor: returnColor(createAlertLevel)
                                    }}>
                                        <View style={{
                                            width: "70%"
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
                                        <View style={{
                                            marginTop: 10,
                                            alignItems: "center",
                                        }}>
                                            <View style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}>  
                                                <FontAwesomeIcon icon={faUser} size={30} style={{
                                                    color: 'white'
                                                }} />

                                                <Text style={{
                                                    color: 'white',
                                                    marginLeft: 7.5,
                                                    fontSize: 45
                                                }}>{count}</Text>
                                            </View>

                                            <Text style={{
                                                color: "#ffffff",
                                                fontSize: 20,
                                            }}>Heroes</Text>
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
                                backgroundColor: '#ffffff',
                            }}>
                                <MapComponent nav={navigation} height={Dimensions.get('window').height > 695 ? 170 : 135} width={screenWidth} />
                                <TouchableOpacity onPress={() => { dispatch(setCacheNav('Home')); navigation.navigate('Map')}}>
                                    <View style={{
                                        position: "absolute",
                                        top: Dimensions.get('window').height > 695 ? -160 : -120,
                                        right: 10,
                                        height: 30,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 50,
                                        width: 30,
                                        backgroundColor: "#fff"
                                    }}>
                                        <FontAwesomeIcon icon={faArrowRight} size={15} style={{
                                            justifyContent: "center"
                                        }}/>
                                    </View>
                                </TouchableOpacity>
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
            </ScrollView>
            </Animated.View>
        </View>
    );
}

export default HomeScreen;