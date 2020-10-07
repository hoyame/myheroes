import { Constants } from "expo";
import React, { Component } from "react";
import { Platform, View, Text, Dimensions } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from "react-native-maps";

export default class MapScreen extends Component {
    state = {
      location: null,
      latitude: 0,
      longitude: 0,
      errorMessage: '',
      etat: false
    };
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      let latitude = await (await Location.getCurrentPositionAsync({})).coords.latitude;
      let longitude = await (await Location.getCurrentPositionAsync({})).coords.longitude;
      this.setState({ location });
      this.setState({ latitude });
      this.setState({ longitude });
    };
  
    render() {
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);

        this._getLocationAsync();
        let latitudeS = 0;
        let longitudeS = 0;

        if (this.state.errorMessage) {
      
        } else if (this.state.location) {
          this.setState({ etat: true });
          latitudeS = parseFloat(JSON.stringify(this.state.latitude).replace(/,/g, ''));
          longitudeS = parseFloat(JSON.stringify(this.state.longitude).replace(/,/g, ''));
        }

        return (
            <>
              <MapView
                  showsUserLocation={true}
		              followsUserLocation={true}

                  style={{
                      height: screenHeight,
                      width: screenWidth,
                      borderRadius: 10
                  }}

                  region={{
                      latitude: latitudeS,
                      longitude: longitudeS,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                  }}
                >
              </MapView>
            </>
        );
    }
  }