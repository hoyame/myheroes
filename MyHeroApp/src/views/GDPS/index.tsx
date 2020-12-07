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

                            <View style={{
                                position: "absolute",
                                top: 30
                            }}>

                                <View style={{
                                    width: "100%"
                                }}>
                                    <Text style={{
                                        marginTop: 5,
                                        fontSize: 30,
                                        textAlign: "center",
                                        color: "#ffffff"
                                    }}>{I18n.t("gdps1")}</Text>
                                </View>
                            
                                <View>
                                    <Text style={{
                                        marginTop: 30,
                                        fontSize: 10,
                                        marginLeft: "40%",
                                        color: "#000000"
                                    }}>{I18n.t("gdps111")}</Text>
                                </View>

                                <View>
                                    <Text style={{
                                        marginTop: 55,
                                        fontSize: 10,
                                        marginLeft: "5%",
                                        color: "#000000"
                                    }}>{I18n.t("gdps112")}</Text>
                                </View>

                                <View style={{width: 80, marginLeft: "-12.5%"}}>
                                    <Text style={{
                                        marginTop: 65,
                                        fontSize: 9,
                                        marginLeft: "-5%",
                                        color: "#000000"
                                    }}>{I18n.t("gdps113")}</Text>
                                </View>

                                <View style={{width: 40, marginLeft: "35%"}}>
                                    <Text style={{
                                        marginTop: -60,
                                        fontSize: 9,
                                        marginLeft: "15%",
                                        color: "#000000"
                                    }}>{I18n.t("gdps114")}</Text>
                                </View>

                                <View style={{width: 60, marginLeft: "30%"}}>
                                    <Text style={{
                                        marginTop: -20,
                                        fontSize: 9,
                                        color: "#000000"
                                    }}>{I18n.t("gdps115")}</Text>
                                </View>

                                <View style={{width: 60, marginLeft: "47%"}}>
                                    <Text style={{
                                        marginTop: -95,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps116")}</Text>
                                </View>

                                <View style={{width: 60, position: "absolute", top: 260, right: -40}}>
                                    <Text style={{
                                        marginTop: -35,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps117")}</Text>
                                </View>

                                {
                                    ////////////////////////////////////////
                                }

                                <View style={{marginTop: 55, marginLeft: 10 }}>
                                    <Text style={{
                                        marginTop: -35,
                                        fontSize: 10,
                                        color: "#000000"
                                    }}>{I18n.t("gdps118")}</Text>
                                </View>

                                <View style={{width: 60, marginLeft: "-3%"}}>
                                    <Text style={{
                                        marginTop: -3,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps119")}</Text>
                                </View>

                                <View style={{width: 60, marginLeft: "15%"}}>
                                    <Text style={{
                                        marginTop: 40,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1110")}</Text>
                                </View>

                                <View style={{width: 60, marginLeft: "40%"}}>
                                    <Text style={{
                                        marginTop: -40,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1111")}</Text>
                                </View>

                                <View style={{width: 60, position: "absolute", top: 370, right: -40}}>
                                    <Text style={{
                                        marginTop: -75,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1112")}</Text>
                                </View>

                                <View style={{width: 60, position: "absolute", top: 430, right: 7.5}}>
                                    <Text style={{
                                        marginTop: -75,
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1113")}</Text>
                                </View>

                                <View style={{marginTop: 20, marginLeft: "5%"}}>
                                    <Text style={{
                                        
                                        fontSize: 10,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1114")}</Text>
                                </View>

                                <View style={{width: 45, marginTop: 27.5, marginLeft: "-7.5%"}}>
                                    <Text style={{
                                        fontSize: 10,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1115")}</Text>
                                </View>

                                <View style={{width: 45, marginTop: 19, marginLeft: "11%"}}>
                                    <Text style={{
                                        fontSize: 10,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1116")}</Text>
                                </View>

                                <View style={{width: 55, marginTop: -45, marginLeft: "21%"}}>
                                    <Text style={{
                                        fontSize: 10,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1117")}</Text>
                                </View>

                                <View style={{position: "absolute", width: 60, top: 470, right: 60}}>
                                    <Text style={{
                                        fontSize: 8,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1118")}</Text>
                                </View>

                                <View style={{position: "absolute", width: 60, top: 433, right: 37}}>
                                    <Text style={{
                                        fontSize: 9,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1119")}</Text>
                                </View>

                                <View style={{position: "absolute", width: 60, top: 483, right: -40}}>
                                    <Text style={{
                                        fontSize: 9,
                                        color: "#000000"
                                    }}>{I18n.t("gdps1120")}</Text>
                                </View>
                            </View>
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