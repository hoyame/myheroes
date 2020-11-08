import { faHome, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import Users from '../../api/User';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { useReduxState } from '../../data/store';
import ImagePicker from "react-native-image-picker";
import { MyHeroService } from '../../api/Service';
import I18n from '../../i18n/i18n';


const ParametresScreen = ({ navigation }) => {
    const image = useReduxState(state => state.user.image);
    const name = useReduxState(state => state.user.name);
    const mail = useReduxState(state => state.user.mail) || '';
    const xp = useReduxState(state => state.user.xp);
    const [pictureS, setPictureS] = useState(false)

    const [img, setImg] = useState({
        uri: 'https://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
        type: ''
    })

    const disconnect = () => {
        Users.Disconnect();
        navigation.navigate('Connexion');
    }

    const [state, setState] = useState({
        password: '',
        cPassword: ''
    })
 
    const handlePicker = () => {
        ImagePicker.showImagePicker({}, (response: any) => {   
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            setImg({...img, uri: response.uri});

            let base_url = 'http://176.31.15.117/test/';
            let uploadData = new FormData();
             
            uploadData.append('sumbit', 'ok');
            uploadData.append('file', { type: 'image/jpg', uri: response.uri, name: 'zbfizb' })

            fetch(base_url, {
              method: 'post',
              body: uploadData,
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })

                .then((data) => data.json())
                .then((res) => {
                    console.log('upload succes', res);
                    setImg({...img, uri: res.image});
                })
                .catch((error) => {
                    console.log('upload error', error);
                });
            }
        });
      };


    if (pictureS == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{
                    color: "#6d9bff",
                    fontSize: 30,                    
                    marginBottom: 40,
                    textAlign: "center"
                }}>MyHeroes</Text>
      
                <Text style={{
                    color: "#6d9bff",
                    fontSize: 20,
                    marginBottom: 5,
                    textAlign: "center"
                }}>{I18n.t("inscriptionContinuerInscription")}</Text>

                <Text style={{
                    color: "#6d9bff",
                    fontSize: 20,
                    marginBottom: 40,
                    textAlign: "center"
                }}>{I18n.t("inscriptionAddPhoto")}</Text>

                { img.uri !== "" && 
                    <Image 
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
                        marginBottom: 30,
                        textAlign: "center"
                    }}>{I18n.t("inscriptionChoosePhoto")}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPictureS(false)}>
                        <View style={{
                            height: 60, 
                            borderRadius: 7.5,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#6d9bff'           
                        }}>
                            <Text style={{
                                fontSize: 25
                            }}>{I18n.t("continuer")}</Text>
                        </View>
                    </TouchableOpacity>
            </View>
        );
    }

    return (
        <>
            <HeaderComponent title={I18n.t("parametres")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 15
                }}>{I18n.t("settingsDesc")}</Text>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 0,
                }}>
                    <Image 
                        source={{uri: image}}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 10,
                            marginBottom: 20
                        }}
                    />

                    <View style={{
                        height: 80,
                        justifyContent: "center",
                        marginLeft: 15
                    }}>
                        <Text style={{
                            fontSize: 30
                        }}>
                            {name}
                        </Text>

                        <Text style={{
                            color: "#778899",
                            fontSize: 25
                        }}>
                            {xp} XP
                        </Text>
                    </View>
                </View>

                <InputComponent password={true} name={I18n.t("inscriptionMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                <InputComponent password={true} name={I18n.t("inscriptionCMDP")} placeholder={I18n.t("inscriptionCMDP")} value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />

                <TouchableOpacity onPress={() => { 
                    const arg = {
                        email: mail,
                        password: state.password
                    }

                    if (state.password === state.cPassword) {
                        Users.UpdatePassword(arg, (e: any) => {
                            console.log(e)
                        }
                    )}
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#000000'
                        }}>{I18n.t("settingsCSMDP")}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPictureS(true)}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#000000'
                        }}>{I18n.t("settingsChangerAvatar")}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => disconnect()}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#d80000'           
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#ffffff'
                        }}>{I18n.t("settingsSeDeco")}</Text>
                    </View>
                </TouchableOpacity>
            </View>  
        </>
    );
}

export default ParametresScreen;