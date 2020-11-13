import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import { Langues } from '../../data/langues';
import I18n from '../../i18n/i18n';

const GeneralScreen = ({ navigation }) => {
    const [languageS, setLanguageS] = useState(false);

    
    const returnLangues = () => {
        return Langues.map((v, k) => {
            return (
                <TouchableOpacity key={k}>
                    <View style={{
                        display: 'flex',
                        flexDirection: "row",
                        height: 80,
                        backgroundColor: '#e1e1e1',
                        marginBottom: 10,
                        borderRadius: 7.5,
                        alignItems: "center",
                    }}>
                        <View style={{
                            marginLeft: 10,
                            height: 80,
                            width: 80,
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            <Image source={{uri: v.img}} style={{
                                height: 30,
                                width: 40,
                                marginRight: 10
                            }} />    
                        </View> 

                        <Text style={{fontSize: 25}}>{v.name}</Text>  
                    </View>
                </TouchableOpacity>
            );
        })
      }

    if (languageS == true) {
        return (
            <>
                <HeaderComponent title={I18n.t("settingsLanguage")} navigation={navigation} />

                <ScrollView>
                    <View style={{
                        paddingLeft: 35,
                        paddingRight: 35
                    }}>
                        {returnLangues()}
                    </View>
                </ScrollView>
            </>
        );
    }
    
    return (
        <>
            <HeaderComponent title={I18n.t("acceuil")} navigation={navigation} />

            <View style={{ paddingLeft: 35, paddingRight: 35}}>

            <TouchableOpacity onPress={() => setLanguageS(true)}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 21,
                            color: '#000000'
                        }}>{I18n.t("settingsLanguage")}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default GeneralScreen;