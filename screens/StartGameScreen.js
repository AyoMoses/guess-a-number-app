import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

// A FUNCTIONAL COMPONENT
const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false); //confirm if user is ready to move on and intial state is false
  const [selectedNumber, setSlectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, "")); //regex to check for input not a number globally in the input
  }; //will be connected to the inputText to validate

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  // TO CONTROL SCREEN ORIENTATION
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    }; //this makes sure our code reruns when dimensions change

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
      //this is CLEANING UP. remove event listener
    };
    //the 'change' event listener fires when user rotates device
  });

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
        <BodyText style={styles.chosenOutput}>You picked</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>

        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <TitleText style={styles.title}>Start a New Game</TitleText>

          <Card style={styles.inputContainer}>
            <BodyText>Select a Number</BodyText>
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
              <View style={{ width: buttonWidth }}>
                <Button
                  title="Reset"
                  onPress={resetInputHandler}
                  color={Colors.accent}
                />
              </View>
              <View style={{ width: buttonWidth }}>
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
    </ScrollView>
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
    marginVertical: 10,
    fontFamily: "open-sans-bold"
  },

  inputContainer: {
    width: "80%",
    // maxWidth: "80%",
    maxWidth: "95%", //to not exceed 95 of large screen
    minWidth: 300, //to cater for smaller screen devices
    alignItems: "center"
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  buttons: {
    // width: 130,
    // borderRadius: 8,
    // width: Dimensions.get('window').width / 4
    //Dimensions do not respect orientation changes as it loads once in app life cycle
    //each button takes times 4 of device they are in
    //its an API to help the the available pixel on width and height of devices RAD
    //percentage refers to the direct parent view
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
