import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react"
import { StyleSheet, View, Text, Dimensions, TextInput, Platform } from "react-native"

const screenWidth = Math.round(Dimensions.get('window').width - 70);


interface IInput {
    name: string;
    value: any;
    onChange: any;
    placeholder: string;
    icon: any;
    height?: number;
    password?: boolean;
}

const InputComponent = (props: IInput) => {
    const height = props.height || 65

    const STYLES = StyleSheet.create({
        ROW: {
          display: "flex",
          flexDirection: "row"
        },
    
        INPUT: {
            display: "flex",
            flexDirection: "row",
            height: height, 
            width: screenWidth,
            backgroundColor: "white",
            borderRadius:15,
            padding:10,
            elevation:10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5, 
            marginBottom: 15
        },
    
        ICON: {
            color: "#3497FD"
        }
    });

    return (
        <>
            <View style={STYLES.INPUT}>
                <TextInput
                    style={{
                        fontSize: 17.5
                    }}
                    placeholder={props.placeholder}
                    placeholderTextColor="#2C2C2C"
                    onChangeText={text => props.onChange(text)}
                    value={props.value}
                    secureTextEntry={props.password == true ? true : false }
                />
            </View>
        </>
    );
}

export default InputComponent;
