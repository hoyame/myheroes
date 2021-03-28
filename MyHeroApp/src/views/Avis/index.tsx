import { faCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { API_LINK } from '../../App';
import FondComponent from '../../components/Fond';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import RateComponent from '../../components/Rate';
import { useReduxState } from '../../data/store';
import I18n from '../../i18n/i18n';

const AvisScreen = ({ navigation }) => {
    const screenHeight = Math.round(Dimensions.get('window').height);
    const screenWidth = Math.round(Dimensions.get('window').width - 200);
    const userMail = useReduxState(state => state.user.mail);

    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);

    const sendRate = () => {
        var params = {
            source: userMail,
            description: description,
            rate: rate
        }
    
        fetch(`${API_LINK}/app/add_rate`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
    }

    return (
        <>
            <HeaderComponent title={I18n.t("avis")} navigation={navigation} />

            <FondComponent />
                
            <View style={{
                display: 'flex',
                height: screenHeight,
                marginTop: 60,
                padding: 35,
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginBottom: 30
                }}>MyHeroes</Text>

                <View style={{
                    display: "flex",
                    height: 150,
                    borderRadius: 8,
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                    <Text style={{
                        textAlign: "center",
                        fontSize: 20,
                        width: screenWidth,
                        marginBottom: 10
                    }}>{I18n.t("avisDescApp")}</Text>

                    <View style={{
                        alignItems: "center"
                    }}>
                        <View style={{
                            marginTop: 25,
                        }}>
                            <InputComponent 
                                height={65} 
                                name={description}
                                placeholder={I18n.t("avisRateApp")}
                                value={description} 
                                icon={faFileAlt} 
                                onChange={(v: string) => setDescription(v)} 
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => {
                    sendRate();
                    navigation.navigate("Home");
                }}>
                    <View style={{
                        height: 60, 
                        borderRadius:15,
                        marginTop: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#3497FD'      
                    }}>
                        <Text style={{
                            fontSize: 25,
                            color: "#ffffff",
                        }}>{I18n.t("publier")}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default AvisScreen;