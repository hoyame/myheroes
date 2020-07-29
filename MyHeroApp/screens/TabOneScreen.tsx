import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


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
  title: {
    //marginTop: -100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const TabOneScreen = () => {
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
        
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

export default TabOneScreen;