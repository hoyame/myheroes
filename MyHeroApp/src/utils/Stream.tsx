import { Platform, Dimensions } from 'react-native';
import { MediaStreamTrack, getUserMedia } from 'react-native-webrtc';

let localStream: any;
let otherStream: any;
let container: any;
let listContainer: any;
let currentType: null = null;
let streamerSocketId: null = null;
let randomDisplayName = null;

const setStreamerSocketId = (socketId: any) => {
  streamerSocketId = socketId;
};

const getStreamerSocketId = () => {
  return streamerSocketId;
};

const setCurrentType = (type: any) => {
  currentType = type;
};

const getCurrentType = () => {
  return currentType;
};

const setListContainer = (container: any) => {
  listContainer = container;
};

const getListContainer = () => {
  return listContainer;
};

const getContainer = () => {
  return container;
};

const setContainer = (newContainer: any) => {
  container = newContainer;
};

const setLocalStream = (stream: any) => {
  localStream = stream;
};

const getLocalStream = () => {
  return localStream;
};

const setOtherStream = (stream: any) => {
  otherStream = stream;
};

const getOtherStream = () => {
  return otherStream;
};

const getRandomAvatar = () => {
  const arrAvatar = [
    require('./assets/avatar_1.png'),
    require('./assets/avatar_2.png'),
    require('./assets/avatar_3.png'),
    require('./assets/avatar_4.png')
  ];
  const avatar = arrAvatar[Math.floor(Math.random() * arrAvatar.length)];
  return avatar;
};
const getLocalStreamDevice = (isFront: any, callback: (arg0: any) => void) => {
  let videoSourceId;
  if (Platform.OS === 'ios') {
    MediaStreamTrack.getSources((sourceInfos: string | any[]) => {
      console.log('sourceInfos: ', sourceInfos);
      for (const i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if (
          sourceInfo.kind == 'video' &&
          sourceInfo.facing == (isFront ? 'front' : 'back')
        ) {
          videoSourceId = sourceInfo.id;
        }
      }
    });
  }
  getUserMedia(
    {
      audio: true,
      video: {
        mandatory: {
          minWidth: 640,
          minHeight: 360,
          minFrameRate: 30
        },
        facingMode: isFront ? 'user' : 'environment',
        optional: videoSourceId ? [{ sourceId: videoSourceId }] : []
      }
    },
    function(stream: any) {
      console.log('getUserMedia success', stream);
      callback(stream);
    },
    (    error: string) => console.log('error : ' + error)
  );
};

const mapHash = (hash: { [x: string]: any; }, func: (arg0: any, arg1: string) => any) => {
  const array = [];
  for (const key in hash) {
    const obj = hash[key];
    array.push(func(obj, key));
  }
  return array;
};

const getRandomUsername = () => {
  const arrUsername = ['Michel Bay', 'Johnson Baby', 'Barack Obama'];
  const username = arrUsername[Math.floor(Math.random() * arrUsername.length)];
  return username;
};

const isNullOrUndefined = (value: null | undefined) => {
  return value === null || value === undefined;
};

const getDimensions = () => {
  return Dimensions.get('window');
};

const Utils = {
  getLocalStreamDevice,
  setLocalStream,
  getLocalStream,
  getContainer,
  setContainer,
  mapHash,
  getRandomUsername,
  isNullOrUndefined,
  getDimensions,
  setOtherStream,
  getOtherStream,
  getListContainer,
  setListContainer,
  getCurrentType,
  setCurrentType,
  getStreamerSocketId,
  setStreamerSocketId,
  getRandomAvatar
};

export default Utils;
