import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    //   WE COPY THE VALUES IN CARD BY USING A SPREAD OPERATOR FOR CARD
    // WE THEN USE ANOTHER KEY VALUE PAIR WHICH WILL ORRIDER ANY STYLE SET AFTER THE INITIAL
    // ADDITIONAL STYLE OUTSIDE THE COMPONENT WILL ALSO BE MERGED
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    elevation: 8, //makes shadow visible in andorid
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5 //individual border radius is allowed to be styled too
  }
});

export default Card;
