import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const CheckBoxComponent = () => {
    const [state, setState] = useState(true)
 
    return (
        <TouchableOpacity onPress={() => setState(!state)}>
            <View style={{
                height: 30,
                width: 30,
                
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                borderWidth: 1,
                borderColor: '#353A50',
            }}>
                { state &&
                    <View style={{
                        height: 22,
                        width: 22,
                        
                        borderRadius: 50,
                        backgroundColor: "#353A50",
                    }}></ View>
                }
            </ View>
        </TouchableOpacity>
    );
}

export default CheckBoxComponent;