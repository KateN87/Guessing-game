import { Text, View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstructionText from "../components/InstructionText";
import Colors from "../constants/colors";
import Card from "../components/Card";
import LogItem from "../components/LogItem";

const generateRandomBetween = (min, max, exclude) => {
	const rndNr = Math.floor(Math.random() * (max - min) + min);
	if (rndNr === exclude) {
		generateRandomBetween(min, max, exclude);
	} else {
		return rndNr;
	}
};

let minBoundary = 1;
let maxBoundary = 100;

export default GameScreen = ({ pickedNumber, gameOverHandler, setRounds }) => {
	const initialGuess = generateRandomBetween(1, 100, pickedNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === pickedNumber) {
			console.log("You win");
			gameOverHandler();
		}
	}, [currentGuess, pickedNumber]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	function nextGuess(direction) {
		//direction: "higher"/"lower"

		console.log("MinB", minBoundary);
		console.log("maxB", maxBoundary);

		if (
			(direction === "lower" && pickedNumber > currentGuess) ||
			(direction === "higher" && pickedNumber < currentGuess)
		) {
			Alert.alert("Don't lie!", `Your number is ${pickedNumber}`, [
				{
					text: "OK",
					style: "cancel",
				},
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess;
		}
		const newRndNr = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setRounds((prev) => prev + 1);
		setCurrentGuess(newRndNr);
	}

	return (
		<View style={styles.container}>
			<Title>Opponents guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instruction}>
					Higher or Lower?
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton pressHandler={() => nextGuess("lower")}>
							<AntDesign
								name='minuscircleo'
								size={24}
								color={Colors.accent500}
							/>
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton pressHandler={() => nextGuess("higher")}>
							<AntDesign
								name='pluscircleo'
								size={24}
								color={Colors.accent500}
							/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		marginTop: 20,
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	instruction: {
		marginBottom: 12,
	},
});
