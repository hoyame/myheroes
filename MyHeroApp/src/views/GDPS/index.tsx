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
    const [page, setPage] = useState(2);

    interface IPropsNav {
        title: string;
        description?: string;
        onClick?: any;
        fontAwesome?: any;
    }

    if (state == true) {
        switch (page) {
            case 1: // inconsience
                return (
                    <>
                        <Text>zzfzf</Text>
                    </>
                );
            case 2: // pls
                return (
                    <View style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: 35                    
                    }}>
                        <Image 
                            style={{height: '100%', width: '100%'}} 
                            source={{uri: "https://cdn.discordapp.com/attachments/777534669544620043/777534952287764520/unnamed2.jpg"}} 
                        />
                    </View>
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
                    <ButtonComponent onClick={() => setState(true)} title={I18n.t("gdpsInconsience")} icon={faFirstAid} color="#008b00" />
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