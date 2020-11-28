import React, { Component, useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import I18n from '../../i18n/i18n';
import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    mediaDevices,
    registerGlobals
} from 'react-native-webrtc';
import HeaderComponent from '../../components/Header/header';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native';
import WebRTC from '../../utils/WebRTC';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { MyHeroService } from '../../api/Service';
import { useReduxState } from '../../data/store';

interface IHeader {
  navigation: any;
  map?: boolean
}

const screenWidth = Math.round(Dimensions.get('window').width - 70);
const screenHeight = Math.round(Dimensions.get('window').height);


let load = false

const styles = StyleSheet.create({
    body: {
      backgroundColor: Colors.white,
    },
    stream: {
      flex: 1
    },
    footer: {
      backgroundColor: Colors.lighter,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    },
});

const ViewStream = ({ navigation }) => {
    const alertDataHelp = useReduxState(state => state.user.showAlert);
    const [state, setState] = useState({
      remoteStreamURL: '',
    })

    useEffect(() => {
      if (load == false) {
        setState({...state, remoteStreamURL: alertDataHelp.webrtc});
        load = true
      }
    })

    if (alertDataHelp.webrtc == "") {
      return (
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <Text>Une erreur est survenue</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={{color: 'red'}}>Retour a l'acceuil</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
        <>
          <HeaderComponent noMargin={true} title="" navigation={navigation} />

          <View style={{
            borderRadius: 10,
            marginTop: -75,
            width: screenWidth - 25, 
            height: screenHeight, 
            alignSelf: 'center'
          }}>

            <RTCView
                streamURL={state.remoteStreamURL}
                style={{ 
                  width: screenWidth - 25, 
                  height: screenHeight, 
                }} 
            />
          </View>
        </>
    );
}

export default ViewStream;