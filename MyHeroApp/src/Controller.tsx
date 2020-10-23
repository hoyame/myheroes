import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={{
        height: 400,
        width: 250,
       }}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
     <FontAwesomeIcon icon={ faCoffee } />

    </View>
  );
}

const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const Stack = createStackNavigator();

  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Controller;
