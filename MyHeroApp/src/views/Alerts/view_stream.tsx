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
import { Button } from 'react-native';
import WebRTC from '../../utils/WebRTC';



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
    const [selfViewSrc, setSelfViewSrc] = useState("");
    const [state, setState] = useState({
      remoteStreamURL: '',
    })

    const [isFront, setFront] = useState(true)

    const onConnect = () => {
      const configuration = { 
        "iceServers": [
          {"url": "stun:stun.l.google.com:19302"}
        ] 
      };
      const pc = new RTCPeerConnection(configuration);

      mediaDevices.enumerateDevices().then(sourceInfos => {
        console.log(sourceInfos);
        let videoSourceId;
        for (let i = 0; i < sourceInfos.length; i++) {
          const sourceInfo = sourceInfos[i];
          if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
            videoSourceId = sourceInfo.deviceId;
          }
        }
        mediaDevices.getUserMedia({
          audio: true,
          video: {
            //width: 640,
            //height: 480,
            //frameRate: 30
            facingMode: (isFront ? "user" : "environment"),
            deviceId: videoSourceId
          }
        })
        .then((stream: any) => {
          // Got stream!
          setState({...state, remoteStreamURL: stream.toURL()});
        })
        .catch(error => {
          // Log error
        });
      });
      
    }

    return (
        <>
          <RTCView
              streamURL={state.remoteStreamURL}
              style={{width: 300, height: 300, alignSelf: 'center'}} 
          />
          
          <Button onPress={onConnect} title='Connect' />

          <HeaderComponent title='' navigation={navigation} redirect='Home' />
        </>
    );
}

export default ViewStream;