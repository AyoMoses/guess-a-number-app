import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);
// BASICALLY, WE ARE SAYING WITH THE FIRST SPREAD SYNTAX - TAKE STYLES FROM HERE AND IN STYLES AND THEN
// THE SECOND SPREAD IS TO OVERRIDE THE SET STYLES WITH PTOPS IN OTHER COMPONENTS

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans"
  }
});

export default BodyText;

// WE CAN USE DEFAULT STYLES AS GLOBAL STYLING FOR OUR APP IN CONSTANTS JUST LIKE WE HAVE FRO COLORS
