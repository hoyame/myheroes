import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, Alert, RefreshControl } from 'react-native';
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
import MyHeroAlerts from '../../api/Alerts';
import { createDispatchHook, useDispatch } from 'react-redux';
import { setNewsContent, setNewsStatus } from '../../data/actions/user';

const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const GeneralScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const mail = useReduxState(state => state.user.mail);
    const name = useReduxState(state => state.user.name);
    const rate = useReduxState(state => state.user.rate);
    const newsStatus = useReduxState(state => state.user.statusNews);
    const newsContent = useReduxState(state => state.user.news);
    const latitude = useReduxState(state => state.location.latitude);
    const longitude = useReduxState(state => state.location.longitude);

    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");

    console.log("newsStatus", newsStatus)
    console.log("newsContent", newsContent)

    let allMess = InformationsH24;

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
        MyHeroAlerts.getCityGE(latitude, longitude, (e: any) => null, (e: any) => {
            MyHeroAlerts.getCityGE(latitude, longitude, (es: any) => {
                var params = {
                identifier: mail,
                name: name,
                rate: rate,
                description: description,
                latitude: latitude, 
                longitude: longitude,
                city: es,
                departement: e 
            }
                
            console.log("ccccccc city", es)
            console.log("ccccccc departement", e)
        
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
                    console.log("listtt", data.data);
                    dispatch(setNewsStatus(true))
                    dispatch(setNewsContent(description))
                })
            }, (e: any) => null)
        })
    }

    const deleteNews = () => {
        var params = {
            identifier: mail
        }
        
        fetch(`${API_LINK}/list/deleteApprovate`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })

            .then((res) => res.json)

            .then((data: any) => {
    
            });

            //

            fetch(`${API_LINK}/list/delete`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            })
    
                .then((res) => res.json)
    
                .then((data: any) => {
                
                });
    }



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        Users.GetMessagesH24(0,0, (e: boolean) => {
            if (e == true) {
                allMess = InformationsH24;
                
                setTimeout(() => {
                    setRefreshing(false)
                }, 2000)
            } else {
                setRefreshing(true)
            }
        })
    }, []);

    const [refreshing, setRefreshing] = React.useState(false);


    return (
        <>
            <HeaderComponent title="News 24H" navigation={navigation} />

            <ScrollView
                    refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}
                    />
                }
            >

                <View style={{ paddingLeft: 35, paddingRight: 35, marginBottom: 35}}>
                    {
                        newsStatus && 

                        <>
                            <View style={{

                            }}>
                                <BottomComponent color="#d80000" title={I18n.t("newsDelete")} onClick={() => {
                                    deleteNews();
                                    dispatch(setNewsStatus(false))
                                    dispatch(setNewsContent(""))
                                    Alert.alert(I18n.t("newsDeleteT"));
                                    navigation.navigate("Home")
                                   
                                }}/> 
                            </View>
                        </>
                    }

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
                        }}>{I18n.t("general1")}</Text>
                    </View>

                    <View style={{
                        marginTop: 5,
                        marginBottom: 20
                    }}>
                        <InputComponent height={65} name={I18n.t("general2")} placeholder={I18n.t("general2") + "                                                  "} value={description} icon={faFileAlt} onChange={(v: string) => setDescription(v)} />

                        <BottomComponent title={I18n.t("general3")} onClick={() => {
                            push();
                            Alert.alert(I18n.t("newsSucceful"));
                            navigation.navigate("Home")
                            setTimeout(() => {
                                Users.GetMessagesH24(1, 1, (c: any) => {});
                            }, 5000)
                        }}/> 
                    </View>

                    {
                        returnAvis()
                    }
                </View>
            </ScrollView>
        </>
    );
}

export default GeneralScreen;