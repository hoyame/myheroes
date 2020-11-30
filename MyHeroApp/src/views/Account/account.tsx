import { faBaby, faBed, faBiking, faBlind, faBold, faCut, faHome } from '@fortawesome/free-solid-svg-icons';
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
        rate: number;
        size?: number;
    }

    interface IAvis {
        user?: string;
        rate: number;
        description?: string;
    }

    const AvisData: IAvis[] = [
        { user: "Karim", rate: 2, description: "Bonne personne, avec des mauvaises intentions" },
        { user: "Hozqle", rate: 4, description: "wfjib wifbwfibwfiuwb" },
        { user: "Hozqle", rate: 4, description: "wfjib wifbwfibwfiuwb" },
    ]

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"
        const size = props.size || 20

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
        }
    }

    const AvisProps = (props: IAvis) => {
        return (
            <View style={{
                height: 150,
                width: screenWidth,
                marginBottom: 10,
                borderRadius: 15,
                padding: 13,
                backgroundColor: '#353A50'
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image
                            key={Date.now()} 

                            style={{
                                height: 45,
                                width: 45,
                                borderRadius: 50,
                            }}
                        
                            source={{
                                uri: `http://146.59.227.90:3000/api/avatar/${props.user}?time=${new Date()}`,
                            }}
                        />
                    </View>

                    <View style={{
                        paddingTop: 3,
                        paddingLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: 3,
                            color: "white"
                        }}>{props.user}</Text>

                        <ReturnStars size={15} rate={props.rate} />
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 12,
                        width: screenWidth - 20,
                        marginTop: 4,
                        color: "rgba(255, 255, 255, 0.75)"
                    }}>{props.description}</Text>
                </View>
            </View>
        );
    }

    const returnAvis = () => {
        return AvisData.map((v, k) => (
            <AvisProps key={k} {...v} />
        ))
    }


    return (
        <>
            <HeaderComponent title='' navigation={navigation} />

            <View style={{
                marginTop: -30,
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>
                <ScrollView>

                <View style={{
                    alignItems: 'center',
                }}>
                    <Image
                        key={Date.now()} 
                        
                        style={{
                            height: 110,
                            width: 110,
                            borderRadius: 15,
                            marginBottom: 12.5,
                        }}

                        source={{
                            uri: img,
                        }}
                    />

                    <Text style={{
                        fontSize: 25,
                        color: "#454F63"
                    }}>{name}</Text>

                    <Text style={{
                        fontSize: 17.5,
                        marginBottom: 12.5,
                        color: "#454F63"
                    }}>Sevran, FR</Text>

                    <ReturnStars rate={rate} />

                    <View style={{
                        height: 60,
                        borderRadius: 15,
                        marginBottom: 12.5,
                        marginTop: 12.5,
                        width: screenWidth,
                        backgroundColor: "#ffffff",
                        alignItems: 'center',
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: 'row'
                    }}>
                        <FontAwesomeIcon icon={faBold} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faBiking} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faBaby} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faBed} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faBlind} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faCut} size={25} style={{color: "#FC9A21", marginRight: 7.5}} />
                    </View>

                    {returnAvis()}

                </View>
                    </ScrollView>

            </View>
        </>
    );
}

export default AccountScreen;