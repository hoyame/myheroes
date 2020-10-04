import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from 'src/components/Header/header';
import NavbarComponent from 'src/components/Navbar/navbar';

//import Exclamation from '../../assets/exclamation-circle-solid.svg'

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
                    <AlertProps title="Grave" color="#d80000" colorComponent="#860258" description="(Accident, harcelement, vol...)" />
                    <AlertProps title="Moyen" color="#ff9600" colorComponent="#860258" description="(En panne, coincé, " />
                    <AlertProps title="Faible" color="#ffd100" colorComponent="#860258" description="(Perdu, " />
                </View>

                <AlertComponent title="Gestes de premier secours" />
                <AlertComponent title="Numeros d'urgence" />

                <View style={{
                    height: 170,
                    marginTop: 10,
                    borderRadius: 10,
                    width: screenWidth,
                    backgroundColor: '#e1e1e1',
                }}>

                </View>
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