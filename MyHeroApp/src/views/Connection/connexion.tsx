import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform, Linking } from "react-native";
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
import FondComponent from '../../components/Fond';
import TitleComponent from '../../components/Title';
import ImagePicker from "react-native-image-picker";
import { useReduxState } from '../../data/store';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const screenWidth = Math.round(Dimensions.get('window').width - 70);
const screenHeight = Math.round(Dimensions.get('window').height);

const ConnexionScreen = ({ navigation }) => {
    const name = useReduxState(state => state.user.name);

    const dispatch = useDispatch();
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
    const [connexion, setConnexion] = useState(true);
    const [inscription, setInscription] = useState(false);
    const [errorS, setErrorS] = useState(false)
    const [pictureS, setPictureS] = useState(false);
    const [errorM, setErrorM] = useState(false)
    const [errorU, setErrorU] = useState(false)
    const [img, setImg] = useState({
        uri: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        type: ''
    })

    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: ''
    })

    const uploadImage = (image_uri: string) => {
        let base_url = 'http://146.59.227.90:3000/api/upload/';
        let uploadData = new FormData();
         
        uploadData.append('sumbit', 'ok');
        uploadData.append('file', { 
            type: 'image/jpg', 
            uri: image_uri, 
            name: `${name}.jpg`
        })

        fetch(base_url, {
          method: 'post',
          body: uploadData,
        })

        .then((res: any) => {
            console.log('upload succes', res);
            setImg({...img, uri: `http://146.59.227.90:3000/api/avatar/${name}?time=${new Date()}`});
            dispatch(setImage(`http://146.59.227.90:3000/api/avatar/${name}?time=${new Date()}`));
        })
        .catch((error) => {
            console.log('upload error', error);
        });
    }
 
    const handlePicker = () => {
        ImagePicker.showImagePicker({ noData: true, mediaType: 'photo', allowsEditing: true, quality: 0.7 }, (response: any) => {   
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setImg({...img, uri: response.uri});
                uploadImage(response.uri)
            }
        });
    };

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

    if (pictureS == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>     
                <FondComponent />
                <TitleComponent />

                <Text style={{
                    color: "#000000",
                    fontSize: 35,
                    width: 200,
                    marginBottom: 35,
                    textAlign: "center"
                }}>{I18n.t("settingsAvatar")}</Text>

                <TouchableOpacity>
                    <View style={{
                        height: 50,
                        width: screenWidth,
                        marginBottom: 20,
                        borderRadius: 15,
                        backgroundColor: '#3497FD',
                        justifyContent: 'center'           
                    }}>
                        <Text style={{textAlign: "center", color: "#ffffff"}}>La photo de profil est utilisée pour vous reconnaitre</Text>
                    </View>
                </TouchableOpacity>

                { img.uri !== "" && 
                    <Image 
                        key={Date.now()} 
                        source={{uri: img.uri}}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            marginBottom: 20
                        }}
                    />
                }

                <TouchableOpacity onPress={() => handlePicker()}>
                    <Text style={{
                        color: "#000000",
                        fontSize: 20,
                        marginBottom: 15,
                        textAlign: "center"
                    }}>{I18n.t("inscriptionChoosePhoto")}</Text>
                </TouchableOpacity>

                <View style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={{
                            height: 60, 
                            borderRadius: 7.5,
                            marginTop: 10,
                            width: 140,
                            marginRight: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'           
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#ffffff"
                            }}>{I18n.t("annuler")}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <View style={{
                            height: 60, 
                            borderRadius: 7.5,
                            marginTop: 10,
                            width: 140,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'           
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#ffffff"
                            }}>{I18n.t("continuer")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
                <KeyboardAwareScrollView>

                <View style={{
                    height: screenHeight,
                    padding: 35,
                    paddingTop: 0,
                    display: 'flex',
                    flex: 1,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                        <FondComponent />
                        <Image 
                            source={{uri: "https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"}} 
                            style={{
                                height: 105,
                                width: 115,
                                marginBottom: 15,
                                borderRadius: 10
                            }}
                        />

                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: 15
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
                            marginBottom: 5
                        }}>{I18n.t("inscription")}</Text>

                        <Text style={{
                            marginBottom: 20
                        }}>{I18n.t("inscriptionDesc")}</Text>

                        <InputComponent name={I18n.t("inscriptionPseudo")} placeholder={I18n.t("inscriptionPseudo") + "                                                  "} value={state.name} icon={faUser} onChange={(v: string) => setState({...state, name: v})} />
                        <InputComponent name={I18n.t("inscriptionIdentifiant")} placeholder={I18n.t("inscriptionDescIdentifiant") + "                                                  "} value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                        <InputComponent password={true} name={I18n.t("inscriptionMDP")} placeholder={I18n.t("inscriptionMDP") + "                                                  "} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                        <InputComponent password={true} name={I18n.t("inscriptionCMDP")} placeholder={I18n.t("inscriptionCMDP") + "                                                  "} value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />
                    
                        <View style={{
                            marginTop: 5,
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
                                <TouchableOpacity onPress={() => {setConnexion(true); setInscription(false)}}>
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
                                                            
                                                            //navigation.navigate('Home');
                                                            setPictureS(true)
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
                </KeyboardAwareScrollView>
            </>
        );
    }   

    return (
        <>
     
                <KeyboardAwareScrollView>
                    <View style={{
                        height: screenHeight,
                        padding: 35,
                        paddingTop: 0,
                        display: 'flex',
                        flex: 1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
          
                            <FondComponent />
                            <Image 
                                source={{uri: "https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"}} 
                                style={{
                                    height: 105,
                                    width: 115,
                                    marginBottom: 15,
                                    borderRadius: 10
                                }}
                            />

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

                            <InputComponent name={I18n.t("inscriptionIdentifiant")} placeholder={I18n.t("inscriptionDescIdentifiant") + "                                                  "} value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                            <InputComponent password={true} name={I18n.t("connexoinMDP")} placeholder={I18n.t("connexoinMDP") + "                                                  "} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                    
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
                                    <TouchableOpacity onPress={() => {setConnexion(false); setInscription(true)}}>
                                        <Text style={{
                                            color: "#3497FD"
                                        }}>{I18n.t("connexionReg")}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: 15,
                                    flexDirection: 'row'
                                }}>
                                    <TouchableOpacity onPress={() => Linking.openURL("http://146.59.227.90:5000/password-reset/new")}>
                                        <Text style={{
                                            color: "#3497FD"
                                        }}>{I18n.t("mdpOublier")}</Text>
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
                                                        dispatch(setImage(`http://146.59.227.90:3000/api/avatar/${e.pseudo}?time=${new Date()}`));
                                                        
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
                </KeyboardAwareScrollView>

        </>
    );
}

export default ConnexionScreen;