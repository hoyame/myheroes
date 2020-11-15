import React, { Component, useState } from "react";
import { Platform, View, Text, Dimensions, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useReduxState } from "../../data/store";
import { useDispatch } from 'react-redux';
import { setCacheShowAlert } from "../../data/actions/user";
import { setLocalisation } from "../../data/actions/localisation";
import { MyHeroService } from "../../api/Service";
import { WaveIndicator } from 'react-native-indicators';
import I18n from '../../i18n/i18n';

interface IMap {
  height: number;
  width: number;
  nav: any;
  dmdm?: any;
}

const MapComponent = (props: IMap) => {
  const latitude = useReduxState(state => state.location.latitude);
  const longitude = useReduxState(state => state.location.longitude);
  const state = useReduxState(state => state.location.state);
  const alerts = useReduxState(state => state.alerts.list);
  const dispatch = useDispatch();
  const screenWidth = Math.round(Dimensions.get('window').width);

  let text = 'Waiting..';
  let latitudeS = 0;
  let longitudeS = 0;

  if (state) {
    latitudeS = latitude;
    longitudeS = longitude;
  }

  if (state == false) {
    setTimeout(() => {
      if (MyHeroService.latitude !== 0 && MyHeroService.longitude !== 0) {
          dispatch(setLocalisation({ latitude: MyHeroService.latitude, longitude: MyHeroService.longitude, localisation: true, state: true }))
      }
  }, 5500)

  }

  if (state == false) {
    return (
      <View style={{
        height: props.height,
        width: props.width,
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{
            color: "#3497FD",
            fontSize: 20,
            textAlign: "center"
        }}>Initialisation de</Text>

        <Text style={{
            color: "#3497FD",
            fontSize: 20,
            marginBottom: 10,
            textAlign: "center"
        }}>MyHeroService.Localisation</Text> 
        
        <WaveIndicator color='#3497FD' size={35} />
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
      <View style={{ borderRadius: 15, overflow: 'hidden'}}>
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}
          //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          customMapStyle={props.dmdm ? props.dmdm : []}

          style={{
              height: props.height,
              width: props.width,
              borderRadius: 15,
              overflow: 'hidden' 
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
      </ View>
  );
}

export default MapComponent;