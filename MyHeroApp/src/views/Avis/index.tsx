import { faCircle, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
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
                flexDirection: 'column',
                alignItems: 'center',
                height: screenHeight,
                marginTop: 60,
                padding: 35,
            }}>

                <Image 
                    source={{uri: "https://cdn.discordapp.com/attachments/650778484523794456/789992516505305098/Sans_titre_-_1.jpg"}} 
                    style={{
                        height: 105,
                        width: 115,
                        marginBottom: 20,
                        borderRadius: 10
                    }}
                />
                
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginBottom: 10
                }}>MyHeroes</Text>

                
                <View style={{
                    display: "flex",
                    height: 150,
                    borderRadius: 8,
                    alignItems: 'center',
                    marginBottom: 10
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
                        width: 180,
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