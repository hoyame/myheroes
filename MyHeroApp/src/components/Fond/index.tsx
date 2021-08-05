import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text } from "react-native";

const FondComponent = () => {
	return (
		<>
			<FontAwesomeIcon
				icon={faCircle}
				size={240}
				style={{
					position: "absolute",
					top: 150,
					right: -150,
					color: "#008B00",
				}}
			/>

			<FontAwesomeIcon
				icon={faCircle}
				size={150}
				style={{
					position: "absolute",
					top: 260,
					left: -50,
					color: "#E63B25",
				}}
			/>

			<FontAwesomeIcon
				icon={faCircle}
				size={120}
				style={{
					position: "absolute",
					bottom: -60,
					right: -50,
					color: "#1F7CEB",
				}}
			/>

			<FontAwesomeIcon
				icon={faCircle}
				size={120}
				style={{
					position: "absolute",
					top: -60,
					left: -50,
					color: "#FC9A21",
				}}
			/>

			<FontAwesomeIcon
				icon={faCircle}
				size={70}
				style={{
					position: "absolute",
					bottom: -30,
					left: 90,
					color: "#FCCA1C",
				}}
			/>
		</>
	);
};

export default FondComponent;
