import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faAlignLeft, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { Component, useState } from "react";
import { Platform, View, Text, Dimensions, Image, TouchableHighlight } from "react-native";
import { useReduxState } from "../../data/store";
import MapComponent from "./service";


interface IHeader {
  navigation: any;
  map?: boolean
}

const MapScreen = ({ navigation }) => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [dark, setDark] = useState(false);
  const image = useReduxState(state => state.user.image);

  const mapstyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]
    
  const HeaderComponent = (props: IHeader) => {
    const screenWidth = Math.round(Dimensions.get('window').width - 70);
    const map = props.map || false
    
    return (
        <View style={{
            position: "absolute",
            marginTop: 20,
            padding: 35,
        }}>
            <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenWidth
            }}>
                <TouchableHighlight
                    style={{
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#bebebe"
                    onPress={() => props.navigation.navigate('Nav')}
                >
                
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 65,
                        width: 65,
                        borderRadius: 50,
                        backgroundColor: "#E1E1E1"
                    }}>
                        <FontAwesomeIcon icon={faAlignLeft} size={25} style={{
                            marginTop: 20,
                            justifyContent: "center"
                        }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#bebebe"
                    onPress={() => setDark(!dark)}
                >
                
                    <View style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",

                        height: 50,
                        width: 50,
                        borderRadius: 50,
                        backgroundColor: "#E1E1E1"
                    }}>
                        <FontAwesomeIcon icon={dark == false ? faMoon : faSun } size={18} style={{
                          color: "yellow"
                        }} />
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={{
                        borderRadius: 50
                    }}

                    activeOpacity={0.5}
                    underlayColor="#DDDDDD"
                    onPress={() => props.navigation.navigate('Account')}
                >                
                    <Image
                        key={Date.now()} 
                        style={{
                            height: 65,
                            width: 65,
                            borderRadius: 50,
                        }}

                        source={{
                            uri: image,
                        }}
                    />
                </TouchableHighlight>   
            </View>
        </View>
    );
  }

  return (
    <View>
      <MapComponent dmdm={dark == true && mapstyle} nav={navigation} height={screenHeight} width={screenWidth} />
      <HeaderComponent navigation={navigation} />
    </View>
  );
}

export default MapScreen;