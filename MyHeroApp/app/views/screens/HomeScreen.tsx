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
    justifyContent: 'center',
  }
});

const HomeScreen = () => {


  return (
    <View style={styles.container}>
      <HeaderComponent />

      <View>
        <HomeButtonComponent />
      </View>
    </View>
  );
}

export default HomeScreen;