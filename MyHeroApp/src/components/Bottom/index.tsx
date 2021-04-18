import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

interface IBottom {
    title: string;
    onClick: any;
    color?: string; 
}

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const BottomComponent = (props: IBottom) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
            <View style={{
                    height: 60, 
                    width: screenWidth,
                    borderRadius:15,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: props.color || '#3497FD'
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: "#ffffff",
                    }}>{props.title}</Text>
                </View>
        </TouchableOpacity>
    );
}

export default BottomComponent;