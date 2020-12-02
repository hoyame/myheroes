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

    interface IProps {
        p?: string;
        img?: string;
        samu?: string;
        police?: string;
        pompiers?: string;
        ade?: string;
        sme?: string;
    }

    const getContacts = () => {
        let previousChar = '';
        let char = '';
        let childrens = [];

        for (let i = 0; i < contacts.length; i++) {
            const contact = contacts[i];
            char = (contact.lastname
                ? contact.lastname.substring(0, 1)
                : contact.firstname.substring(0, 1)
            ).toUpperCase();

            if (char != previousChar) {
                childrens.push(getSeparator(char));
            }
            previousChar = char;

            childrens.push(getContact(contact));
        }

        return <ul id="contact-list">{childrens}</ul>;
    };

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
                    <SearchBar
                        value={search}
                        onChangeText={setSearch}
                        style={SEARCH}
                        inputStyle={INPUT}
                        placeholder={I18n.t("nduSearchPays")}
                        cancelText={I18n.t("nduSearch")}
                        theme="dark"
                    />   

                    <EuropeInfo />                     
                    
                    {returnProps(navigation)}
                </View>
            </ScrollView>
        </> 
    );
}

// https://flagcdn.com/20x15/eu.png

export default NDUPage;