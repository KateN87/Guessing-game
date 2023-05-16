import { Pressable, StyleSheet, Text, View } from "react-native";

export default PrimaryButton = ({ children, pressHandler }) => {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: [styles.buttonInnerContainer]
				}
				onPress={pressHandler}
				android_ripple={{ color: "#640233" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonOuterContainer: {
		flexDirection: "row",
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
		justifyContent: "center",
	},
	buttonInnerContainer: {
		flex: 1,
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	pressed: {
		opacity: 0.75,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
