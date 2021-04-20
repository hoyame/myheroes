import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import I18n from '../../i18n/i18n';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import HeaderComponent from '../../components/Header/header';
import { setCacheShowAlert } from '../../data/actions/user';
import { useReduxState } from '../../data/store';
import { setAlertStatus } from '../../api/Alerts';

const AlertScreen = ({ navigation }) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const alerts = useReduxState(state => state.alerts.list);

    interface IAlert {
        id?: number;
        level: number;
        source: string;
        latitude: number;
        longitude: number;
        description: string;
        onClick: any;
        hour?: string;
    }

    const AlertProps: React.FC<IAlert> = (props: IAlert) => {
        let color = "#ffd100";
        let levelName = I18n.t("alertFaible");

        switch (props.level) {
            case 1: 
                color = "#ffd100";
                levelName = I18n.t("alertFaible");
                break;
            case 2: 
                color = "#ff9600";
                levelName = I18n.t("alertMoyen");
                break;
            case 3:
                color = "#d80000";
                levelName = I18n.t("alertGrave");
                break;
        }

        return (
            <TouchableOpacity
                onPress={props.onClick}
            >
                <View style={{
                    height: 90,
                    width: screenWidth - 8,
                    backgroundColor: color,
                    borderRadius: 15,
                    paddingLeft: 5,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    marginBottom: 7.5
                }}>
                    <View style={{
                        backgroundColor: 'transparent',
                        justifyContent: "flex-start",
                    }}>   
                        <Text style={{
                            fontSize: 20,
                            marginLeft: 10,
                            color: "#000000"
                        }}>{I18n.t("alertT")} {levelName}</Text>

                        <Text style={{
                            fontSize: 15,
                            marginTop: 0,
                            marginLeft: 10,
                            color: "#ffffff"
                        }}>{I18n.t("par")} {props.source}</Text>

                        <Text style={{
                            fontSize: 15,
                            marginTop: 0,
                            marginLeft: 10,
                            color: "#ffffff"
                        }}>A {props.hour}h</Text>
                    </View>

                    <View style={{
                        height: 55,
                        width: 55,
                        justifyContent: "center",
                        marginRight: 7.5, 
                        borderRadius: 50,
                    }}>
                        <Image
                            key={Date.now()} 

                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 50,
                            }}
                        
                            source={{
                                uri: `http://146.59.227.90:3000/api/avatar/${props.source}?time=${new Date()}`,
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    const dispatch = useDispatch();

    const returnAlerts = (nav: any) => {
        return alerts.map((v, k) => {
            return <AlertProps key={k} {...v} onClick={() => {
                dispatch(setCacheShowAlert(v))
                nav.navigate('AlertPageScreen')
            }} />
        })
    }

    if (alerts.length == 0) {
        return (
            <>
                <HeaderComponent title={I18n.t("alertes")} navigation={navigation} />

                <View style={{
                    paddingLeft: 35,
                    paddingRight: 35,
                    paddingBottom: 35
                }}>
                    <View style={{
                        height: 60,
                        marginBottom: 15,
                        borderRadius: 15,
                        padding: 10,
                        justifyContent: "center",
                        backgroundColor: "#0077be"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: 20      
                        }}>{I18n.t("alertNotDispo")}</Text>
                    </View>
                </View>
            </>
        );
    }
    
    return (
        <>
            <HeaderComponent title={I18n.t("alertes")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 35
            }}>
                <ScrollView>
                    {returnAlerts(navigation)}
                </ScrollView>
            </View>
        </>
    );
}

export default AlertScreen;