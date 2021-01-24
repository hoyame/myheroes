import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import I18n from '../../i18n/i18n';

const ProposScreen = ({ navigation }) => {
    return (
        <>
            <HeaderComponent title={I18n.t("apropos")} navigation={navigation} />

            <ScrollView>
                <View style={{
                    paddingLeft: 35,
                    paddingRight: 35
                }}>
                    <Text style={{
                        fontSize: 25,
                        marginBottom: 10
                    }}>{I18n.t("faq1")}</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>{I18n.t("faq1Desc")}</Text>
                        
                    {/* */}

                    <Text style={{
                        fontSize: 25,
                        marginBottom: 10
                    }}>{I18n.t("faq2")}</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>{I18n.t("faq2Desc")}</Text>
                
                    {/* */}

                    <Text style={{
                        fontSize: 25,
                        marginBottom: 10
                    }}>{I18n.t("faq3")}</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>{I18n.t("faq3Desc")}</Text>
                </View>
            </ScrollView>
        </>
    );
}

export default ProposScreen;