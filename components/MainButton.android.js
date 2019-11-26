import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import colors from "../constants/colors";

// IN THE <Text> FOR GLOABAL USE YOU CAN MAKE IT <Ionicons></Ionicons>

const MainButton = props => {
  // WE USE A REACT FEATURE TO INTEGRATE A RIPPLE EFFECT FOR ANDROID
  let ButtonComponent = TouchableOpacity;

  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  // IF PLATFORM IS ANDROID AND VERSION OF ANDROID IS HIGHER THAN 21, USE TouchableNativeFeedback

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden'
  },
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
