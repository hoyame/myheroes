import React from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import Page from './Page';

const SOCKET_URL = 'http://176.31.230.112:3333';

export const socket = io.connect(SOCKET_URL, {
  transports: ['websocket'],
  reconnectionAttempts: 15, //Nombre de fois qu'il doit réessayer de se connecter
});

export let d1: React.SetStateAction<never[]> = [];
export let d2: React.SetStateAction<never[]> = [];
export let d3: React.SetStateAction<never[]> = [];

export const refresh = () => {
  axios
    .get(`${SOCKET_URL}/list/get`)
    .then(response => {
      const data = response.data;
      console.log('d2', data);
      d2 = data;
    })

    .catch(err => {
      e(false);
      console.log('err', err);
    });

  axios
    .get(`${SOCKET_URL}/list/get-verif`)
    .then(response => {
      const data = response.data;
      console.log('d3', data);
      d3 = data;
    })

    .catch(err => {
      console.log('err', err);
    });
};

const App = () => {
  socket.on('connect', function () {
    socket.emit('join', 0);
  });

  socket.on('get_alerts', function (data: any) {
    console.log('get_alerts', data);
    d1 = data;
  });

  setInterval(() => {
    refresh();
  }, 100000);

  return (
    <>
      <Page />
    </>
  );
};

export default App;
