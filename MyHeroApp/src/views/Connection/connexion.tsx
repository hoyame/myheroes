import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput, Alert } from "react-native";
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { faArrowAltCircleLeft, faCircle, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Users from '../../api/User';
import { WaveIndicator } from 'react-native-indicators';
import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../../i18n/i18n';
import { setMail, setName, setRate, setXp, setImage } from '../../data/actions/user';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as Animatable from 'react-native-animatable';

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const ConnexionScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
    const [connexion, setConnexion] = useState(true);
    const [inscription, setInscription] = useState(false);
    const [errorS, setErrorS] = useState(false)
    const [errorM, setErrorM] = useState(false)
    const [errorU, setErrorU] = useState(false)

    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: ''
    })

    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@mail', state.mail)
        } catch (error) {
            console.log("error", error)
        }
    };

    const Ze = () => {
        if (inscription == true) {
            return (
                <>
                    <Text style={{
                        color: "#3497FD",
                        fontSize: 30,                    
                        marginBottom: 10,
                        textAlign: "center"
                    }}>{I18n.t("welcomeMH")}</Text>

                    <Text style={{
                        color: "#3497FD",
                        fontSize: 25,
                        marginBottom: 30,
                        textAlign: "center"
                    }}>{I18n.t("inscriptionEC")}</Text>
                </>
            )
        } else {
            return (
                <>
                    <Text style={{
                        color: "#3497FD",
                        fontSize: 30,                    
                        marginBottom: 10,
                        textAlign: "center"
                    }}>{I18n.t("welcomeMH")}</Text>

                    <Text style={{
                        color: "#3497FD",
                        fontSize: 25,
                        marginBottom: 30,
                        textAlign: "center"
                    }}>{I18n.t("connexionEC")}</Text>
                </>
            )
        }
    }
    
    if (status == true) {
        return (
            <>
                <View style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Ze />
                    <WaveIndicator color='#3497FD' size={40} />
                </View>

            </>
        );
    }

    if (inscription == true) {
        return (
            <>
                <View style={{
                    padding: 35,
                    display: 'flex',
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <FontAwesomeIcon icon={faCircle} size={250} style={{
                        position: 'absolute',
                        top: 150,
                        right: -150,
                        color: "#3497FD"
                    }} />

                    <FontAwesomeIcon icon={faCircle} size={150} style={{
                        position: 'absolute',
                        top: 260,
                        left: -50,
                        color: "#3497FD"
                    }} />

                    <FontAwesomeIcon icon={faCircle} size={120} style={{
                        position: 'absolute',
                        bottom: -60,
                        right: -50,
                        color: "#3497FD"
                    }} />

                    <FontAwesomeIcon icon={faCircle} size={120} style={{
                        position: 'absolute',
                        top: -60,
                        left: -50,
                        color: "#3497FD"
                    }} />


                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: 30
                    }}>
                        <TouchableOpacity onPress={() => { setConnexion(true); setInscription(false) }}>
                            <View style={{
                                paddingLeft: 14,
                                paddingRight: 14,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderRadius: 12,
                                marginRight: 14,
                                backgroundColor: connexion ? "#3497FD" : "transparent",
                            }}>
                                <Text style={{color: connexion ? "#ffffff": "#78849E"}}>
                                    {I18n.t("connexion")}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setConnexion(false); setInscription(true) }}>
                            <View style={{
                                paddingLeft: 14,
                                paddingRight: 14,
                                paddingTop: 10,
                                paddingBottom: 10,
                                borderRadius: 12,
                                backgroundColor: inscription ? "#3497FD" : "transparent",
                            }}>
                                <Text style={{color: inscription ? "#ffffff": "#78849E"}}>
                                    {I18n.t("inscription")}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={{
                        fontSize: 35,
                        textAlign: 'center',
                        marginBottom: 10
                    }}>{I18n.t("inscription")}</Text>

                    <Text style={{
                        marginBottom: 30
                    }}>{I18n.t("inscriptionDesc")}</Text>

                    <InputComponent name={I18n.t("inscriptionPseudo")} placeholder={I18n.t("inscriptionPseudo")} value={state.name} icon={faUser} onChange={(v: string) => setState({...state, name: v})} />
                    <InputComponent name={I18n.t("inscriptionIdentifiant")} placeholder={I18n.t("inscriptionDescIdentifiant")} value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                    <InputComponent password={true} name={I18n.t("inscriptionMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                    <InputComponent password={true} name={I18n.t("inscriptionCMDP")} placeholder={I18n.t("inscriptionCMDP")} value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />
                
                    <View style={{
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: 15,
                            flexDirection: 'row'
                        }}>
                            <Text>{I18n.t("inscriptionVAC")}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                                <Text style={{
                                    color: "#3497FD"
                                }}>{I18n.t("connexionTES")}</Text>
                            </TouchableOpacity>
                        </View>

                        {errorS && <Text style={{color: 'red', textAlign: "center", marginBottom: 7.5}}>{I18n.t("inscriprionERR1")}</Text>}
                        {errorM && <Text style={{color: 'red', textAlign: "center", marginBottom: 7.5}}>{I18n.t("inscriprionERR2")}</Text>}
                        {errorU && <Text style={{color: 'red', textAlign: "center", marginBottom: 7.5}}>{I18n.t("inscriprionERR3")}</Text>}

                        <TouchableOpacity onPress={() => {
                            setStatus(true);

                            if (state.password !== "" && state.cPassword !== "" && state.name !== "" && state.mail !== "") {
                                if (state.password === state.cPassword) {
                                    Users.Register({
                                        pseudo: state.name,
                                        email: state.mail,
                                        password: state.password
                                    }, (res: any) => {
                                        if (res == 200) {
                                            setTimeout(() => {
                                                setStatus(false);
                                                _storeData();
    
                                                setTimeout(() => {
                                                    Users.Load((e: any) => {
                                                        dispatch(setMail(e.mail));
                                                        dispatch(setName(e.pseudo));
                                                        dispatch(setRate(e.rate));
                                                        dispatch(setXp(e.xp));
                                                        dispatch(setImage(e.image));
    
                                                        navigation.navigate('Home');
                                                    }, () => {
                                                        navigation.navigate('Connexion');
                                                    }, () => {
                                                        Alert.alert(I18n.t("errorServMH"));
                                                        navigation.navigate('Connexion');
                                                    })
                                                }, 2500)
                                            }, 2500)
                                        } else {
                                            setTimeout(() => {
                                                setStatus(false);
                                                setErrorU(true);
                                            }, 3000)
                                        }
                                    })
                                } else {
                                    setTimeout(() => {
                                        setStatus(false);
                                        setError(true);
                                    }, 3000) 
                                }
                            } else {
                                setTimeout(() => {
                                    setStatus(false);
                                    setErrorM(true);
                                }, 3000)
                            }
                        }}>
                            <View style={{
                                height: 60, 
                                width: screenWidth,
                                borderRadius:15,
                                marginTop: 5,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: '#3497FD'           
                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    color: "#ffffff",
                                }}>{I18n.t("connexionReg")}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }   

    return (
        <>
            <View style={{
                padding: 35,
                display: 'flex',
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FontAwesomeIcon icon={faCircle} size={250} style={{
                    position: 'absolute',
                    top: 150,
                    right: -150,
                    color: "#3497FD"
                }} />

                <FontAwesomeIcon icon={faCircle} size={150} style={{
                    position: 'absolute',
                    top: 260,
                    left: -50,
                    color: "#3497FD"
                }} />

                <FontAwesomeIcon icon={faCircle} size={120} style={{
                    position: 'absolute',
                    bottom: -60,
                    right: -50,
                    color: "#3497FD"
                }} />

                <FontAwesomeIcon icon={faCircle} size={120} style={{
                    position: 'absolute',
                    top: -60,
                    left: -50,
                    color: "#3497FD"
                }} />


                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 30
                }}>
                    <TouchableOpacity onPress={() => { setConnexion(true); setInscription(false) }}>
                        <View style={{
                            paddingLeft: 14,
                            paddingRight: 14,
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 12,
                            marginRight: 14,
                            backgroundColor: connexion ? "#3497FD" : "transparent",
                        }}>
                            <Text style={{color: connexion ? "#ffffff": "#78849E"}}>
                                {I18n.t("connexion")}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setConnexion(false); setInscription(true) }}>
                        <View style={{
                            paddingLeft: 14,
                            paddingRight: 14,
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderRadius: 12,
                            backgroundColor: inscription ? "#3497FD" : "transparent",
                        }}>
                            <Text style={{color: inscription ? "#ffffff": "#78849E"}}>
                                {I18n.t("inscription")}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontSize: 35,
                    textAlign: 'center',
                    marginBottom: 10
                }}>{I18n.t("connexion")}</Text>
                
                <Text style={{
                    marginBottom: 30
                }}>{I18n.t("connexionDesc")}</Text>

                <InputComponent name={I18n.t("connexoinIdentifiant")} placeholder={I18n.t("connexoinIdentifiant")} value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                <InputComponent password={true} name={I18n.t("connexoinMDP")} placeholder={I18n.t("connexoinMDP")} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
        
                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 15,
                        flexDirection: 'row'
                    }}>
                        <Text>{I18n.t("connexionVousAvezPasCompte")}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
                            <Text style={{
                                color: "#3497FD"
                            }}>{I18n.t("connexionReg")}</Text>
                        </TouchableOpacity>
                    </View>

                    {error && <Text style={{color: 'red', textAlign: "center", marginBottom: 10}}>Identifiant ou/et mot de passe erronée</Text>}

                    <TouchableOpacity onPress={() => {
                        setStatus(true);

                        Users.Login({
                            pseudo: state.mail,
                            email: state.mail,
                            password: state.password,
                        }, (res: any) => {
                            if (res == 200) {
                                setTimeout(() => {
                                    _storeData();
                
                                    setTimeout(() => {
                                        Users.Load((e: any) => {
                                            dispatch(setMail(e.mail));
                                            dispatch(setName(e.pseudo));
                                            dispatch(setRate(e.rate));
                                            dispatch(setXp(e.xp));
                                            dispatch(setImage(e.image));
                
                                            navigation.navigate('Home');
                                        }, () => {
                                            navigation.navigate('Connexion');
                                        }, () => {
                                            Alert.alert(I18n.t("errorServMH"));
                                            navigation.navigate('Connexion');
                                        })
                                    }, 2500)
                                }, 2500)
                            } else {
                                setTimeout(() => {
                                    setStatus(false);
                                    setError(true);
                                }, 3000)
                            }
                        })
                    }}>
                        <View style={{
                            height: 60, 
                            width: screenWidth,
                            borderRadius:15,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'           
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#ffffff",
                            }}>{I18n.t("connexionTES")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default ConnexionScreen;