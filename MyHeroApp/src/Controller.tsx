import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import store from '../o-src/data/store';
import { setLocalisation } from '../o-src/data/actions/localisation';
import { MyHeroService } from '../o-src/Service';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const Controller = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);

  
  return (
    <>
      <Text>zfon</Text>
    </>
  );
}

export default Controller;
