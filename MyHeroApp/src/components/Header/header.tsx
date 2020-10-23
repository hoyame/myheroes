
import { waitForDebugger } from 'inspector';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IHeader {
    navigation: any;
    map?: boolean
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const map = props.map || false
    
    interface IStars {
        rate: number
    }

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
        }
    }

    return (
        <View style={{
            //marginTop: 20,
            padding: 35,
        }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenWidth
            }}>
                <TouchableHighlight
                    style={{
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#bebebe"
                    onPress={() => props.navigation.navigate('Nav')}
                >
                
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 65,
                        width: 65,
                        borderRadius: 50,
                        backgroundColor: "#E1E1E1"
                    }}>
                        <FontAwesomeIcon icon={faAlignLeft} size={25} style={{
                            marginTop: 20,
                            justifyContent: "center"
                        }} />
                    </View>
                </TouchableHighlight>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Account')}
                >                

                    <View style={{
                        height: 65,
                        width: 190,
                        display: "flex",
                        flexDirection: "row",
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderBottomStartRadius: 10,
                        backgroundColor: "#DDDDDD",
                    }}>
                        <View style={{
                            height: 65,
                            width: 65,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Image
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 50,
                                }}

                                source={{
                                    uri: 'https://hoyame.fr/e399d871b6455e3f2a7b0acd8add87c9.png',
                                }}
                            />
                        </View>
                                
                        <View style={{
                            display: "flex",
                            justifyContent: "center",

                            marginLeft: 15
                        }}>
                            <Text style={{
                                //color: "#6d9bff",
                                marginBottom: 1,
                                fontSize: 16
                            }}>Hoyame</Text>

                            <Text style={{
                                color: "#778899",
                                marginBottom: 3,
                                fontSize: 11
                            }}>51615 XP</Text>
                                                    
                            <View>
                                {ReturnStars({rate: 5}) }
                            </View>
                        </View>
                        

                    </View>
                </TouchableOpacity>   
            </View>
        </View>

    );
}

export default HeaderComponent;

/*

                    <Image
                        style={{
                            height: 65,
                            width: 65,
                            borderRadius: 50,
                        }}

                        source={{
                            uri: 'https://hoyame.fr/e399d871b6455e3f2a7b0acd8add87c9.png',
                        }}
                    />
*/