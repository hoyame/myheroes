import { faBell, faCog, faComments, faHome, faInfoCircle, faLock, faMapSigns, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { ScrollView, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useReduxState } from "../../data/store";
import { PulseIndicator } from "react-native-indicators";
import I18n from "../../i18n/i18n";
import { setCacheNav } from "../../data/actions/user";
import { useDispatch } from "react-redux";
import HeaderComponent from "../../components/Header/header";
import ButtonComponent from "../../components/Button";

const NavScreen = ({ navigation }) => {
	const screenWidth = Math.round(Dimensions.get("window").width);
	const statusHelp = useReduxState(state => state.user.help.status);
	const statusSend = useReduxState(state => state.user.send.status);
	const createAlertLevel = useReduxState(state => state.user.createAlertLevel);

	const dispatch = useDispatch();

	const returnColor = (alert: number) => {
		switch (alert) {
			case 1:
				return "#ffd100";
			case 2:
				return "#ff9600";
			case 3:
				return "#d80000";
			default:
				return "";
		}
	};

	interface IPropsNav {
		title: string;
		description: string;
		onClick?: any;
		fontAwesome?: any;
		color: string;
	}

	interface IAlertPropsNav {
		title: string;
		color: string;
		description: string;
		onClick?: any;
		//fontAwesome?: any;
	}

	const PropsNav = (props: IPropsNav) => {
		return (
			<TouchableOpacity onPress={props.onClick}>
				<View
					style={{
						height: 77.5,
						width: screenWidth - 70,
						borderRadius: 15,
						marginBottom: 15,
						backgroundColor: props.color,
						display: "flex",
						flexDirection: "row",
					}}>
					<View
						style={{
							paddingLeft: 15,
							justifyContent: "center",
						}}>
						<Text
							style={{
								fontSize: 22,
								color: "#ffffff",
							}}>
							{props.title}
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: "#f0f0f0",
							}}>
							{props.description}
						</Text>
					</View>

					<View
						style={{
							position: "absolute",
							top: 15,
							right: 0,
							height: 55,
							width: 55,
							margin: 7.5,
							borderRadius: 7.5,
							opacity: 0.6,
							//backgroundColor: "#434343",
						}}>
						{props.fontAwesome && <FontAwesomeIcon icon={props.fontAwesome} size={35} style={{ color: "#ffffff" }} />}
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	const AlertPropsNav = (props: IAlertPropsNav) => {
		return (
			<TouchableOpacity onPress={props.onClick}>
				<View
					style={{
						height: 70,
						width: screenWidth - 70,
						borderRadius: 15,
						marginBottom: 15,
						backgroundColor: props.color,
						display: "flex",
						flexDirection: "row",
					}}>
					<View
						style={{
							height: 55,
							width: 55,
							margin: 7.5,
							borderRadius: 7.5,
							//backgroundColor: "#434343",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<PulseIndicator color="white" />
					</View>

					<View
						style={{
							paddingTop: 10,
						}}>
						<Text
							style={{
								fontSize: 24,
								color: "white",
							}}>
							{I18n.t("alertInProgress")}
						</Text>
						<Text
							style={{
								fontSize: 15,
								color: "white",
							}}>
							{I18n.t("alertInProgressDesc")}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<>
			<HeaderComponent redirect="Home" title={I18n.t("menu")} navigation={navigation} />

			<View
				style={{
					display: "flex",
					paddingLeft: 35,
					paddingRight: 22.5,
					paddingBottom: 35,
				}}>
				<ScrollView>
					<View
						style={{
							marginTop: 0,
							marginBottom: 130,
						}}>
						{statusSend == true && (
							<AlertPropsNav
								color={returnColor(createAlertLevel)}
								onClick={() => {
									dispatch(setCacheNav("Nav"));
									navigation.navigate("SenderAcceptAlertPage");
								}}
								title=""
								description=""
							/>
						)}

						{statusHelp == true && (
							<AlertPropsNav
								color="#1f7ceb"
								onClick={() => {
									dispatch(setCacheNav("Nav"));
									navigation.navigate("HelperAcceptAlertPage");
								}}
								title=""
								description=""
							/>
						)}

						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Map");
							}}
							title={I18n.t("carte")}
							icon={faMapSigns}
							color="#FCCA1C"
						/>
						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Alert");
							}}
							title={I18n.t("alertes")}
							icon={faBell}
							color="#E63B25"
						/>
						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Avis");
							}}
							title={I18n.t("avis")}
							icon={faComments}
							color="#701CFC"
						/>
						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Parametres");
							}}
							title={I18n.t("parametres")}
							icon={faCog}
							color="#1F7CEB"
						/>
						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Confidentialite");
							}}
							title={I18n.t("confidentiality")}
							icon={faLock}
							color="#B0F50A"
						/>
						<ButtonComponent
							onClick={() => {
								dispatch(setCacheNav("Nav"));
								navigation.navigate("Propos");
							}}
							title={I18n.t("apropos")}
							icon={faInfoCircle}
							color="#FC9A21"
						/>
					</View>
				</ScrollView>
			</View>
		</>
	);
};

export default NavScreen;
