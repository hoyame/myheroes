import * as React from 'react'
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../../core/components/Themed';
import EditScreenInfo from '../../../core/components/EditScreenInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

const HomeButtonComponent = () => {
    return (
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
    );
}

export default HomeButtonComponent;