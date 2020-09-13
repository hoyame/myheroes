import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from '../../core/components/Themed';
import EditScreenInfo from '../../core/components/EditScreenInfo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import HeaderComponent from '../components/Header';
import HomeButtonComponent from '../components/HomeButtons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    }
});

const AlertScreen = () => {
    const AlertProps = () => {
        return (
            <TouchableHighlight
                activeOpacity={0.8}
                onPress={() => null}
            >
                <View style={{
                    height: 70,
                    width: 320,
                    backgroundColor: 'rgb(34, 34, 34)',
                    borderRadius: 7.5,
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 7.5
                }}>
                    <View style={{
                        height: 55,
                        width: 55,
                        margin: 7.5, 
                        borderRadius: 50,
                        opacity: 0.60,
                    }}>
                        <FontAwesomeIcon icon={faExclamationCircle} size={35} style={{
                          margin: 10,
                          color: '#fff'
                        }}></FontAwesomeIcon>
                    </View>

                    <View style={{
                        backgroundColor: 'transparent',

                    }}>   
                        <Text style={{
                            fontSize: 20,
                            marginTop: 10,
                            marginLeft: 10,
                            color: "#EDDFEF"
                        }}>Alerte Rouge</Text>

                        <Text style={{
                            fontSize: 15,
                            marginTop: 5,
                            marginLeft: 10,
                            color: "#94958B"
                        }}>A 200m sur Chambery</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    return (
        <View style={styles.container}>
            <HeaderComponent />

            <View style={{
                marginTop: 200,
            }}>
                <ScrollView>
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
                    <AlertProps />
                    <AlertProps />
                </ScrollView>
            </View>
        </View>
    );
}

export default AlertScreen;