import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import ButtonComponent from '../../components/Button';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';


const GDPSPage = ({ navigation }) => {
    const [state, setState] = useState(false);
    const [page, setPage] = useState(1);

    interface IPropsNav {
        title: string;
        description?: string;
        onClick?: any;
        fontAwesome?: any;
    }

    if (state == true) {
        switch (page) {
            case 1: // malaises
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps1")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/malaises.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );    
            case 2: // pls
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps2")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/pls.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );    
            case 3: // hemoragie
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps3")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/hemoragie.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );    
            case 4: // traumatismes
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps4")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/traumatismes.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );  
            case 5: // brulures
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps5")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/brulures.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                ); 
            case 7: // ventilation artificielle
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps7")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/ventilation-artificielle.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );     
            case 8: // ettoufement adulte
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps8")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/ettoufement_adulte.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );  
            case 9: // ettoufement nourisson
                return (
                    <>
                        <HeaderComponent title={I18n.t("gdps9")} navigation={navigation} redirect="GDPS" onBackClick={() => setState(false)}/>
 
                        <View style={{
                            display: "flex",
                            alignItems: "center",
                            padding: 20                    
                        }}>
                            <Image 
                                key={Date.now()} 
                                style={{height: '80%', width: '100%', }} 
                                source={require('../../assets/gdps/ettoufement_nourisson.jpg')} 
                            >
                            
                            </Image>
                        </View>
                    </>
                );  
            default: return (
                <>
                    <Text>Erreur 200</Text>
                </>
            )
            
        }
    }
    
    return (
        <>
            <HeaderComponent title={I18n.t("gdps")} navigation={navigation} />

            <View style={{
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 0,
                marginBottom: 200   
            }}>
                <ScrollView>
                    <ButtonComponent onClick={() => {setState(true); setPage(1)}} title={I18n.t("gdps1")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(2)}} title={I18n.t("gdps2")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(3)}} title={I18n.t("gdps3")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(4)}} title={I18n.t("gdps4")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(5)}} title={I18n.t("gdps5")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(7)}} title={I18n.t("gdps7")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(8)}} title={I18n.t("gdps8")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => {setState(true); setPage(9)}} title={I18n.t("gdps9")} icon={faFirstAid} color="#008b00" />
                </ScrollView>
            </View>
        </> 
    );
}

export default GDPSPage;