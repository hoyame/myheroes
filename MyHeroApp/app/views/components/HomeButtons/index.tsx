import * as React from 'react'
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../../core/components/Themed';
import EditScreenInfo from '../../../core/components/EditScreenInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

interface IHomeButton {
    color: string;
    name: string;
}

const HomeButtonComponent = (props: IHomeButton) => {
    return (
        <TouchableHighlight
        activeOpacity={0.8}
        onPress={() => null}
      >
          <View style={{
            height: 170,
            width: 130,
            backgroundColor: props.color,
            borderRadius: 7,
            margin: 10
          }}>

            <View style={{
                height: 60,
                width: 60,
                borderRadius: 50,
                //backgroundColor: '#fff',
                opacity: 0.40,
                marginTop: 25,
                marginLeft: 35,
            }}>

            </View>

            <Text style={{
                fontSize: 22.5,
                marginTop: 30,
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
            }}>{props.name}</Text>

          </View>
      </TouchableHighlight>
    );
}

export default HomeButtonComponent;