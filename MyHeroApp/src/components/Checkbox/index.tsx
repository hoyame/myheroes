import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface ICheckbox {
	cb: any;
}

const CheckBoxComponent = (p: ICheckbox) => {
	const [state, setState] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => {
				setState(!state);
				p.cb(!state);
			}}>
			<View
				style={{
					height: 20,
					width: 20,

					alignItems: "center",
					justifyContent: "center",
					borderRadius: 50,
					borderWidth: 1,
					borderColor: "#353A50",
				}}>
				{state && (
					<View
						style={{
							height: 15,
							width: 15,

							borderRadius: 50,
							backgroundColor: "#353A50",
						}}></View>
				)}
			</View>
		</TouchableOpacity>
	);
};

export default CheckBoxComponent;
