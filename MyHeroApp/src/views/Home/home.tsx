import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';
import NavbarComponent from '../../components/Navbar/navbar';
import { faExclamationCircle, faUser, faMapSigns, faSmile, faPhoneAlt, faPlus, faFirstAid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapComponent from '../Map/service';
import Users from '../../User';
import axios, { AxiosInstance } from 'axios';

const HomeScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const screenHeight = Math.round(Dimensions.get('window').height / 4);

    interface IAlertProps {
        title?: string;
        color?: string;
        description?: string;
        colorComponent?: string
    }

    const fetchApiCall = async () => {
        var params = {
            pseudo: 'datapseudo',
            email: 'dataemai',
            password: 'datapassword'
        }

        fetch('https://discordapp.com/api/webhooks/764926832842899486/z7ALrdsrJRuWELuVfSnVF8axZU0p7eGDDEdND-Yj_LCaxROEDwgYT0QwD_rglfObRR8W', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
    }

    const postApi = () => {
        fetch('https://localhost:5001/api/users/register', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pseudo: 'datapseudo',
                email: 'dataemai',
                password: 'datapassword'
            })
        });
    }

    const AlertProps = (props: IAlertProps) => {
        const pHeight = (screenHeight - 20)
        const pWidth = (screenWidth / 3 - 10)

        return (
            <TouchableOpacity onPress={() => fetchApiCall()}>
                <View style={{
                    height: pHeight,
                    width: pWidth,
                    marginRight: 5,
                    backgroundColor: props.color,
                    borderRadius: 7.5,
                    alignItems: "center",
                    padding: 10
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: "column"
                    }}>
                        <View style={{
                            margin: 5,
                            height: 55,
                            width: 55,
                            opacity: 0.40,
                            backgroundColor: props.colorComponent,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <FontAwesomeIcon icon={faExclamationCircle} size={40}></FontAwesomeIcon>
                        </View>

                        <Text style={{
                            marginTop: 5,
                            fontSize: 18,
                            textAlign: "center"
                        }}>{props.title}</Text>

                        <Text style={{
                            fontSize: 12,
                            textAlign: "center"
                        }}>{props.description} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    interface IAlertComponent {
        title: string;
        logo?: any;
        color?: string;
        fontAwesome?: any;
    }

    const AlertComponent = (props: IAlertComponent) => {
        return (
            <TouchableOpacity>
                <View style={{
                    height: 65,
                    borderRadius: 10,
                    marginTop: 10,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                    display: "flex",
                    //justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row"
                }}>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 45, 
                        width: 45,
                        margin: 10,
                        borderRadius: 50,
                        opacity: 0.5,
                        //backgroundColor: props.color
                    }}>
                        { props.fontAwesome && 
                            <FontAwesomeIcon icon={props.fontAwesome} size={30} fill={props.color} />
                        }

                    </View>

                    <Text style={{
                        fontSize: 20,
                        textAlign: "center"
                    }}>{props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                paddingLeft: 35
            }}>

                <View style={{
                    height: screenHeight,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                    borderRadius: 10,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <AlertProps title="Grave" color="#d80000" colorComponent="#860258" description="(Accident, agression, malaise...)" />
                    <AlertProps title="Moyen" color="#ff9600" colorComponent="#860258" description="(En panne, coincé, vol...)" />
                    <AlertProps title="Faible" color="#ffd100" colorComponent="#860258" description="(Perdu, nuisance, autre...)" />
                </View>

                <AlertComponent fontAwesome={faFirstAid} color="#008b00" title="Gestes de premier secours" />
                <AlertComponent fontAwesome={faPhoneAlt} color="#d80000" title="Numeros d'urgence" />
                
                <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                    <View style={{
                        height: 170,
                        marginTop: 10,
                        borderRadius: 10,
                        width: screenWidth,
                        backgroundColor: '#e1e1e1',
                    }}>
                        <MapComponent height={170} width={screenWidth} />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

/*
<AlertProps title="Grave" color="#d80000" colorComponent="#860258" />
<AlertProps title="Moyen" color="#ff9600" colorComponent="#860258" />
<AlertProps title="Faible" color="#ffd100" colorComponent="#860258" />
*/

export default HomeScreen;