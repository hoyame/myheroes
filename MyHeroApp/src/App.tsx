import 'es6-symbol/implement';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default class App extends React.Component {
  public render() {
    return (
      <View style={styles.flex}>
        <Text style={{
          fontSize: 40
        }}>Hello World</Text>
      </View>
    );
  }
}
