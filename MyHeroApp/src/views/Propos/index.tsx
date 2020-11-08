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
                    }}>Historique</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>Crée en 2019 par SAIDAT Wahib, l'application MyHeroes de
                        a pour but de sauver la population quelque soit leur situation.
                        L'equipe composé du directeur SAIDAT Wahib et de son développeur 
                        Hoyame Zouhari ont décidé d'apporter une assistance rapide suite a
                        tout les mouvements mauvais qu'il y'a eu ( terrorisme, metou, aggressions scolaires
                        , etc...)
                    </Text>
                        
                    <Text style={{
                        fontSize: 25,
                        marginBottom: 10
                    }}>Objectif</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>
                        L'application MyHeroes a pour obkectif d'aider la population le plus
                        rapidement possible quelque coit leur situation qu'elle soit la gravité
                        qu'elle encours. Grace a MyHeroes, que MyHero peut arriver sur place sur place
                        en quelque secondes tandis que les secours sont la en quelques minutes.
                        Parfois il suffit de quelques secondes pour sauver une vie ou empecher une aggression
                        et MyHeroes est la pour ça.
                    </Text>
                
                    <Text style={{
                        fontSize: 25,
                        marginBottom: 10
                    }}>Services</Text>
    
                    <Text style={{
                        fontSize: 18,
                        marginBottom: 15
                    }}>
                        L'application MyHeroes propose que toute les personnes s'entraide les unes aux autres grace 
                        a une geolocalisation qui permet de voir les perosnnes en danger a proximité. MyHeroes apprend
                        aux gens comment se comporter en cas de grave danger grace aux gestes de premier secours et qui 
                        appeler au plus vite grace aux numeros d'urgence. MyHeroes permet de gagner des points pour chaque 
                        sauvetage, plus vous avez de point, plus vous montez de niveau et plus vous êtes un grand/grande heros/heroine
                        pour la nation
                        
                    </Text>
                </View>
            </ScrollView>
        </>
    );
}

export default ProposScreen;