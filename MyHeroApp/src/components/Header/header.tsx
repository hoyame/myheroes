
import { waitForDebugger } from 'inspector';
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from "react-native";

interface IHeader {
    navigation: any;
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);

    return (
        <View style={{
            padding: 35
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
                        height: 65,
                        width: 65,
                        borderRadius: 50,
                        backgroundColor: "#E1E1E1"
                    }}>
            
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

            <Text style={{
                marginTop: 35,
                fontSize: 30
            }}>Bonjour Hoyame</Text>
        </View>

    );
}

export default HeaderComponent;