import 'es6-symbol/implement';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { View as DefaultView } from 'react-native';

import HeaderComponent from './components/Header/header';
import NavbarComponent from './components/Navbar/navbar';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


export default class App extends React.Component {
  public render() {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

    return (
      <>
        <HeaderComponent />

        <NavbarComponent />
      </>
    );
  }
}

/* 

<View style={styles.flex}>
        <Text style={{
          fontSize: 40
        }}>Hello World</Text>
      </View>

*/