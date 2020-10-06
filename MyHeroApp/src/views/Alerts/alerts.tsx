import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';

const AlertScreen = ({ navigation }) => {
    interface IAlertProps {
        alertLevel: number;
        distance: string;
        city: string;
    }

    const AlertProps = (props: IAlertProps) => {
        let color = "#ffd100";
        let levelName = "Faible";

        switch (props.alertLevel) {
            case 1: 
                color = "#ffd100";
                levelName = "Faible";
                break;
            case 2: 
                color = "#ff9600";
                levelName = "Moyenne";
                break;
            case 3:
                color = "#d80000";
                levelName = "Grave";
                break;
        }

        return (
            <TouchableOpacity
                onPress={() => null}
            >
                <View style={{
                    height: 70,
                    //width: 320,
                    backgroundColor: '#e1e1e1',
                    borderRadius: 7.5,
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 7.5
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5, 
                        borderRadius: 50,
                        opacity: 0.60,
                    }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size={35} style={{
                          margin: 10,
                          color: color
                        }}></FontAwesomeIcon>
                    </View>

                    <View style={{
                        backgroundColor: 'transparent',

                    }}>   
                        <Text style={{
                            fontSize: 20,
                            marginTop: 10,
                            marginLeft: 10,
                            color: "#000000"
                        }}>Alerte {levelName}</Text>

                        <Text style={{
                            fontSize: 15,
                            marginTop: 5,
                            marginLeft: 10,
                            color: "#94958B"
                        }}>A {props.distance}km sur {props.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>
                <Text style={{
                    fontSize: 35,
                    marginBottom: 20
                }}>Alertes</Text>

                <ScrollView>
                    <AlertProps alertLevel={3} distance="20" city="Chambery" />
                    <AlertProps alertLevel={2} distance="0.25" city="Aix-Les-Bains" />
                    <AlertProps alertLevel={2} distance="0.10" city="Gresy-sur-aix" />
                    <AlertProps alertLevel={3} distance="80" city="Lyon" />
                    <AlertProps alertLevel={1} distance="0.05" city="Drumettaz-Clarafond" />
                    <AlertProps alertLevel={3} distance="20" city="Chambery" />
                    <AlertProps alertLevel={2} distance="0.25" city="Aix-Les-Bains" />
                    <AlertProps alertLevel={2} distance="0.10" city="Gresy-sur-aix" />
                    <AlertProps alertLevel={3} distance="80" city="Lyon" />
                    <AlertProps alertLevel={1} distance="0.05" city="Drumettaz-Clarafond" />
                </ScrollView>
            </View>
        </>
    );
}

export default AlertScreen;