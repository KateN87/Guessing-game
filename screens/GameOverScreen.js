import { Text, View, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import GameStartScreen from "./GameStartScreen";

export default GameOverScreen = ({ pickedNumber, rounds, restartHandler }) => {
	const pressHandler = () => {
		setScreen(<GameStartScreen />);
	};
	return (
		<View style={styles.container}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image source={require("../assets/success.png")} style={styles.image} />
			</View>
			<Text style={styles.summary}>
				Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
				to guess the number <Text style={styles.highlight}>{pickedNumber}</Text>
			</Text>
			<PrimaryButton pressHandler={restartHandler}>
				Start New Game
			</PrimaryButton>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summary: {
		fontSize: 24,
		textAlign: "center",
		marginBottom: 24,
	},
	highlight: {
		color: Colors.primary500,
	},
});
