import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from '../../components/Header/header';
import NavbarComponent from '../../components/Navbar/navbar';
import { faExclamationCircle, faUser, faMapSigns, faSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import MapView from 'react-native-maps';


const HomeScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const screenHeight = Math.round(Dimensions.get('window').height / 4);

    interface IAlertProps {
        title?: string;
        color?: string;
        description?: string;
        colorComponent?: string
    }

    const AlertProps = (props: IAlertProps) => {
        const pHeight = (screenHeight - 20)
        const pWidth = (screenWidth / 3 - 10)

        return (
            <TouchableOpacity>
                <View style={{
                    height: pHeight,
                    width: pWidth,
                    marginRight: 5,
                    backgroundColor: props.color,
                    borderRadius: 7.5,
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
                            opacity: 0.20,
                            backgroundColor: props.colorComponent,
                            borderRadius: 50,
                        }}>
                            <FontAwesomeIcon icon={faExclamationCircle} size={40} style={{
                              margin: 7.5
                            }}></FontAwesomeIcon>
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
        logo?: any
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
                    flexDirection: "row"
                }}>
                    <View style={{
                        height: 45, 
                        width: 45,
                        margin: 10,
                        borderRadius: 50,
                        backgroundColor: "red"
                    }}>
                    </View>

                    <Text style={{
                        fontSize: 20,
                        lineHeight: 65,
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

                <AlertComponent title="Gestes de premier secours" />
                <AlertComponent title="Numeros d'urgence" />

                <TouchableOpacity onPress={() => navigation.navigate('Map')}>
                    <View style={{
                        height: 170,
                        marginTop: 10,
                        borderRadius: 10,
                        width: screenWidth,
                        backgroundColor: '#e1e1e1',
                    }}>
                        <MapView
                            showsUserLocation={true}

                            style={{
                                height: 170,
                                width: screenWidth,
                                borderRadius: 10
                            }}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                            >
                        </MapView>
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