
import { waitForDebugger } from 'inspector';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { View, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useReduxState } from '../../data/store';

interface IHeader {
    navigation: any;
    map?: boolean;
    title?: string;
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);

    
    return (
        <>
            <View style={ 
                Dimensions.get('window').height > 695 ? {
                    marginTop: 50,
                    paddingTop: 0,
                    padding: 35
                } : {
                    marginTop: 20,
                    paddingTop: 0,
                    padding: 35             
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
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} size={45} style={{color: "#434343", marginRight: 20}} />
                    </TouchableOpacity>

                    <View>   
                        <Text style={{
                            width: Dimensions.get('window').width - 100, 
                            fontSize: 25
                        }}>Menu ?</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default HeaderComponent;
