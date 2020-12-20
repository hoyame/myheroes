/*

import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput, Platform, Alert } from "react-native";
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { faArrowAltCircleLeft, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Users from '../../api/User';
import AsyncStorage from '@react-native-community/async-storage';
import { WaveIndicator } from 'react-native-indicators';
import ImagePicker from "react-native-image-picker";
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import { API_LINK } from '../../App';
import I18n from '../../i18n/i18n';
import { useDispatch } from 'react-redux';
import { setMail, setName, setRate, setXp, setImage } from '../../data/actions/user';


const screenWidth = Math.round(Dimensions.get('window').width - 70);

const STYLES = StyleSheet.create({
    ROW: {
      display: "flex",
      flexDirection: "row"
    },

    INPUT: {
        height: 60, 
        width: screenWidth,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 20
    }
});
  
const InscriptionScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
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
            name: `${state.name}.jpg`
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
        );
    }

    if (status == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Ze />
                <WaveIndicator color='#3497FD' size={40} />
            </View>
        );
    }

    return (
        <>
            <View style={{
                display: 'flex',
                flex: 1,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 35,
                paddingRight: 35,
            }}>
                <Text style={{
                    fontSize: 35,
                    textAlign: 'center',
                    marginBottom: 10
                }}>{I18n.t("inscription")}</Text>
                
                <Text style={{
                    marginBottom: 20
                }}>{I18n.t("inscriptionDesc")}</Text>


                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <InputComponent name={I18n.t("inscriptionPseudo")} placeholder={I18n.t("inscriptionPseudo")} value={state.name} icon={faUser} onChange={(v: string) => setState({...state, name: v})} />
                    <InputComponent name={I18n.t("inscriptionIdentifiant")} placeholder={I18n.t("inscriptionDescIdentifiant")} value={state.mail} icon={faEnvelope} onChange={(v: string) => setState({...state, mail: v})} />
                    <InputComponent password={true} name={I18n.t("inscriptionMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                    <InputComponent password={true} name={I18n.t("inscriptionCMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />
                
                    <View style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 7.5,
                        flexDirection: 'row'
                    }}>
                        <Text>{I18n.t("inscriptionVAC")}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Connexion')}>
                            <Text style={{
                                color: "#3497FD"
                            }}>{I18n.t("connexionTES")}</Text>
                        </TouchableOpacity>
                    </View>

                    {error && <Text style={{color: 'red', textAlign: "center", marginBottom: 7.5}}>{I18n.t("inscriprionERR1")}</Text>}
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
                            borderRadius: 7.5,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'           
                        }}>
                            <Text style={{
                                fontSize: 25
                            }}>{I18n.t("connexionReg")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default InscriptionScreen;

*/