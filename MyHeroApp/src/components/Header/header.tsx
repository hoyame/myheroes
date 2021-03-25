
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
    noMargin?: boolean;
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
                    paddingBottom: props.noMargin ? 0 : 35,
                    padding: 35,
                } : {
                    marginTop: 20,
                    paddingTop: 0,
                    paddingBottom: props.noMargin ? 0 : 35,
                    padding: 35,
                }
            }>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={{alignItems: "center"}}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            height: 40,
                            width: 170,
                            borderRadius: 10,
                            backgroundColor: '#1d1d1d'
                        }}>
                            <Image 
                                source={{uri: "https://cdn.discordapp.com/attachments/622858678760112128/824404521719037972/myhero_1.png"}} 
                                style={{
                                    height: 28,
                                    width: 28,
                                    marginRight: 5
                                }}
                            />

                            <Text style={{
                                fontSize: 20,
                                fontWeight: "700",
                                textAlign: "center",
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
