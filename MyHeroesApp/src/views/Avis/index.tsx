import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { API_LINK } from '../../App';
import FondComponent from '../../components/Fond';
import HeaderComponent from '../../components/Header/header';
import RateComponent from '../../components/Rate';
import { useReduxState } from '../../data/store';
import I18n from '../../i18n/i18n';

const AvisScreen = ({ navigation }) => {
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
                padding: 35
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    marginBottom: 10
                }}>MyHeroes</Text>

                <RateComponent 
                    title={I18n.t("avisRateApp")} 
                    placeholder={I18n.t("avisDescApp")} 
                    onClick={() => {
                        sendRate();
                        navigation.navigate("Home");
                    }} 
                    rate={rate}
                    setRate={setRate}
                    description={description}
                    setDescription={setDescription}
                />
            </View>
        </>
    );
}

export default AvisScreen;