import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default LogItem = ({ round, guess }) => {
	return (
		<View style={styles.container}>
			<Text>#{round}</Text>
			<Text>Opponents guess: {guess}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 12,
		marginVertical: 8,
		backgroundColor: Colors.accent500,
		flexDirection: "row",
	},
});
