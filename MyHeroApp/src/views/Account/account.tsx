import { faBaby, faBed, faBiking, faBlind, faBold, faCut, faHome, faJedi, faKhanda, faMedal, faMeteor, faShieldAlt, faTimesCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, Text, TouchableHighlight, TouchableOpacity, View, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import AccountStats from '../../components/AccountStats';
import HeaderComponent from '../../components/Header/header';
import { useReduxState } from '../../data/store';
import { faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar, faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import I18n from '../../i18n/i18n';
import { AvisUsers } from '../../api/User';

const screenWidth = Math.round(Dimensions.get('window').width - 70);

const STYLES = StyleSheet.create({
    ROW: {
      display: "flex",
      flexDirection: "row"
    },

    INPUT: {
        height: 60, 
        width: screenWidth,
        borderColor: 'gray', 
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 20
    }
});
  

const AccountScreen = ({ navigation }) => {
    const name = useReduxState(state => state.user.name);
    const rate = useReduxState(state => state.user.rate);
    const img = useReduxState(state => state.user.image);
    const xp = useReduxState(state => state.user.xp);
    const [information, setInformation] = useState(false);

    const [state, setState] = useState({
        name: '',
        mail: '',
        password: '',
        cPassword: '',
    })

    interface IStars {
        rate: number;
        size?: number;
    }

    interface IAvis {
        user?: string;
        rate: number;
        description?: string;
    }

    const AvisData = AvisUsers

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"
        const size = props.size || 20

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                    </View>
                );
        }
    }

    const AvisProps = (props: IAvis) => {
        return (
            <View style={{
                width: screenWidth,
                marginBottom: 10,
                borderRadius: 15,
                padding: 13,
                backgroundColor: '#353A50'
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Image
                            key={Date.now()} 

                            style={{
                                height: 45,
                                width: 45,
                                borderRadius: 50,
                            }}
                        
                            source={{
                                uri: `http://146.59.227.90:3000/api/avatar/${props.user}?time=${new Date()}`,
                            }}
                        />
                    </View>

                    <View style={{
                        paddingTop: 3,
                        paddingLeft: 10
                    }}>
                        <Text style={{
                            fontSize: 16,
                            marginBottom: 3,
                            color: "white"
                        }}>{props.user}</Text>

                        <ReturnStars size={15} rate={props.rate} />
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 12,
                        width: screenWidth - 20,
                        marginTop: 4,
                        color: "rgba(255, 255, 255, 0.75)"
                    }}>{props.description}</Text>
                </View>
            </View>
        );
    }

    const returnAvis = () => {
        return AvisData.map((v, k) => (
            <AvisProps key={k} {...v} />
        ))
    }

    const returnBadgesWithXp = (num: number) => {
            if (num < 100) {
                setInformation(true)

                return (
                    <>

                   </>
                )
            } else if (num >= 100 && num <= 500) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                   </>
                )
            } else if (num >= 500 && num <= 1000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 1000 && num <= 5000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 5000 && num <= 10000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 10000 && num < 100000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faShieldAlt} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 100000 && num <= 1000000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faShieldAlt} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faKhanda} size={25} style={{color: "#FC9A21", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 1000000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faShieldAlt} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faKhanda} size={25} style={{color: "#FC9A21", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faJedi} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                    </>
                )
            }
    }

    return (
        <>
            <HeaderComponent redirect="Home" title='' navigation={navigation} />

            <View style={{
                marginTop: -30,
                paddingLeft: 35,
                paddingRight: 33,
                paddingBottom: 35
            }}>
                <ScrollView>

                <View style={{
                    alignItems: 'center',
                    marginBottom: 165
                }}>
                    <Image
                        key={Date.now()} 
                        
                        style={{
                            height: 110,
                            width: 110,
                            borderRadius: 15,
                            marginBottom: 12.5,
                        }}

                        source={{
                            uri: img,
                        }}
                    />

                    <Text style={{
                        fontSize: 25,
                        marginBottom: 5,
                        color: "#454F63"
                    }}>{name}</Text>

                    <Text style={{
                        fontSize: 17.5,
                        marginBottom: 10,
                        color: "#454F63"
                    }}>{xp} XP</Text>

                    <ReturnStars rate={rate} />
     
                    <TouchableOpacity onPress={() => setInformation(!information)}>
                        {
                            information == false ?
                                <View style={{
                                    height: 60,
                                    borderRadius: 15,
                                    marginBottom: 12.5,
                                    marginTop: 12.5,
                                    width: screenWidth,
                                    backgroundColor: "#ffffff",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    display: "flex",
                                    flexDirection: 'row'
                                }}>
                                    { returnBadgesWithXp(xp)}
                                </View>
                            : 
                                <View style={{
                                    height: 310,
                                    borderRadius: 15,
                                    marginBottom: 12.5,
                                    marginTop: 12.5,
                                    width: screenWidth,
                                    backgroundColor: "#ffffff",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    display: "flex",
                                    flexDirection: 'column'
                                }}>
                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>10 Sauvetages</Text>
                                    </View>
                                    
                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>50 Sauvetages</Text>
                                    </View>

                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>100 Sauvetages</Text>
                                    </View>

                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>500 Sauvetages</Text>
                                    </View>
                                    
                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faShieldAlt} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>1000 Sauvetages</Text>
                                    </View> 
                                    
                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faKhanda} size={25} style={{color: "#FC9A21", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>10000 Sauvetages</Text>
                                    </View> 

                                    <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faJedi} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>100000 Sauvetages</Text>
                                    </View>
                                                                
                                </View>
                        }
                    </TouchableOpacity>

                    {returnAvis()}
                </View>
                    </ScrollView>

            </View>
        </>
    );
}

export default AccountScreen;