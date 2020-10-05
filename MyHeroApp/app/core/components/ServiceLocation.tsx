/*

import React, { Component } from 'react';
import { ScrollView, Text, View, Slider, Keyboard } from 'react-native';
import _ from 'lodash';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { Button, FloatingLabelInput } from '../../components/UI';
import { colors, globalStyles } from '../../shared/styles';
import { getLocationFromAddress } from '../../api';


class ServiceLocation extends Component {
	state = {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.7284139050434533,
			longitudeDelta: 1.5484332778314212
		},
		center: {
			latitude: 37.78825,
			longitude: -122.4324
		},
		radius: 1609.34
	};

	// update location debounced to limit api call
	updateLocation = _.debounce(async (text: string | any[]) => {
		// if empty the text box, go to current location
		if (text.length < 2) {
			const { coords } = this.props.userLocation;
			this.setState((prevState) => ({
				region: {
					latitude: coords.latitude,
					longitude: coords.longitude,
					latitudeDelta: prevState.region.latitudeDelta,
					longitudeDelta: prevState.region.longitudeDelta
				},
				center: {
					latitude: coords.latitude,
					longitude: coords.longitude
				}
			}));
		} else {
			// update map to new location
			const newAddress = await getLocationFromAddress(text);
			if (newAddress) {
				this.setState((prevState) => ({
					region: {
						latitude: newAddress.latitude,
						longitude: newAddress.longitude,
						latitudeDelta: prevState.region.latitudeDelta,
						longitudeDelta: prevState.region.longitudeDelta
					},
					center: {
						latitude: newAddress.latitude,
						longitude: newAddress.longitude
					}
				}));
			}
		}
	}, 500);

	componentDidMount() {
		if (this.props.userLocation) {
			const { coords } = this.props.userLocation;
			const region = {
				latitude: coords.latitude,
				longitude: coords.longitude,
				latitudeDelta: 0.03215,
				longitudeDelta: 0.0683
			};
			const center = {
				latitude: coords.latitude,
				longitude: coords.longitude
			};
			this.setState({ region, center });
		}
	}

	onNext = () => {
		// make sure there are no miles, if the user do not deliver
		if (!this.props.state.hasDelivery) {
			this.props.milesChange(null);
		}
		this.props.onNext();
		Keyboard.dismiss();
	};

	onLocationChange = async (text: any) => {
		this.props.locationChange(text);
		this.updateLocation(text);
	};

	// update map with miles
	onMilesChange = (value: number) => {
		this.props.milesChange(value);
		this.setState((prevState) => ({
			radius: value * 1609.34,
			region: {
				latitude: prevState.region.latitude,
				longitude: prevState.region.longitude,
				latitudeDelta: 0.03215 * value,
				longitudeDelta: 0.0683 * value
			}
		}));
	};
}

function mapStateToProps(state: { location: { data: any; }; }) {
	return {
		userLocation: state.location.data
	};
}


export default connect(mapStateToProps)(ServiceLocation);


*/