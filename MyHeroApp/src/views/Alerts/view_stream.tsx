import React, { Component, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/Header/header';
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
import { Colors } from 'react-native/Libraries/NewAppScreen';


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
    const [stream, setStream] = useState(null);


    return (
        <>
            {
                stream &&

                <RTCView
                    streamURL={stream.toURL()}
                    style={styles.stream} 
                />
            }


            <HeaderComponent title='' navigation={navigation} redirect='Home' />
        </>
    );
}

export default ViewStream;