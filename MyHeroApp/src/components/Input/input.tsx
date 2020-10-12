import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react"
import { StyleSheet, View, Text, Dimensions, TextInput } from "react-native"


const screenWidth = Math.round(Dimensions.get('window').width - 70);

const STYLES = StyleSheet.create({
    ROW: {
      display: "flex",
      flexDirection: "row"
    },

    INPUT: {
        display: "flex",
        flexDirection: "row",
        height: 65, 
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


interface IInput {
    name: string;
    value: any;
    onChange: any;
    placeholder: string;
    icon: any;
}


const InputComponent = (props: IInput) => {
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
                    justifyContent: "center",
                }}>
                    <Text style={{ color: "#6d9bff" }}>{props.name}</Text>
    
                    <TextInput
                        style={{
                            fontSize: 20
                        }}
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

/*
setState({...state, name: text})

                <Text style={{
                        fontSize: 20
                    }}>eefgniuegib@gmzf.com</Text>

<TextInput
    style={STYLES.INPUT}
    placeholder="Pseudo"
    onChangeText={text => setState({...state, name: text})}
    value={state.name}
/>

*/