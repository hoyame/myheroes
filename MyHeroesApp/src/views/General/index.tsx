import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import { Langues } from '../../data/langues';
import I18n from '../../i18n/i18n';

import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import InputComponent from '../../components/Input/input';
import BottomComponent from '../../components/Bottom';
import { useReduxState } from '../../data/store';
import { API_LINK } from '../../App';
import axios from 'axios';
import Users, { InformationsH24 } from '../../api/User';


const GeneralScreen = ({ navigation }) => {
    const name = useReduxState(state => state.user.name);
    const rate = useReduxState(state => state.user.rate);

    const latitude = useReduxState(state => state.location.latitude);
    const longitude = useReduxState(state => state.location.longitude);

    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");

    const allMess = InformationsH24;

    interface IMessage {
        name?: string;
        rate?: number;
        description?: string;
        latitude?: number;
        longitude?: number;
    }
    
    interface IStars {
        rate: number;
        size?: number;
    }

    const returnAvis = () => {
        console.log(allMess)

        return allMess.map((v, k) => (
            <MessageProps key={k} {...v} />
        ))
    }

    if (loading) {
        return (
            <>
                <p>wfionwf</p>
            </>
        );
    }

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

    const MessageProps = (props: IMessage) => {
        return (
            <View style={{
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
                                uri: `http://146.59.227.90:3000/api/avatar/${props.name}?time=${new Date()}`,
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
                        }}>{props.name}</Text>
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

    const push = () => {
        var params = {
            name: name,
            rate: rate,
            description: description,
            latitude: latitude, 
            longitude: longitude
        }
    
        fetch(`${API_LINK}/list/add`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })

            .then((res) => res.json)

            .then((data: any) => {
                console.log("listtt", data.data)
            })
    }

    return (
        <>
            <HeaderComponent title="News 24H" navigation={navigation} />

        <ScrollView>

            <View style={{ paddingLeft: 35, paddingRight: 35, marginBottom: 35}}>
                <View style={{
                    height: 60,
                    marginTop: 15,
                    marginBottom: 15,
                    borderRadius: 15,
                    padding: 10, 
                    justifyContent: "center",
                    backgroundColor: "#FC9A21"
                }}>
                    <Text style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: 15      
                    }}>Vous retrouverez ci-dessous les information autour de votre localisation actuelle.</Text>
                </View>

                {
                    returnAvis()
                }
            
                <View style={{
                    marginTop: 20
                }}>
                    <InputComponent height={65} name={"description"} placeholder={"Information"} value={description} icon={faFileAlt} onChange={(v: string) => setDescription(v)} />

                    <BottomComponent title={"Publier"} onClick={() => {
                        push();
                        setTimeout(() => {
                            Users.GetMessagesH24(1, 1);
                        }, 5000)
                    }}/> 
                </View>
            </View>
                    </ScrollView>
        </>
    );
}

export default GeneralScreen;