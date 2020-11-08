import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';
import { useReduxState } from '../../data/store';
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import I18n from '../../i18n/i18n';

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
  

const AccountScreen = ({ navigation }) => {
    const name = useReduxState(state => state.user.name);
    const rate = useReduxState(state => state.user.rate);
    const img = useReduxState(state => state.user.image);
    const xp = useReduxState(state => state.user.xp);
    
    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: '',
    })

    interface IStars {
        rate: number
    }

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={20} style={{color: color}} />
                    </View>
                );
        }
    }

    const AvisProps = () => {
        return (
            <View style={{
                display: "flex",
                flexDirection: "row",
                height: 105,
                marginBottom: 10,
                borderRadius: 7.5,
                backgroundColor: '#c2c2c2'
            }}>
                <View style={{
                    height: 105,
                    width: 105,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Image
                        style={{
                            height: 73,
                            width: 73,
                            borderRadius: 50,
                        }}
                    
                        source={{
                            uri: 'https://cdn.discordapp.com/avatars/516712735484936193/e40f4e67193ef53a94ae1eed5d5ec902.png?size=128',
                        }}
                    />
                </View>

                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        fontSize: 16,
                        marginBottom: 3
                    }}>Jibril</Text>

                    <ReturnStars rate={1} />

                    <Text style={{
                        fontSize: 12,
                        width: 130,
                        marginTop: 4
                    }}>Très bonne personne, m'a aidé, il a été très efficace</Text>
    

                </View>
            </View>
        );
    }

    return (
        <>
            <HeaderComponent title={I18n.t("account")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>
                <Text style={{
                    fontSize: 35
                }}>{I18n.t("account")}</Text>

                <View style={{
                    marginTop: 15,
                    display: "flex",
                    flexDirection: "column"
                }}>

                    { Dimensions.get('window').height > 695 && 
                        <AccountStats name={name} xp={xp} rate={rate} img={img} />
                    }

                    <View style={{
                        padding: 15,
                        marginTop: 15,
                        borderRadius: 7.5,
                        backgroundColor: '#e1e1e1',
                        height: 75
                    }}>
                        <Text style={{fontSize: 20, marginBottom: 15}}>{I18n.t("accountTrophes")}</Text>
                        
                        <ScrollView>
   
                        </ScrollView>
                    </View>

                    <View style={{
                        padding: 15,
                        marginTop: 15,
                        borderRadius: 7.5,
                        backgroundColor: '#e1e1e1',
                        height: Dimensions.get('window').height > 695 ? 300 : 250
                    }}>
                        <Text style={{fontSize: 20, marginBottom: 15}}>{I18n.t("accountAvis")}</Text>
                        
                        <ScrollView>
                            <AvisProps />
                            <AvisProps />
                            <AvisProps />
                            <AvisProps />
                            <AvisProps />
                            <AvisProps />
                        </ScrollView>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            height: 60, 
                            width: screenWidth,
                            borderRadius: 7.5,
                            marginTop: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#1d1d1d'           
                        }}>
                            <FontAwesomeIcon icon={faHome} size={25} style={{
                                color: '#ffffff',
                                marginRight: 15
                            }}/>

                            <Text style={{
                                fontSize: 25,
                                color: '#ffffff'
                            }}>{I18n.t("acceuil")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

export default AccountScreen;