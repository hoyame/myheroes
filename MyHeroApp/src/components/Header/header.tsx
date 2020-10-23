
import { waitForDebugger } from 'inspector';
import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

interface IHeader {
    navigation: any;
    map?: boolean
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const map = props.map || false
    
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

                <TouchableHighlight
                    style={{
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#DDDDDD"
                    onPress={() => props.navigation.navigate('Account')}
                >                
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
                </TouchableHighlight>   
            </View>
        </View>

    );
}

export default HeaderComponent;