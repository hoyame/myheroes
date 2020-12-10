import React, { useState } from 'react';
import { Image } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MyHeroAlerts, { AlertsDataUsers } from '../../api/Alerts';
import Users from '../../api/User';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import { useReduxState } from '../../data/store';
import I18n from '../../i18n/i18n';


const EndAlertScreen = ({ navigation }) => {
    const mailSource = useReduxState(state => state.user.mail);

    const [s, SS] = useState(false);
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0)
    const [data, setData] = useState(["Karim", "Acemoy", "Acemoy", "Acemoy", "Acemoy", "Acemoy", "Acemoy", "Acemoy"])
    const [cache, setCache] = useState("");

    
    setTimeout(() => {
        if (AlertsDataUsers !== []) {
            setData(AlertsDataUsers);
        }
    }, 10000)

    const returnUsers = () => {
        return data.map((v, k) => {
            return (
                <TouchableOpacity onPress={() => {
                    setCache(v)
                    SS(true)
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 80,
                        backgroundColor: "#ffffff",
                        borderRadius: 15,
                        marginBottom: 10,
                        alignItems: "center",
                        padding: 10
                    }}>
                        <View style={{
                            borderRadius: 15,
                            marginRight: 15, 
                            height: 60,
                            width: 60,
                        }}>
                            <Image
                                key={Date.now()} 

                                style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 50,
                                }}  
                                source={{
                                    uri: `http://146.59.227.90:3000/api/avatar/${v}?time=${new Date()}`,
                                }}
                            />
                        </View>

                        <Text style={{
                            fontSize: 25
                        }}>{v}</Text>

                    </View>
                </TouchableOpacity>
            );
        })
    }

    if (s == true) {
        return (
            <>
                <HeaderComponent title={I18n.t("alertMy")} navigation={navigation} />
    
                <View style={{
                    padding: 35,
                    paddingTop: 0
                }}>
                    <View style={{
                        height: 60,
                        marginBottom: 15,
                        borderRadius: 15,
                        padding: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#0077be"
                    }}>
                        <Text style={{
                            width: 250,
                            textAlign: "center",
                            color: "#fff",
                            fontSize: 15      
                        }}>{I18n.t("alertThanks")}</Text>
                    </View>
    
                    <View>
                        <RateComponent 
                            title={I18n.t("alertAvisHero")} 
                            placeholder={I18n.t("alertDescHero")} 
                            onClick={() => {
                                Users.AddRate(mailSource, cache, description, rate, () => {
                                    navigation.navigation("Home")
                                })
                            }} 
                            rate={rate}
                            setRate={setRate}
                            description={description}
                            setDescription={setDescription}
                        />
                    </View>
                </View>
            </>
        );  
    }

    return (
        <>
            <HeaderComponent title={I18n.t("alertMy")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0,
                marginBottom: 180,

            }}>
                <ScrollView>
                    <Text style={{
                        marginBottom: 30,
                        fontSize: 25
                    }}>
                        Personnes qui ont pris l'alerte
                    </Text>

                    {returnUsers()}
                </ScrollView>
            </View>
        </>
    );
}

export default EndAlertScreen;