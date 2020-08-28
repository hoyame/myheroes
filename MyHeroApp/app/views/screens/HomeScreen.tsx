import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../core/components/Themed';
import EditScreenInfo from '../../core/components/EditScreenInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import HeaderComponent from '../components/Header';
import HomeButtonComponent from '../components/HomeButtons';

import { faExclamationCircle, faUser, faMapSigns, faSmile } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <HeaderComponent />

      <View style={{
        marginTop: 200,
        display: 'flex',
        flexDirection: 'row',
      }}>
        <HomeButtonComponent fontAwesome={faExclamationCircle} color="#47d382" name="Alertes" fontSize={22.5} />
        <HomeButtonComponent fontAwesome={faSmile} color="#fec11c" name="Avis" fontSize={22.5} />
      </View>

      <View style={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
      }}>
        <HomeButtonComponent fontAwesome={faMapSigns} color="#00cce0" name="Carte" fontSize={22.5} />
        <HomeButtonComponent fontAwesome={faUserCircle} color="#893ddc" marginTopText={15} name="Mon    Compte" fontSize={22.5} />
      </View>
    </View>
  );
}

export default HomeScreen;