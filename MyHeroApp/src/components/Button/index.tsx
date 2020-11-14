import { faAngleRight, faBaby } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-paper';


interface IButton {
    checkbox: boolean;
    title: string;
    color: string;
    icon: any;
}

const ButtonComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row",
                height: 60,
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 7.5,
                marginBottom: 5,
                backgroundColor: "yellow"
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row", 
                    alignItems: "center",
                }}>

                    <View style={{
                        backgroundColor: "#E63B25",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 40,
                        width: 40,
                        marginRight: 13,
                        borderRadius: 10,
                    }}>
                        <FontAwesomeIcon icon={faBaby} size={25} style={{color: "#ffffff"}} />
                    </View>

                    <Text style={{
                        fontSize: 18
                    }}>
                        Dark mode
                    </Text>
                </View>

                <View style={{
                    height: 40,
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
            </View>
        </>
    );
}

/* 
                    <FontAwesomeIcon icon={faAngleRight} size={25} style={{color: "#454F63"}} />
*/

export default ButtonComponent;