import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";

interface IAlertInformation {
    level: number;
    sender: string;
    avatar: string;
    distance: string;
}

const AlertInformationProps = (props: IAlertInformation) => {
    let color = "#ffd100";
    let title = "Faible";

    switch (props.level) {
        case 1: 
            color = "#ffd100" 
            title = "Faible"
            break;
        case 2: 
            color = "#ff9600" 
            title = "Moyen"
            break 
        case 3:
            color = "#d80000" 
            title = "Grave"
            break 
        default: break
    }

    return (
        <View style={{
            height: 90,
            marginBottom: 10,
            borderRadius: 8,
            display: "flex",
            flexDirection: 'row',
            backgroundColor: color
        }}>
            <View style={{
                height: 90,
                width: 90,
                borderRadius: 100,
                opacity: 0.40,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FontAwesomeIcon icon={faExclamationCircle} size={55}></FontAwesomeIcon>
            </View>

            <View style={{
                justifyContent: "center",
            }}>
                <Text style={{
                    fontSize: 25
                }}>{title}</Text>

                <Text style={{
                    color: "#262626",
                    fontSize: 15
                }}>De Hoyame</Text>
            </View>
        </View>
    );
}

export default AlertInformationProps;