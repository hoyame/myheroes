
import { waitForDebugger } from 'inspector';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { View, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft, faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useReduxState } from '../../data/store';

interface IHeader {
    navigation: any;
    map?: boolean;
    title?: string;
    redirect?: string;
    onBackClick?: any;
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const navCache = useReduxState(state => state.user.navCache) || 'Nav';
    const navClick = props.redirect || navCache;
    console.log(navClick);
    
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
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={{alignItems: "center"}}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 25,
                            justifyContent: "center",
                            height: 40,
                            width: 150,
                            borderRadius: 10,
                            backgroundColor: '#1d1d1d'
                        }}>
                            <FontAwesomeIcon icon={faHome} size={20} style={{
                                marginRight: 8,
                                color: "#ffffff"
                            }} />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: "700",
                                color: '#ffffff'
                            }}>MyHeroes</Text>
                        </View>
                    </View>
                </TouchableOpacity>


                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <TouchableOpacity onPress={() => { 
                        props.navigation.navigate(navClick);
                        { props.onBackClick && 
                            props.onBackClick();
                        }
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} size={28} style={{color: "#434343", marginRight: 20}} />
                    </TouchableOpacity>

                    <View>   
                        <Text style={{
                            width: Dimensions.get('window').width - 100, 
                            fontSize: 35,
                            color: "#434343"
                        }}>{props.title}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

export default HeaderComponent;
