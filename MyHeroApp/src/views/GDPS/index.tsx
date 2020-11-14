import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { faFirstAid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import ButtonComponent from '../../components/Button';
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
                paddingLeft: 20,
                paddingRight: 20,
                paddingBottom: 0,
                marginBottom: 200   
            }}>
                <ScrollView>
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsInconsience")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsPLS")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsMassageCardiaque")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsDefibrilateur")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsEttouffementAdulte")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsEttouffementNourisson")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsSaignementAbondant")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsBrulures")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsTraumatismeOs")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsNoyade")} icon={faFirstAid} color="#008b00" />
                    <ButtonComponent onClick={() => null} title={I18n.t("gdpsMalaise")} icon={faFirstAid} color="#008b00" />
                </ScrollView>
            </View>
        </> 
    );
}

export default GDPSPage;