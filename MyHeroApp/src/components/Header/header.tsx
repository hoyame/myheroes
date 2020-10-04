
import { waitForDebugger } from 'inspector';
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from "react-native";

const HeaderComponent = () => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);

    return (
        <View style={{
            padding: 35
        }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                //marginTop: 35,
                //marginLeft: 35,
                //marginRight: 35,
                width: screenWidth
            }}>
                <TouchableHighlight
                    style={{
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#898989"
                    onPress={() => null}
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
                    onPress={() => null}
                >                
                    <Image
                        style={{
                            height: 65,
                            width: 65,
                            borderRadius: 50,
                            //backgroundColor: "red"
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