import React, { Component, useState } from "react";
import { Platform, View, Text, Dimensions, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useReduxState } from "../../data/store";

interface IMap {
  height: number;
  width: number;
}

const MapComponent = (props: IMap) => {
  const latitude = useReduxState(state => state.location.latitude);
  const longitude = useReduxState(state => state.location.longitude);
  const state = useReduxState(state => state.location.state);
 

  let AlertData = [
    {
      source: "hoyame",
      coordinate: {
        latitude: 45.684866,
        longitude: 5.9096452,
      },
      description: ""
    },
    {
      source: "hoyame",
      coordinate: {
        latitude: 45.6912912,
        longitude: 5.9070146,
      },
      description: ""
    }
  ];

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
            {AlertData.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.coordinate}
                title={"marker.description"}
                description={marker.description}
              />
            ))}
        </MapView>
      </>
  );
}

export default MapComponent;

/*
        <MapView
          showsUserLocation={true}
          followsUserLocation={true}

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
            {AlertData.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.coordinate}
                title={"marker.description"}
                description={marker.description}
              />
            ))}
        </MapView>
*/

/*

export default class MapComponents extends Component<{height: number; width: number}> {
    AlertData = [
      {
        source: "hoyame",
        coordinate: {
          latitude: 45.684866,
          longitude: 5.9096452,
        },
        description: ""
      },
      {
        source: "hoyame",
        coordinate: {
          latitude: 45.6912912,
          longitude: 5.9070146,
        },
        description: ""
      }
    ];

    state = {
      state: false,
      location: null,
      latitude: 0,
      longitude: 0,
      errorMessage: '',
    };
  
    _getLocationAsync = async () => {
      try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let latitude = await (await Location.getCurrentPositionAsync({})).coords.latitude;
        let longitude = await (await Location.getCurrentPositionAsync({})).coords.longitude;
        //this.setState({ location });
        //this.setState({ latitude });
        //this.setState({ longitude });
        //this.setState({ state: true })
      } catch {
        return null;
      }
    };
  
    componentDidMount() {
      this._getLocationAsync();
    }

    render() {
        //const screenWidth = Math.round(Dimensions.get('window').width);
        //const screenHeight = Math.round(Dimensions.get('window').height);

  
        let text = 'Waiting..';
        let latitudeS = 0;
        let longitudeS = 0;

        if (this.state.errorMessage) {
          text = this.state.errorMessage;
        } else if (this.state.location) {
          text = JSON.stringify(this.state.location);
          latitudeS = parseFloat(JSON.stringify(this.state.latitude).replace(/,/g, ''));
          longitudeS = parseFloat(JSON.stringify(this.state.longitude).replace(/,/g, ''));
        }

        if (this.state.state == false) {
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
      
        return (
            <>
              <MapView
                showsUserLocation={true}
		            followsUserLocation={true}

                style={{
                    height: this.props.height,
                    width: this.props.width,
                    borderRadius: 10
                }}

                region={{
                    latitude: latitudeS,
                    longitude: longitudeS,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
              >
                  {this.AlertData.map((marker, index) => (
                    <Marker
                      key={index}
                      coordinate={marker.coordinate}
                      title={"marker.description"}
                      description={marker.description}
                    />
                  ))}
              </MapView>
            </>
        );
    }
  }

  */