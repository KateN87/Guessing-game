import { Text, StyleSheet } from "react-native";
export default Title = ({ children }) => {
	return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		color: "white",
		textAlign: "center",
		borderWidth: 2,
		borderColor: "white",
		padding: 12,
		fontSize: 28,
		fontWeight: "bold",
	},
});
