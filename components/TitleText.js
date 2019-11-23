import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = props => (
  <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
);
// BASICALLY, WE ARE SAYING WITH THE FIRST SPREAD SYNTAX - TAKE STYLES FROM HERE AND IN STYLES AND THEN
// THE SECOND SPREAD IS TO OVERRIDE THE SET STYLES WITH PTOPS IN OTHER COMPONENTS
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18
  }
});

export default TitleText;
