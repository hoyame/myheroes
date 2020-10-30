import React, { useState } from 'react';
import { Image, ScrollView, View, Text, ViewStyle, Platform, TextStyle, FlatList } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import SearchBar from "react-native-platform-searchbar"
import { data } from '../../data/ndu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const SEARCH: ViewStyle = {

    marginBottom: 15,
}

const INPUT: TextStyle = {
    color: '#000000',
    backgroundColor: '#e1e1e1'
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

    const Props: React.FC<IProps> = (props: IProps) => {
        return (
            <View style={{
                height: 120,
                borderRadius: 7.5,
                padding: 15,
                marginBottom: 10,
                backgroundColor: '#e1e1e1'
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
                            color: 'red',
                            marginRight: 7.5
                        }}/>

                        <Text>Ambulances/Samu : </Text>

                        <Text style={{
                            color: 'red'
                        }}>{props.samu}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: 'blue',
                            marginRight: 7.5
                        }}/>

                        <Text>Police : </Text>

                        <Text style={{
                            color: 'blue'
                        }}>{props.police}</Text>
                    </View>

                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 2
                    }}>
                        <FontAwesomeIcon icon={faPhoneAlt} style={{
                            color: 'orange',
                            marginRight: 7.5
                        }}/>

                        <Text>Pompiers : </Text>

                        <Text style={{
                            color: 'orange'
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

    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 25
                }}>Numeros d'urgences</Text>

                <SearchBar
                    value={search}
                    onChangeText={setSearch}
                    style={SEARCH}
                    inputStyle={INPUT}
                    placeholder="Rechercher un pays"
                    cancelText="Rechercher"
                    theme="dark"
                />

                <View style={{
                    height: 75,
                    borderRadius: 7.5,
                    backgroundColor: '#e1e1e1',
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
                        <Image source={{uri: 'https://flagcdn.com/20x15/eu.png'}} style={{
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
                                color: 'red',
                                marginRight: 7.5
                            }}/>

                            <Text>N° d'urgence : </Text>

                            <Text style={{
                                color: 'red'
                            }}>112</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    {returnProps(navigation)}
                </ScrollView>
            </View>
        </> 
    );
}

// https://flagcdn.com/20x15/eu.png

export default NDUPage;