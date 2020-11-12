import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const GDPSPage = ({ navigation }) => {
    interface IPropsNav {
        title: string;
        description?: string;
        onClick?: any;
        fontAwesome?: any;
    }

    const PropsNav = (props: IPropsNav) => {
        return (
            <TouchableOpacity onPress={props.onClick}>
                <View style={{
                    height: 60,
                    //width: screenWidth - 70,
                    borderRadius: 10,
                    marginBottom: 15,
                    backgroundColor: '#E1E1E1',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center"
                }}>
                    <View style={{
                        paddingLeft: 15,
                    }}>
                        <Text style={{
                            fontSize: 24,
                            color: "#222222"
                        }}>{props.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    
    return (
        <>
            <HeaderComponent title={I18n.t("gdps")} navigation={navigation} />

            <View style={{
                paddingLeft: 35,
                paddingRight: 35,
                paddingBottom: 0,
                marginBottom: 160   
            }}>
                <ScrollView>
                    <PropsNav title={I18n.t("gdpsInconsience")} />
                    <PropsNav title={I18n.t("gdpsPLS")} />
                    <PropsNav title={I18n.t("gdpsMassageCardiaque")} />
                    <PropsNav title={I18n.t("gdpsDefibrilateur")} />
                    <PropsNav title={I18n.t("gdpsEttouffementAdulte")} />
                    <PropsNav title={I18n.t("gdpsEttouffementNourisson")} />
                    <PropsNav title={I18n.t("gdpsSaignementAbondant")} />
                    <PropsNav title={I18n.t("gdpsBrulures")} />
                    <PropsNav title={I18n.t("gdpsTraumatismeOs")} />
                    <PropsNav title={I18n.t("gdpsNoyade")} />
                    <PropsNav title={I18n.t("gdpsMalaise")} />
                </ScrollView>
            </View>
        </> 
    );
}

export default GDPSPage;