import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from '../../components/Header/header';

const GDPSPage = ({ navigation }) => {
    interface IPropsNav {
        title: string;
        description?: string;
        onClick?: any;
        fontAwesome?: any;
    }

    const PropsNav = (props: IPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 60,
                    //width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: '#E1E1E1',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center"
                }}>
                    <View style={{
                        paddingLeft: 15,
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#222222"
                        }}>{props.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <>
            <View style={ 
                Dimensions.get('window').height > 695 ? {
                    marginTop: 50,
                    display: "flex", 
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 0,
                } : {
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 0   
                }
            }>
                <View style={{alignItems: "center"}}>
                    <View style={{
                        marginBottom: 25,
                        justifyContent: "center",
                        height: 40,
                        width: 120,
                        borderRadius: 10,
                        backgroundColor: '#1d1d1d'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "700",
                            textAlign: "center",
                            color: '#ffffff'
                        }}>MyHeroes</Text>
                    </View>

                </View>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} size={45} style={{color: "#434343", marginRight: 20}} />
                    </TouchableOpacity>

                    <View>   
                        <Text style={{
                            fontSize: 25
                        }}>Gestes de premier secours</Text>
                    </View>
                </View>
            </View>
            <View style={{
                padding: 35
            }}>
                <ScrollView>
                    <PropsNav title="Inconscience" />
                    <PropsNav title="La position laterale de securité" />
                    <PropsNav title="Le massage cardiaque" />
                    <PropsNav title="Le défibrilateur automatisé" />
                    <PropsNav title="Ettouffement adulte" />
                    <PropsNav title="Ettouffement nourisson" />
                    <PropsNav title="Saignement abondant" />
                    <PropsNav title="Les brulures" />
                    <PropsNav title="Traumatisme des os" />
                    <PropsNav title="Noyade" />
                    <PropsNav title="Le malaise" />
                </ScrollView>
            </View>
        </> 
    );
}

export default GDPSPage;