import { Constants } from "expo";
import React, { Component } from "react";
import { Platform, View, Text, Dimensions } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from "react-native-maps";
import MapComponent from "./service";

const MapScreen = () => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    const screenHeight = Math.round(Dimensions.get('window').height);

  return (
    <View>
      <MapComponent height={screenHeight} width={screenWidth} />
    </View>
  );
}

export default MapScreen;