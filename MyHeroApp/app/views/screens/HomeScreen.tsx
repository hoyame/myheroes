import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../core/components/Themed';
import EditScreenInfo from '../../core/components/EditScreenInfo';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import HeaderComponent from '../components/Header';
import HomeButtonComponent from '../components/HomeButtons';

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
        <HomeButtonComponent color="#47d382" name="Zboub" />
        <HomeButtonComponent color="#fec11c" name="Zboub" />
      </View>

      <View style={{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
      }}>
        <HomeButtonComponent color="#00cce0" name="Zboub" />
        <HomeButtonComponent color="#f074b2" name="Zboub" />
      </View>
    </View>
  );
}

export default HomeScreen;