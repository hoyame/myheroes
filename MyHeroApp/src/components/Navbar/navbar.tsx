import React from 'react';
import { Dimensions, View } from "react-native";


const NavbarComponent = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <View style={{
            position: 'absolute',
            bottom: 0,

            backgroundColor: "red",
            height: 65,
            width: screenWidth
        }}>


        </View>
    );
}

export default NavbarComponent;