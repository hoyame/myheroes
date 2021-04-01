import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimesCircle, faUser, faQuestionCircle, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';


const App = () => {
  const AlertProps = () => {
    return (
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        backgroundColor: '#d80000'
      }}>
        <View>  
          <Text>ID</Text>
          <Text>Createur</Text>
          <Text>Description</Text>
          <Text>Date</Text>
          <Text>Location</Text>
        </View>

        <View>  
          <TouchableOpacity>
            <FontAwesomeIcon style={{
              
            }} size={28} icon={ faTimesCircle } />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{
      paddingTop: 60,
      padding: 35,
      
    }}>

    <ScrollView>
      <Text style={{
        fontSize: 30,
        fontWeight: '600',
        marginBottom: 30
      }}>Alertes</Text>

      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
      <AlertProps />
    </ScrollView>
      </View>
  );
};

export default App;
