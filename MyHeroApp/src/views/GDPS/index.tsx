import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';

const GDPSPage = ({ navigation }) => {
    interface IPropsNav {
        title: string;
        description: string;
        onClick?: any;
        fontAwesome?: any;
    }

    const PropsNav = (props: IPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 70,
                    //width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: '#E1E1E1',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5,
                        borderRadius: 7.5,
                        //backgroundColor: "#434343",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        { props.fontAwesome && 
                            <FontAwesomeIcon icon={props.fontAwesome} size={35} style={{color: "#434343"}} />
                        }
                    </View>

                    <View style={{
                        paddingTop: 10
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#222222"
                        }}>{props.title}</Text>
                        <Text style={{
                            fontSize: 15,
                            color: "#767676"
                        }}>{props.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <>
            <HeaderComponent navigation={navigation} />
        
            <View style={{
                paddingTop: 10,
                padding: 35
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 20
                }}>Gestes de premier secours</Text>

                <PropsNav title="Zd" description="ddd"/>
                <PropsNav title="Zd" description="ddd"/>
                <PropsNav title="Zd" description="ddd"/>
                <PropsNav title="Zd" description="ddd"/>
            </View>
        </> 
    );
}

export default GDPSPage;