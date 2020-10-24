import React, { Component, useState } from "react";
import { Platform, View, Text, Dimensions, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useReduxState } from "../../data/store";
import { useDispatch } from 'react-redux';
import { setCacheShowAlert } from "../../data/actions/user";

interface IMap {
  height: number;
  width: number;
  nav: any;
}

const MapComponent = (props: IMap) => {
  const latitude = useReduxState(state => state.location.latitude);
  const longitude = useReduxState(state => state.location.longitude);
  const state = useReduxState(state => state.location.state);
  const alerts = useReduxState(state => state.alerts.list);
  const dispatch = useDispatch();

  let text = 'Waiting..';
  let latitudeS = 0;
  let longitudeS = 0;

  if (state) {
    latitudeS = latitude;
    longitudeS = longitude;
  }

  if (state == false) {
    return (
      <View style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <ActivityIndicator size="large" color="#6d9bff" />
      </View> 
    )
  }

  
  const returnAlerts = () => {
    return alerts.map((v, k) => {
        return (
          <Marker
            key={k}
            coordinate={{
              latitude: v.latitude,
              longitude: v.longitude,
            }}
            title={v.source}
            description={v.description}
            onPress={() => {
              dispatch(setCacheShowAlert(v))
              props.nav.navigate('AlertPageScreen')
            }}
          />
        );
    })
}

  return (
      <>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps

          style={{
              height: props.height,
              width: props.width,
              borderRadius: 10
          }}

          region={{
              latitude: latitudeS,
              longitude: longitudeS,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
          }}
        >
          {returnAlerts()}
        </MapView>
      </>
  );
}

export default MapComponent;