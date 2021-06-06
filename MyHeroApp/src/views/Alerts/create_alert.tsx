import React, { useState } from 'react';
import { faEnvelope, faExclamationCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ActivityIndicator, Dimensions, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';
import { useReduxState } from '../../data/store';
import InputComponent from '../../components/Input/input';
import { WaveIndicator } from 'react-native-indicators';
import { useDispatch } from 'react-redux';
import { setImage, setSendAlertData } from '../../data/actions/user';
import MyHeroAlerts from '../../api/Alerts';
import I18n from '../../i18n/i18n';
import BottomComponent from '../../components/Bottom';
import FondComponent from '../../components/Fond';
import { MyHeroService } from '../../api/Service';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from "react-native-image-picker";
import { Image } from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

const CreateAlertScreen = ({ navigation }) => {
    const [state, setState] = useState({
        description: ""
    })
    
    const _storeData = async () => {
        try {
            await AsyncStorage.setItem('@send_alert', 'true')
        } catch (error) {
            console.log("error", error)
        }
    };
    
    const alertLevelSe = useReduxState(state => state.user.createAlertLevel);
    const nameSe = useReduxState(state => state.user.name);
    const identifierSe = useReduxState(state => state.user.mail);
    const latitude = MyHeroService.latitude;
    const longitude = MyHeroService.longitude;
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState(true);

    const [img, setImg] = useState({
        uri: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        type: ''
    })

    const uploadImage = (image_uri: string) => {
        let base_url = 'http://176.31.230.112:3000/api/alert/upload';
        let uploadData = new FormData();
         
        uploadData.append('sumbit', 'ok');
        uploadData.append('file', { 
            type: 'image/jpg', 
            uri: image_uri, 
            name: `${identifierSe}.jpg`
        })

        fetch(base_url, {
          method: 'post',
          body: uploadData,
        })

        .then((res: any) => {
            console.log('upload succes', res);
            setImg({...img, uri: `http://176.31.230.112:3000/api/avatar/alert-${identifierSe}?time=${new Date()}`});

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
                setPhoto(false)
                uploadImage(response.uri)
            }
        });
    };
   
    if (alertLevelSe == 0) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "#3497FD",
                    fontSize: 30,
                    marginBottom: 30,
                    textAlign: "center"
                }}>{I18n.t("chargement")}</Text>
                    
                <WaveIndicator color='#3497FD' size={40} />
            </View>
        );
    }

    let color = '#ffd100';
    let name = 'Faible'
    let description = ''

    switch (alertLevelSe) {
        case 1: 
            color = '#ffd100'
            name = I18n.t("alertFaible")
            description = I18n.t("alertDescFaible")
            break
        case 2: 
            color = '#ff9600'
            name = I18n.t("alertMoyen")
            description = I18n.t("alertDescMoyen")
            break
        case 3: 
            color = '#d80000'
            name = I18n.t("alertGrave")
            description = I18n.t("alertDescGrave")
            break
        default: break
    }
 
    return (
        <>
                <KeyboardAwareScrollView>
                    <HeaderComponent title={I18n.t("alertLaunch")} navigation={navigation} />

                    <ScrollView>
                        <View style={{
                            padding: 35,
                            paddingTop: 15,
                        }}>
                            <View>
                                <View style={{
                                    marginBottom: 15,
                                    height: 100,
                                    borderRadius: 15,
                                    paddingLeft: 25,
                                    display: "flex",
                                    flexDirection: 'row',
                                    justifyContent: "space-between",
                                    backgroundColor: color
                                }}>
                                    <View style={{
                                        justifyContent: "center",
                                    }}>
                                        <Text style={{
                                            fontSize: 20
                                        }}>{I18n.t("alertT")} {name}</Text>

                                        <Text style={{
                                            color: "#262626",
                                            fontSize: 10
                                        }}>{description}</Text>
                                    </View>

                                    <View style={{
                                        height: 100,
                                        width: 90,
                                        borderRadius: 100,
                                        opacity: 0.60,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faExclamationCircle} size={50} style={{ color: "#ffffff" }}></FontAwesomeIcon>
                                    </View>
                                </View>
                                    
                                <View style={{
                                    height: 60,
                                    marginBottom: 15,
                                    borderRadius: 15,
                                    padding: 10,
                                    justifyContent: "center",
                                    backgroundColor: "#FC9A21"
                                }}>
                                    <Text style={{
                                        textAlign: "center",
                                        color: "#fff",
                                        fontSize: 15      
                                    }}>{I18n.t("alertWarn")}</Text>
                                </View>

                                <View style={{
                                    height: 200,
                                    marginBottom: 15,
                                    borderRadius: 15,
                                    padding: 10,
                                    justifyContent: "center",
                                    alignItems: 'center',
                                    backgroundColor: "#ffffff"
                                }}>
                                    { photo ? 
                                        <TouchableOpacity onPress={() => handlePicker()}>
                                            <Text style={{
                                                color: "#3497FD",
                                                fontSize: 20
                                            }}>{I18n.t("alertAddPhoto")}</Text>
                                        </TouchableOpacity>
                                    : 
                                        <Image source={{uri: img.uri}} style={{
                                            height: "99%",
                                            width: "99%",
                                            borderRadius: 10,
                                        }}></Image>
                                    }
                                </View>

                                <View>
                                    <InputComponent height={65} name={I18n.t("description")} placeholder={I18n.t("descDescription")} value={state.description} icon={faFileAlt} onChange={(v: string) => setState({...state, description: v})} />
                                </View>

                                <BottomComponent title={I18n.t("alertLaunch")} onClick={() => {
                                    _storeData();
                                    MyHeroAlerts.setViewerDataStatus(identifierSe, true)
                                    MyHeroAlerts.SendAlert({
                                        identifier: identifierSe,
                                        level: alertLevelSe,
                                        source: nameSe,
                                        latitude: latitude,
                                        longitude: longitude,    
                                        description: state.description,
                                        webrtc: MyHeroService.initConnexionStream()
                                    })
                                    navigation.navigate('SenderAcceptAlertPage') 
                                    dispatch(setSendAlertData({ status: true, data: {
                                        identifier: identifierSe,
                                        level: alertLevelSe,
                                        source: nameSe,
                                        latitude: latitude,
                                        longitude: longitude,    
                                        description: state.description,
                                        webrtc: MyHeroService.initConnexionStream()
                                    } })) 
                                }}/>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
        </>
    );    
}

export default CreateAlertScreen;