import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generatedRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generatedRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

// A FUNCTIONAL COMPONENT

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generatedRandomBetween(1, 100, props.userChoice)
  );

  return(
    <View>
        <Text>Oppoent's Guess</Text>
    </View>
    <NumberContainer>{currentGuess}</NumberContainer>
  );
};

const styles = StyleSheet.create({});

export default GameScreen;
