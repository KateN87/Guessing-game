import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "./constants/colors";

import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
	const [pickedNumber, setPickedNumber] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [rounds, setRounds] = useState(0);

	let screen = <GameStartScreen setPickedNumber={setPickedNumber} />;

	const restartHandler = () => {
		setPickedNumber(null);
		setGameIsOver(false);
		setRounds(0);
		console.log("restart game");
	};

	if (pickedNumber) {
		screen = (
			<GameScreen
				pickedNumber={pickedNumber}
				gameOverHandler={() => setGameIsOver(true)}
				setRounds={setRounds}
			/>
		);
	}

	if (gameIsOver) {
		screen = (
			<GameOverScreen
				pickedNumber={pickedNumber}
				rounds={rounds}
				restartHandler={restartHandler}
			/>
		);
	}

	return (
		<>
			<StatusBar backgroundColor='#fb61a4' style='light' />
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require("./assets/background.png")}
					resizeMode='cover'
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}
				>
					{screen}
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
