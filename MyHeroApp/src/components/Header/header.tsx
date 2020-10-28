
import { waitForDebugger } from 'inspector';
import React from 'react';
import { View, Text, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useReduxState } from '../../data/store';

interface IHeader {
    navigation: any;
    map?: boolean
}

const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const name = useReduxState(state => state.user.name);
    const rate = useReduxState(state => state.user.rate);
    const img = useReduxState(state => state.user.image);
    const xp = useReduxState(state => state.user.xp);
    let imageUrl;
    
    if (img == '') {
        imageUrl = 'https://i1.sndcdn.com/avatars-000623724582-bisdyq-t500x500.jpg'
    } else {
        imageUrl = img
    }

    interface IStars {
        rate: number
    }

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={14} style={{color: color}} />
                    </View>
                );
        }
    }

    
    if (name == "" || rate == 0 ) {
        return (
            <>
                <View style={{
                    marginTop: 20,
                    padding: 35,
                }}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: screenWidth
                    }}>
                        <TouchableHighlight
                            style={{
                                borderRadius: 50
                            }}

                            activeOpacity={0.5}
                            underlayColor="#bebebe"
                            onPress={() => props.navigation.navigate('Nav')}
                        >
                        
                            <View style={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 65,
                                width: 65,
                                borderRadius: 50,
                                backgroundColor: "#E1E1E1"
                            }}>
                                <FontAwesomeIcon icon={faAlignLeft} size={25} style={{
                                    marginTop: 20,
                                    justifyContent: "center"
                                }} />
                            </View>
                        </TouchableHighlight>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Account')}
                        >                

                            <View style={{
                                height: 65,
                                width: 175,
                                display: "flex",
                                flexDirection: "row",
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                                borderTopLeftRadius: 50,
                                borderBottomStartRadius: 50,
                                backgroundColor: "#DDDDDD",
                            }}>
                                <View style={{
                                    height: 65,
                                    width: 65,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <Image
                                        style={{
                                            height: 55,
                                            width: 55,
                                            borderRadius: 50,
                                        }}

                                        source={{
                                            uri: imageUrl,
                                        }}
                                    />
                                </View>
                                        
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 2
                                }}>
                                    <ActivityIndicator size="small" color="#6d9bff" />

                                    <Text style={{
                                        color: "#6d9bff",
                                        fontSize: 15,
                                        marginLeft: 3,
                                        textAlign: "center"
                                    }}>Chargement</Text>

                                </View>
                            </View>
                        </TouchableOpacity>   
                    </View>
                </View>
            </>
        );
    }

    return (
        <>
            <View style={ 
                Dimensions.get('window').height > 695 ? {
                    marginTop: 50,
                    display: "flex", 
                    alignItems: "center",
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 35,
                } : {
                    marginTop: 20,
                    display: "flex", 
                    alignItems: "center",
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 30               
                }
            }>
                <View style={{
                    marginBottom: 20,
                    justifyContent: "center",
                    height: 40,
                    width: 120,
                    borderRadius: 10,
                    backgroundColor: '#1d1d1d'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "700",
                        textAlign: "center",
                        color: '#ffffff'
                    }}>MyHeroes</Text>
                </View>
   
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: screenWidth
                }}>
                    <TouchableHighlight
                        style={{
                            borderRadius: 50
                        }}

                        activeOpacity={0.5}
                        underlayColor="#bebebe"
                        onPress={() => props.navigation.navigate('Nav')}
                    >
                    
                        <View style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 65,
                            width: 65,
                            borderRadius: 50,
                            backgroundColor: "#E1E1E1"
                        }}>
                            <FontAwesomeIcon icon={faAlignLeft} size={25} style={{
                                marginTop: 20,
                                justifyContent: "center"
                            }} />
                        </View>
                    </TouchableHighlight>

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Account')}
                    >                

                        <View style={{
                            height: 65,
                            width: 175,
                            display: "flex",
                            flexDirection: "row",
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 50,
                            borderBottomStartRadius: 50,
                            backgroundColor: "#DDDDDD",
                        }}>
                            <View style={{
                                height: 65,
                                width: 65,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Image
                                    style={{
                                        height: 55,
                                        width: 55,
                                        borderRadius: 50,
                                    }}

                                    source={{
                                        uri: imageUrl,
                                    }}
                                />
                            </View>

                            <View style={{
                                display: "flex",
                                justifyContent: "center",

                                marginLeft: 12
                            }}>
                                <Text style={{
                                    //color: "#6d9bff",
                                    marginBottom: 1,
                                    fontSize: 16
                                }}>{name}</Text>

                                <Text style={{
                                    color: "#778899",
                                    marginBottom: 3,
                                    fontSize: 11
                                }}>{xp} XP</Text>

                                <View>
                                    {ReturnStars({rate: rate}) }
                                </View>
                            </View>
                            

                        </View>
                    </TouchableOpacity>   
                </View>
            </View>
        </>
    );
}

export default HeaderComponent;

/*

                    <Image
                        style={{
                            height: 65,
                            width: 65,
                            borderRadius: 50,
                        }}

                        source={{
                            uri: 'https://hoyame.fr/e399d871b6455e3f2a7b0acd8add87c9.png',
                        }}
                    />
*/