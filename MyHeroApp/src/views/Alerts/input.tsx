import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react"
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native"


const screenWidth = Math.round(Dimensions.get('window').width - 70);


interface IInput {
    name: string;
    value: any;
    onChange: any;
    placeholder: string;
    icon: any;
    height?: number;
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
            borderColor: 'gray', 
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 15,
            //paddingLeft: 20
        },
    
        ICON: {
            color: "#6d9bff"
        }
    });

    return (
        <>
            <View style={STYLES.INPUT}>
                <View style={{
                    height: 65, 
                    width: 65, 
                    borderRadius: 10, 
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <FontAwesomeIcon icon={props.icon} size={25} style={STYLES.ICON} />
                </View>

                <View style={{
                    marginTop: 10
                    //justifyContent: "center",
                }}>
                    <Text style={{ 
                        marginLeft: 5,
                        marginTop: 3,
                        marginBottom: -8,
                        color: "#6d9bff" 
                        }}>{props.name}</Text>
                    <TextInput
                        style={{
                            fontSize: 20,
                            width: screenWidth - 75
                        }}
                        multiline={true} 
                        //numberOfLines={} 
                        placeholder={props.placeholder}
                        onChangeText={text => props.onChange(text)}
                        value={props.value}
                    />
                </View>
            </View>
        </>
    );
}

export default InputComponent;
