import { faHome, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/Header/header';
import InputComponent from '../../components/Input/input';
import { useReduxState } from '../../data/store';

const ParametresScreen = ({ navigation }) => {
    const image = useReduxState(state => state.user.image);
    const name = useReduxState(state => state.user.name);
    const xp = useReduxState(state => state.user.xp);


    const [state, setState] = useState({
        password: '',
        cPassword: ''
    })
 
    return (
        <>
            <HeaderComponent navigation={navigation} />

            <View style={{
                padding: 35,
                paddingTop: 0
            }}>
                <Text style={{
                    fontSize: 30,
                    marginBottom: 15
                }}>Parametres du compte</Text>

                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 0,
                }}>
                    <Image 
                        source={{uri: image}}
                        style={{
                            height: 80,
                            width: 80,
                            borderRadius: 10,
                            marginBottom: 20
                        }}
                    />

                    <View style={{
                        height: 80,
                        justifyContent: "center",
                        marginLeft: 15
                    }}>
                        <Text style={{
                            fontSize: 30
                        }}>
                            {name}
                        </Text>

                        <Text style={{
                            color: "#778899",
                            fontSize: 25
                        }}>
                            {xp} XP
                        </Text>
                    </View>
                </View>


                <InputComponent password={true} name="Mot de passe" placeholder="Mot de passe" value={state.password} icon={faLock} onChange={(v: string) => setState({...state, password: v})} />
                <InputComponent password={true} name="Confirmer son mot de passe" placeholder="Confirmer son mdp" value={state.cPassword} icon={faLock} onChange={(v: string) => setState({...state, cPassword: v})} />

                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#000000'
                        }}>Changer son mot de passe</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#e1e1e1'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#000000'
                        }}>Changer son avatar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 50, 
                        borderRadius: 7.5,
                        marginBottom: 10,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: '#d80000'           
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#ffffff'
                        }}>Se deconnecter</Text>
                    </View>
                </TouchableOpacity>
            </View>  
        </>
    );
}

export default ParametresScreen;