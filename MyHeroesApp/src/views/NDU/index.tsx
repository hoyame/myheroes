import React, { useState } from 'react';
import { Image, ScrollView, View, Text, ViewStyle, Platform, TextStyle, FlatList } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import SearchBar from "react-native-platform-searchbar"
import { data } from '../../data/ndu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import I18n from '../../i18n/i18n';


const SEARCH: ViewStyle = {
    marginBottom: 15,
}

const INPUT: TextStyle = {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 15
}

const NDUPage = ({ navigation }) => {
    const [search, setSearch] = useState("")
    const [s, ss] = useState([
        {
            p: "France",
            img: "https://www.countryflags.io/fr/flat/64.png",
            samu: "15",
            police: "17",
            pompiers: "18",
            ade: "112",   // européeen 
            sme: "114",   // sourd / mal entendant
        },
        {
            p: "Switzerland",
            img: "https://www.countryflags.io/ch/flat/64.png",
            samu: "144",
            police: "117",
            pompiers: "118",
        },    
        {
            p: "Spain",
            img: "https://www.countryflags.io/es/flat/64.png",
            samu: "144",
            police: "117",
            pompiers: "118",
        }
    ])

    interface IProps {
        p?: string;
        img?: string;
        samu?: string;
        police?: string;
        pompiers?: string;
        ade?: string;
        sme?: string;
    }

    var filterUsers = function(){
        const keyword = search.toLowerCase();
        const filtered_users = s.p.filter(function(user: string){
            user = user.toLowerCase();
            return user.indexOf(keyword) > -1; 
        });
        
        ss(filtered_users);
    }
    
    const tes = (e: any) => {
        setSearch(e)
        console.log(e);
        filterUsers();
    }
      

    const Props: React.FC<IProps> = (props: IProps) => {
        return (
            <View style={{
                height: 120,
                borderRadius: 15,
                padding: 15,
                marginBottom: 10,
                backgroundColor: '#ffffff'
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: -5,
                    marginBottom: 7.5
                }}>
                    <Image source={{uri: props.img}} style={{
                        height: 15,
                        width: 20,
                        marginRight: 10
                    }} />

                    <Text style={{
                        fontSize: 20
                    }}>{props.p}</Text> 
                </View>

                <View style={{
                    marginLeft: 5
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: '#f10000',
                            marginRight: 7.5
                        }}/>

                        <Text>{I18n.t("nduAmbulance")} : </Text>

                        <Text style={{
                            color: '#f10000'
                        }}>{props.samu}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: '#058cef',
                            marginRight: 7.5
                        }}/>

                        <Text>{I18n.t("nduPolice")} : </Text>

                        <Text style={{
                            color: '#058cef'
                        }}>{props.police}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: '#fdaa8f',
                            marginRight: 7.5
                        }}/>

                        <Text>{I18n.t("nduPompiers")} : </Text>

                        <Text style={{
                            color: '#fdaa8f'
                        }}>{props.pompiers}</Text>
                    </View>
                </View>
            </View> 
        );
    }   

    const returnProps = (nav: any) => {
        return data.map((v, k) => {
            return <Props key={k} {...v} />
        })
    }

    const EuropeInfo = () => {
        return (
            <View style={{
                height: 75,
                borderRadius: 15,
                backgroundColor: '#ffffff',
                padding: 15,
                marginBottom: 10
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: -5,
                    marginBottom: 7.5
                }}>
                    <Image source={{uri: 'https://www.countryflags.io/eu/flat/64.png'}} style={{
                        height: 15,
                        width: 20,
                        marginRight: 10
                    }} />
                    <Text style={{
                        fontSize: 20
                    }}>Europe</Text> 
                </View>
                <View style={{
                    marginLeft: 5
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: '#f10000',
                            marginRight: 7.5
                        }}/>
                        <Text>{I18n.t("ndu")} : </Text>
                        <Text style={{
                            color: '#f10000'
                        }}>112</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <>
            <HeaderComponent title={I18n.t("ndu")} navigation={navigation} />

            <ScrollView>
                <View style={{
                    padding: 35,
                    paddingTop: 0
                }}>
                    {
                        /*
                        <SearchBar
                        value={search}
                        onChangeText={tes}
                        style={SEARCH}
                        inputStyle={INPUT}
                        placeholder={I18n.t("nduSearchPays")}
                        cancelText={I18n.t("nduSearch")}
                        theme="dark"
                        />
                        
                        */
                    }

                    <EuropeInfo />                     
                    
                    {returnProps(navigation)}
                </View>
            </ScrollView>
        </> 
    );
}

// https://flagcdn.com/20x15/eu.png

export default NDUPage;