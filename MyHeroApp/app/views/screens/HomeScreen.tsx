import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../core/components/Themed';
import EditScreenInfo from '../../core/components/EditScreenInfo';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 100,
    width: 340,
    backgroundColor: 'red',
    borderRadius: 7,
  },


  
});

const HomeScreen = () => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://images-ext-1.discordapp.net/external/XHlQi8Re73G4f6N_3TyXE8R_UK6bfcWA7bKhts0veYE/https/images-ext-2.discordapp.net/external/uhzCUPl-J-6IZSl7S7rdFHiUyVuq9smuQ6sI1TONLnE/https/static-cdn.jtvnw.net/jtv_user_pictures/e31e5447-8737-4351-8aa4-542c63852d16-profile_image-300x300.png'}}
          style={{width: 50, height: 50, borderRadius: 50, marginLeft: 260}} 
        />
        
        <View style={{
          height: 50,
          width: 50,
          marginTop: -50,
          marginLeft: 5,
          borderRadius: 50,
          backgroundColor: '#eff1fe'
        }}>
          <FontAwesomeIcon icon={faAlignLeft} style={{
            height: 80,
            width: 80,
            marginTop: 16.5,
            marginLeft: 16.5
          }} />
        </View>

        <Text style={{
          fontSize: 30,
          marginTop: 35,
          marginLeft: 7.5
        }}>
          Bonjour Hoyame :)
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />

      <TouchableHighlight
        activeOpacity={0.8}
        onPress={() => null}
      >
          <View style={{
            height: 100,
            width: 340,
            backgroundColor: 'red',
            borderRadius: 7
          }}>
              <Text style={{
                fontSize: 40
              }}>
                Besoin d'aide ?
              </Text>

          </View>
      </TouchableHighlight>

      
    </View>
  );
}

export default HomeScreen;