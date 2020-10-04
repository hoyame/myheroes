import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import HeaderComponent from 'src/components/Header/header';
import NavbarComponent from 'src/components/Navbar/navbar';

//import Exclamation from '../../assets/exclamation-circle-solid.svg'

const HomeScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const screenHeight = Math.round(Dimensions.get('window').height - 260);

    interface IAlertProps {
        title?: string;
        color?: string;
        colorComponent?: string
    }

    const AlertProps = (props: IAlertProps) => {
        const pHeight = (screenHeight / 3 - 13)
        const pWidth = (screenWidth - 20)

        return (
            <TouchableOpacity>
                <View style={{
                    height: pHeight,
                    width: pWidth,
                    marginBottom: 10,
                    backgroundColor: props.color,
                    borderRadius: 7.5,
                    padding: 15
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: "row"
                    }}>
                        <View style={{
                            height: 55,
                            width: 55,
                            opacity: 0.20,
                            backgroundColor: props.colorComponent,
                            borderRadius: 50,
                        }}>

                        </View>

                        <Text style={{
                            opacity: 0.40,
                            color: "#000000",       
                            marginTop: 9,
                            marginLeft: 12,
                            fontSize: 30
                        }}>{props.title}</Text>
                    </View>

                    <Text style={{
                        marginTop: 10,
                        fontSize: 15,
                        color: "#000000",       
                        opacity: 0.60,
                    }}>
                        Ceci est une description de ce button, un example du type de danger etc.
                    </Text>
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
                    padding: 10
                }}>
                    <AlertProps title="Grave" color="#d80000" colorComponent="#860258" />
                    <AlertProps title="Moyen" color="#ff9600" colorComponent="#860258" />
                    <AlertProps title="Faible" color="#ffd100" colorComponent="#860258" />

                </View>
            </View>

        </>
    );
}

export default HomeScreen;