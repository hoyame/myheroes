import { waitForDebugger } from "inspector";
import React from "react";
import { View, Text, TouchableHighlight, Image, Platform } from "react-native";
import { Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faAlignLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useReduxState } from "../../data/store";

interface IHeader {
	navigation: any;
	map?: boolean;
}

const HeaderComponent = (props: IHeader) => {
	const screenWidth = Math.round(Dimensions.get("window").width - 70);
	const map = props.map || false;
	const image = useReduxState(state => state.user.image);

	return (
		<View
			style={{
				position: "absolute",
				marginTop: 20,
				padding: 35,
			}}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: screenWidth,
				}}>
				<TouchableHighlight
					style={{
						borderRadius: 50,
					}}
					activeOpacity={0.5}
					underlayColor="#bebebe"
					onPress={() => props.navigation.navigate("Nav")}>
					<View
						style={{
							display: "flex",
							alignItems: "center",
							height: 65,
							width: 65,
							borderRadius: 50,
							backgroundColor: "#E1E1E1",
						}}>
						<FontAwesomeIcon
							icon={faArrowLeft}
							size={25}
							style={{
								marginTop: 20,
								justifyContent: "center",
							}}
						/>
					</View>
				</TouchableHighlight>

				<TouchableHighlight
					style={{
						borderRadius: 50,
					}}
					activeOpacity={0.5}
					underlayColor="#DDDDDD"
					onPress={() => props.navigation.navigate("Account")}>
					<Image
						key={Date.now()}
						style={{
							height: 65,
							width: 65,
							borderRadius: 50,
						}}
						source={{
							uri: image,
						}}
					/>
				</TouchableHighlight>
			</View>
		</View>
	);
};

export default HeaderComponent;
