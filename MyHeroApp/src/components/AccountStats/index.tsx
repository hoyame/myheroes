import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

interface IAccount {
    name: string;
    xp: string | number;
    rate: number;
    img: string
}

const AccountStats = (props: IAccount) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);

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
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={25} style={{color: color}} />
                    </View>
                );
        }
    }

    return (
        <TouchableOpacity>
            <View style={{
                padding: 15,
                display: "flex",
                flexDirection: "row",
                width: screenWidth,
                height: 110,
                borderRadius: 15,
                backgroundColor: '#353A50'
            }}>
                <View style={{
                    height: 80,
                    marginRight: 15,
                    width: 80,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <View style={{
                        height: 80,
                        width: 80,
                        
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image
                            style={{
                                height: 80,
                                width: 80,
                                borderRadius: 10,
                            }}
                        
                            source={{
                                uri: props.img,
                            }}
                        />
                    </View>
                </View>

                <View>
                    <Text style={{
                        color: "#ffffff",
                        marginBottom: 2,
                        fontSize: 20
                    }}>{props.name}</Text>

                    <Text style={{
                        color: "#778899",
                        marginBottom: 5,
                        fontSize: 12
                    }}>
                        {props.xp} XP
                    </Text>

                    <View>
                        {ReturnStars({rate: props.rate}) }
                    </View>
                </View>
            </View>
        </TouchableOpacity>  
    );
}

export default AccountStats;