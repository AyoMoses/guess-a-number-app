import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

// A FUNCTIONAL COMPONENT
const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          maxLength={2}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          </View>
          <View style={styles.buttons}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
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
  }
});

export default StartGameScreen;
