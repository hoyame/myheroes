import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from "react-native";


const AccountStats = () => {
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
        <>
            <View style={{
                padding: 20,
                display: "flex",
                flexDirection: "row",
                width: screenWidth,
                height: 120,
                borderRadius: 10,
                backgroundColor: "#e1e1e1"
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
                        
                        borderRadius: 50,
                        borderColor: "#6d9bff",
                        borderWidth: 5,

                        justifyContent: "center"
                    }}>
                        <Text style={{
                            color: "#6d9bff",
                            textAlign: "center",
                            fontSize: 38
                        }}>20</Text>
                    </View>
                </View>

                <View>
                    <Text style={{
                        //color: "#6d9bff",
                        marginBottom: 2,
                        fontSize: 20
                    }}>Hoyame</Text>

                    <Text style={{
                        color: "#778899",
                        marginBottom: 5,
                        fontSize: 12
                    }}>
                        1651651 XP
                    </Text>

                    <View>
                        {ReturnStars({rate: 1}) }
                    </View>
                </View>
            </View>
        </>  
    );
}

export default AccountStats;