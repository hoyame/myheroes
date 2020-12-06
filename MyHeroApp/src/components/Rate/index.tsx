import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { faFileAlt, faStar as Zei } from '@fortawesome/free-solid-svg-icons';
import { faStar as Zeo } from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputComponent from '../../views/Alerts/input';

interface IRate {
    title: string;
    placeholder: string;
    onClick?: any;

    description: any;
    rate: any;

    setDescription: any;
    setRate: any;
}

const RateComponent = (props: IRate) => {
    const rate = props.rate;
    const description = props.description;

    const setRate = props.setRate;
    const setDescription = props.setDescription;

    interface IStars {
        rate: number
    }

    const ReturnStars = (props: IStars) => {
        const rate = props.rate || 0
        const color = "#febc00"
        const size = 35;

        switch (rate) {
            case 1: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                );
            case 2: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                );
            case 3:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                );
            case 4:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                );
            case 5:
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zei} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                );
            default: 
                return (
                    <View style={{
                        display: "flex",
                        flexDirection: "row"
                    }}>
                        <TouchableOpacity onPress={() => setRate(1)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => setRate(2)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(3)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(4)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setRate(5)}>
                            <FontAwesomeIcon icon={Zeo} size={size} style={{color: color}} />
                        </TouchableOpacity>
                    </View>
                )
            ;
        }
    }

    return (
            <View style={{
                display: "flex",
                height: 150,
                borderRadius: 8,
                marginBottom: 15
            }}>
                <Text style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginBottom: 15
                }}>{props.title}</Text>

                <View style={{
                    alignItems: "center"
                }}>
                    <ReturnStars rate={rate}/>

                    <View style={{
                        marginTop: 25,
                    }}>
                        <InputComponent 
                            height={65} 
                            name={props.title}
                            placeholder={props.placeholder}
                            value={description} 
                            icon={faFileAlt} 
                            onChange={(v: string) => setDescription(v)} 
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={props.onClick}>
                    <View style={{
                            height: 60, 
                            borderRadius:15,
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: '#3497FD'      
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: "#ffffff",
                            }}>Publier</Text>
                        </View>
                </TouchableOpacity>
            </View>
    );
}

export default RateComponent;