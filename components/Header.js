import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import TitleText from '../components/TitleText';
import Colors from "../constants/colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    // IF OS IS ANDROID, MAKE BG PRIMARY ELSE WHITE
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerTitle: {
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default Header;
