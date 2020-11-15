import { faCircle, faFont, faHome, faLanguage, faLock, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, StyleSheet, ScrollView } from 'react-native';
import Users from '../../api/User';
import CheckBox from '@react-native-community/checkbox';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { useReduxState } from '../../data/store';
import ImagePicker from "react-native-image-picker";
import { MyHeroService } from '../../api/Service';
import I18n from '../../i18n/i18n';
import { Langues } from '../../data/langues';
import ButtonComponent from '../../components/Button';
import FondComponent from '../../components/Fond';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: 6,
      marginBottom: 10,
    },
    checkbox: {
      alignSelf: "center",
      color: "red"
    },
    label: {
      margin: 8,
      marginLeft: 15,
      fontSize: 22.5
    },
});

const ParametresScreen = ({ navigation }) => {
    const image = useReduxState(state => state.user.image);
    const name = useReduxState(state => state.user.name);
    const mail = useReduxState(state => state.user.mail) || '';
    const xp = useReduxState(state => state.user.xp);
    const [pictureS, setPictureS] = useState(false);
    const [mdpS, setMdpS] = useState(false);
    const [pseudoS, setPseudoS] = useState(false);
    const [alertC, setAlertC] = useState(false);
    const [languageS, setLanguageS] = useState(false);

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
        cPassword: '',
        pseudo: ''
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
   
    const returnLangues = () => {
        return Langues.map((v, k) => {
            return (
                <TouchableOpacity key={k}>
                    <View style={{
                        display: 'flex',
                        flexDirection: "row",
                        height: 80,
                        backgroundColor: '#e1e1e1',
                        marginBottom: 10,
                        borderRadius: 7.5,
                        alignItems: "center",
                    }}>
                        <View style={{
                            marginLeft: 10,
                            height: 80,
                            width: 80,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Image source={{uri: v.img}} style={{
                                height: 30,
                                width: 40,
                                marginRight: 10
                            }} />    
                        </View> 

                        <Text style={{fontSize: 25}}>{v.name}</Text>  
                    </View>
                </TouchableOpacity>
            );
        })
      }

    if (languageS == true) {
        return (
            <>
                <HeaderComponent title={I18n.t("settingsLanguage")} navigation={navigation} />

                <ScrollView>
                    <View style={{
                        paddingLeft: 35,
                        paddingRight: 35
                    }}>
                        {returnLangues()}
                    </View>
                </ScrollView>
            </>
        );
    }

    if (pseudoS == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FondComponent />

                <Text style={{
                    color: "#000000",
                    fontSize: 35,
                    width: 200,
                    marginBottom: 35,
                    textAlign: "center"
                }}>{I18n.t("settingsPseudo1")}</Text>

                <InputComponent name={I18n.t("inscriptionPseudo")} placeholder={I18n.t("inscriptionPseudo")} value={state.pseudo} icon={faUser} onChange={(v: string) => setState({...state, pseudo: v})} />
            
                <View style={{
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity onPress={() => setPseudoS(false)}>
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

                    <TouchableOpacity onPress={() => {
                        const arg = {
                            email: mail,
                            pseudo: state.pseudo
                        }

                        Users.UpdatePseudo(arg, (e: any) => {
                            console.log(e)
                        })
                        
                        setPseudoS(false)
                    }}>
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

    if (mdpS == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FondComponent />


                <Text style={{
                    color: "#000000",
                    fontSize: 35,
                    width: 200,
                    marginBottom: 35,
                    textAlign: "center"
                }}>{I18n.t("settingsMDP1")}</Text>

                <InputComponent password={true} name={I18n.t("inscriptionMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                <InputComponent password={true} name={I18n.t("inscriptionCMDP")} placeholder={I18n.t("inscriptionMDP")} value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />
            
                <View style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity onPress={() => setMdpS(false)}>
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
                        
                        setMdpS(false)
                    }}>
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

    if (pictureS == true) {
        return (
            <View style={{
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>     
                <FondComponent />
                
                <Text style={{
                    color: "#000000",
                    fontSize: 35,
                    width: 200,
                    marginBottom: 35,
                    textAlign: "center"
                }}>{I18n.t("settingsAvatar")}</Text>

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
                        marginBottom: 15,
                        textAlign: "center"
                    }}>{I18n.t("inscriptionChoosePhoto")}</Text>
                </TouchableOpacity>

                <View style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <TouchableOpacity onPress={() => setPictureS(false)}>
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

                    <TouchableOpacity onPress={() => setPictureS(false)}>
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

    return (
        <>
            <HeaderComponent title={I18n.t("parametres")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <View style={{
                    display: "flex",
                    alignItems: "center",                    
                    marginBottom: 0,
                }}>
                       <Image
                        style={{
                            height: 110,
                            width: 110,
                            borderRadius: 15,
                            marginBottom: 12.5,
                        }}

                        source={{
                            uri: image,
                        }}
                    />

                    <Text style={{
                        fontSize: 25,
                        color: "#454F63"
                    }}>{name}</Text>

                    <Text style={{
                        fontSize: 17.5,
                        marginBottom: 15,
                        color: "#454F63"
                    }}>{mail}</Text>
                </View>

                <ButtonComponent onClick={() => setLanguageS(true)} title={I18n.t("settingsLanguage")} icon={faLanguage} color="#1F7CEB" />
                <ButtonComponent onClick={() => setMdpS(true)} title={I18n.t("settingsCSMDP")} icon={faLock} color="#FCCA1C" />
                <ButtonComponent onClick={() => setPictureS(true)} title={I18n.t("settingsChangerAvatar")} icon={faUser} color="#FC9A21" />
                <ButtonComponent onClick={() => setPseudoS(true)} title={I18n.t("settingsChangerPseudo")} icon={faFont} color="#B0F50A" />
                <ButtonComponent onClick={() => disconnect()} title={I18n.t("settingsSeDeco")} icon={faSignOutAlt} color="#E63B25" />
                
            </View>  
        </>
    );
}

export default ParametresScreen;

/*

<View style={styles.checkboxContainer}>
                    <CheckBox
                      value={alertC}
                      onValueChange={setAlertC}
                      style={styles.checkbox}
                      tintColors={{ true: '#3497FD', false: '#3497FD' }}
                    />
                    <Text style={styles.label}>{I18n.t("settingsChk1")}</Text>
                </View>

                <TouchableOpacity onPress={() => setMdpS(true)}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 21,
                            color: '#000000'
                        }}>{I18n.t("settingsCSMDP")}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPictureS(true)}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 21,
                            color: '#000000'
                        }}>{I18n.t("settingsChangerAvatar")}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setPseudoS(true)}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 21,
                            color: '#000000'
                        }}>{I18n.t("settingsChangerPseudo")}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => disconnect()}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#d80000'           
                    }}>
                        <Text style={{
                            fontSize: 21,
                            color: '#ffffff'
                        }}>{I18n.t("settingsSeDeco")}</Text>
                    </View>
                </TouchableOpacity>

                */