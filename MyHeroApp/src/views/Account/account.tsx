import { faBaby, faBed, faBiking, faBlind, faBold, faCut, faExclamationCircle, faHome, faInfoCircle, faJedi, faKhanda, faMedal, faMeteor, faShieldAlt, faTimesCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
    const [page, setPage] = useState(1);

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
                backgroundColor: '#fff'
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
                                uri: `http://176.31.230.112:3000/api/avatar/${props.user}?time=${new Date()}`,
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
                            color: "black"
                        }}>{props.user}</Text>

                        <ReturnStars size={15} rate={props.rate} />
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 12,
                        width: screenWidth - 20,
                        marginTop: 4,
                        color: "black"
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
            } else if (num >= 500 && num <= 2500) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                   </>
                )
            } else if (num >= 2500 && num <= 5000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 5000 && num <= 25000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 25000 && num <= 50000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 50000 && num < 500000) {
                return (
                    <>
                        <FontAwesomeIcon icon={faStar} size={25} style={{color: "#008B00", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMeteor} size={25} style={{color: "#FCCA1C", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faMedal} size={25} style={{color: "#1F7CEB", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faTrophy} size={25} style={{color: "#B0F50A", marginRight: 7.5}} />
                        <FontAwesomeIcon icon={faShieldAlt} size={25} style={{color: "#E63B25", marginRight: 7.5}} />
                    </>
                )
            } else if (num >= 500000 && num <= 5000000) {
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
            } else if (num >= 5000000) {
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

    const returnZebi = () => {
        switch (page) {
            case 0:
                return (
                    <>
                        <Text>0</Text>
                    </>
                )
            case 1:
                return (
                    <>
                             <View style={{
                                    height: 130,
                                    borderRadius: 15,
                                    marginBottom: 12.5,
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
                                        <FontAwesomeIcon icon={faExclamationCircle} size={25} style={{color: "#d80000", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>{I18n.t("alertFaible")} : 10 XP</Text>
                            </View>
                            
                                                 <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faExclamationCircle} size={25} style={{color: "#ff9600", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                        }}>{I18n.t("alertMoyen")} : 20 XP</Text>
                            </View>
                            
                                                 <View style={{
                                        height: 35,
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center"
                                    }}>
                                        <FontAwesomeIcon icon={faExclamationCircle} size={25} style={{color: "#ffd100", marginRight: 7.5}} />
                                        <Text style={{
                                            fontSize: 17.5
                                }}>{I18n.t("alertGrave")} : 50 XP</Text>
                                    </View>
                            

                              
                                                            
                        </View>
                        
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
                                        }}>500 XP</Text>
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
                                        }}>2500 XP</Text>
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
                                        }}>5000 XP</Text>
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
                                        }}>25000 XP</Text>
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
                                        }}>50000 XP</Text>
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
                                        }}>500000 XP</Text>
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
                                        }}>5000000 XP</Text>
                                    </View>
                                                            
                                </View>
                    </>
                )
            case 2:
                return (
                    <>
                        {returnAvis()}
                    </>
                )
            default: return <>53</>
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
     
                    
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 15,
                            marginBottom: 30
                        }}>
                            <TouchableOpacity onPress={() => setPage(0)}>
                                <View style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    height: 80,
                                    width: 80,
                                    marginRight: 25,
                                    borderRadius: 10,
                                    backgroundColor: page == 0 ? "#1d1d1d" : "#fff"
                                }}>
                                    <FontAwesomeIcon icon={faMedal} size={35} style={{color: page == 0 ? "#fff" : "#E63B25"}} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setPage(1)}>
                                <View style={{
                                   display: 'flex',
                                    alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                height: 80,
                                width: 80,
                                marginRight: 25,
                                borderRadius: 10,
                                    backgroundColor: page == 1 ? "#1d1d1d" : "#fff"
                                }}>
                                    <FontAwesomeIcon icon={faInfoCircle} size={40} style={{color: page == 1 ? "#fff" : "#FC9A21"}} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setPage(2)}>
                                <View style={{
                                   display: 'flex',
                                    alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                height: 80,
                                width: 80,
                                borderRadius: 10,
                                    backgroundColor: page == 2 ? "#1d1d1d" : "#fff"
                                }}>
                                    <FontAwesomeIcon icon={Zei} size={40} style={{color: page == 2 ? "#fff" : "#FCCA1C"}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                                
                        {returnZebi()}
                    </View>
                </ScrollView>

            </View>
        </>
    );
}

export default AccountScreen;