import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../constants/colors";

// IN THE <Text> FOR GLOABAL USE YOU CAN MAKE IT <Ionicons></Ionicons>

const MainButton = props => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={props.onPress}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center"
  }
});

export default MainButton;
