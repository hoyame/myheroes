import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Socket } from 'socket.io-client';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const ConfidentialiteScreen = ({ navigation }) => {
    interface IProps {
        title: string;
        content: string;
    }

    const Props = (props: IProps) => {
        return (
            <>
               <Text style={{
                    fontSize: 19,
                    marginBottom: 8
                }}>{props.title}</Text>

                <Text style={{
                    marginBottom: 15
                }}>{props.content}</Text>
            </>
        )
    }

    return (
        <>
            <HeaderComponent title={I18n.t("confidentiality")} navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <ScrollView style={{
                    marginBottom: 180
                }}>
                    <Text style={{
                        fontSize: 22,
                        marginBottom: 20
                    }}>{I18n.t("cgu")}</Text>

                    <Props title={I18n.t("cgu1")} content={I18n.t("cgu01")} />
                    <Props title={I18n.t("cgu2")} content={I18n.t("cgu02")} />
                    <Props title={I18n.t("cgu3")} content={I18n.t("cgu03")} />
                    <Props title={I18n.t("cgu4")} content={I18n.t("cgu04")} />
                    <Props title={I18n.t("cgu5")} content={I18n.t("cgu05")} />
                    <Props title={I18n.t("cgu6")} content={I18n.t("cgu06")} />
                    <Props title={I18n.t("cgu7")} content={I18n.t("cgu07")} />
                    <Props title={I18n.t("cgu8")} content={I18n.t("cgu08")} />
                    <Props title={I18n.t("cgu9")} content={I18n.t("cgu09")} />
                    <Props title={I18n.t("cgu10")} content={I18n.t("cgu010")} />
                    <Props title={I18n.t("cgu11")} content={I18n.t("cgu011")} />
                    <Props title={I18n.t("cgu12")} content={I18n.t("cgu012")} />
                    <Props title={I18n.t("cgu13")} content={I18n.t("cgu013")} />
                    <Props title={I18n.t("cgu14")} content={I18n.t("cgu014")} />
                    <Props title={I18n.t("cgu15")} content={I18n.t("cgu015")} />
                    <Props title={I18n.t("cgu16")} content={I18n.t("cgu016")} />
                    <Props title={I18n.t("cgu17")} content={I18n.t("cgu017")} />
                    <Props title={I18n.t("cgu18")} content={I18n.t("cgu018")} />
                    <Props title={I18n.t("cgu19")} content={I18n.t("cgu019")} />
                    <Props title={I18n.t("cgu20")} content={I18n.t("cgu020")} />
                    <Props title={I18n.t("cgu21")} content={I18n.t("cgu021")} />
                    <Props title={I18n.t("cgu22")} content={I18n.t("cgu022")} />
                    <Props title={I18n.t("cgu23")} content={I18n.t("cgu023")} />
                </ScrollView>

            </View>
        </>
    );
}

export default ConfidentialiteScreen;