import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const GameStartScreen = ({ setPickedNumber }) => {
	const [enteredNumber, setEnteredNumber] = useState("");

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert("Invalid number", "Number has to be between 0 and 99", [
				{
					text: "ok",
					style: "destructive",
					onPress: () => setEnteredNumber(""),
				},
			]);
			return;
		} else {
			setPickedNumber(chosenNumber);
		}
	};

	return (
		<View style={styles.container}>
			<Title>Guess my Number</Title>
			<Card>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType='numeric'
					value={enteredNumber}
					onChangeText={setEnteredNumber}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton pressHandler={() => setEnteredNumber("")}>
							Reset
						</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton pressHandler={confirmInputHandler}>
							Confirm
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
		marginTop: 100,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 3,
		fontSize: 32,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
});

export default GameStartScreen;
