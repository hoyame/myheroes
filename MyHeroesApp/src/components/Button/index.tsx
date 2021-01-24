import { faAngleRight, faBaby } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


interface IButton {
    checkbox?: boolean;
    title: string;
    color: string;
    icon: any;
    onClick: any
}

const ButtonComponent = (props: IButton) => {
    return (
        <>
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 60,
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingLeft: 7.5,
                    marginBottom: 5,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row", 
                        alignItems: "center",
                    }}>

                        <View style={{
                            backgroundColor: props.color,
                            alignItems: "center",
                            justifyContent: "center",
                            height: 40,
                            width: 40,
                            marginRight: 13,
                            borderRadius: 10,
                        }}>
                            <FontAwesomeIcon icon={props.icon} size={25} style={{color: "#ffffff"}} />
                        </View>

                        <Text style={{
                            fontSize: 18
                        }}>
                            {props.title}
                        </Text>
                    </View>

                    <View style={{
                        height: 20,
                        width: 20,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <FontAwesomeIcon icon={faAngleRight} size={25} style={{color: "#454F63"}} />
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}


export default ButtonComponent;