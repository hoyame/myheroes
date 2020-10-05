import { Constants } from "expo";
import React, { Component } from "react";
import { Platform, View, Text } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class MapScreen extends Component {
    state = {
      location: null,
      errorMessage: '',
    };
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    };
  
    render() {
        this._getLocationAsync();
        let text = 'Waiting..';
        if (this.state.errorMessage) {
          text = this.state.errorMessage;
        } else if (this.state.location) {
          text = JSON.stringify(this.state.location);
        }
      
        return (
          <View style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
          }}>
            <Text>{text}</Text>
          </View>
        );
    }
  }