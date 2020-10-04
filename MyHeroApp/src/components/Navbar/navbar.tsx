import React from 'react';
import { Dimensions, TouchableOpacity, View } from "react-native";


const NavbarComponent = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: "#E1E1E1",
            width: screenWidth,
            height: 65,
            bottom: 0,
            display: "flex",
            flexDirection: "row"
        }}>

            <TouchableOpacity onPress={() => null}>
                <View style={{
                    height: 60,
                    width: 60,
                    marginLeft: 10,
                    backgroundColor: "red"
                }}>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => null}>
                <View style={{
                    height: 60,
                    width: 60,
                    marginLeft: 10,
                    backgroundColor: "red"
                }}>

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => null}>
                <View style={{
                    height: 60,
                    width: 60,
                    marginLeft: 10,
                    backgroundColor: "red"
                }}>

                </View>
            </TouchableOpacity>
            
        </View>
    );
}

export default NavbarComponent;