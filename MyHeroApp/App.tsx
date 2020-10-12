import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { View as DefaultView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HeaderComponent from './src/components/Header/header';
import NavbarComponent from './src/components/Navbar/navbar';
import HomeScreen from './src/views/Home/home';
import AlertScreen from './src/views/Alerts/alerts';
import NavScreen from './src/views/Nav/nav';
import MapScreen from './src/views/Map/map';
import AccountScreen from './src/views/Account/account';
import ConnexionScreen from './src/views/Connection/connexion';
import InscriptionScreen from './src/views/Inscription/inscription';

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
    const Stack = createStackNavigator();

    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
            <Stack.Screen name="Alert" component={AlertScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Connexion" component={ConnexionScreen} />
            <Stack.Screen name="Inscription" component={InscriptionScreen} />
            <Stack.Screen name="Nav" component={NavScreen} />

          </Stack.Navigator>
        </NavigationContainer>

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