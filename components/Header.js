import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    //if u're not targetting platforms us can simple have header as object name
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center"
    // borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    // borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  },

  headerIOS: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },

  headerAndroid: {
    backgroundColor: Colors.primary
  },

  headerTitle: {
    color: Platform.OS === "android" ? "white" : Colors.primary
  }
});

export default Header;
