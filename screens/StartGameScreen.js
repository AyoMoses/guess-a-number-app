import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

// A FUNCTIONAL COMPONENT
const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false); //confirm if user is ready to move on and intial state is false
  const [selectedNumber, setSlectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, "")); //regex to check for input not a number globally in the input
  }; //will be connected to the inputText to validate

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 0 and 99.", [
        { text: "okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }

    setConfirmed(true);
    setSlectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  // SHOW INPUT OUTPUT CONFIRMATION
  // WE CHECK IF ITS CONFIRMED

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.chosenOutputContainer}>
        <Text style={styles.chosenOutput}>You picked</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>

        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler} //we feed the value back in and that is our entered value
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.buttons}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>

        {/* WE OUTPUT CONFIRMED NUMBER HERE */}
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 20,
    marginVertical: 10
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },

  buttons: {
    width: 130,
    padding: 20,
    borderRadius: 8
  },

  input: {
    width: 50,
    textAlign: "center"
  },

  chosenOutputContainer: {
    marginVertical: 20,
    padding: 20,
    alignItems: "center"
  },

  chosenOutput: {
    color: Colors.primary,
    textAlign: "center"
  }
});

export default StartGameScreen;
