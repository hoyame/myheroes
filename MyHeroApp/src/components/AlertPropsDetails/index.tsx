import React from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { View, Text } from "react-native";
import I18n from "../../i18n/i18n";

interface IAlertInformation {
    level: number;
    sender: string;
    avatar: string;
    distance: string;
}

const AlertInformationProps = (props: IAlertInformation) => {
    let color = "#ffd100";
    let title = "Faible";
    let description = "";

    switch (props.level) {
        case 1: 
            color = "#ffd100" 
            title = "Faible"
            description = "(Perdu, nuisance, autre...)" 
            break;
        case 2: 
            color = "#ff9600" 
            title = "Moyen"
            description = "(En panne, coincé, vol...)" 
            break 
        case 3:
            color = "#d80000" 
            title = "Grave"
            description = "(Accident, agression, malaise...)" 
            break 
        default: break
    }

    return (
        <View style={{
            marginBottom: 15,
            height: 100,
            borderRadius: 15,
            paddingLeft: 25,
            display: "flex",
            flexDirection: 'row',
            justifyContent: "space-between",
            backgroundColor: color
        }}>
            <View style={{
                justifyContent: "center",
            }}>
                <Text style={{
                    fontSize: 25
                }}>{I18n.t("alertT")} {title}</Text>

                <Text style={{
                    color: "#262626",
                    fontSize: 12
                }}>{description}</Text>
            </View>

            <View style={{
                height: 100,
                width: 90,
                borderRadius: 100,
                opacity: 0.60,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FontAwesomeIcon icon={faExclamationCircle} size={50} style={{ color: "#ffffff" }}></FontAwesomeIcon>
            </View>
        </View>
    );
}

export default AlertInformationProps;