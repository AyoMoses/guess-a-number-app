import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}

          // source={{
          //   uri:
          //     "https://robbreportedit.files.wordpress.com/2019/06/palm-beach-l.jpg?w=1000"
          // }} 
          //pass an object to source and uri to web image link for web image
          //RN does not know width and height of web images so set its size
          // U can use fade duration to dtermine how long the animation takes fadeDuration={1000} 300 is the default
          // After the first load, the image is cached and not donwloaded again and loads faster
          
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", //u can add this to stay safe of child overflowing
    marginVertical: 25
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300
  }
});

export default GameOverScreen;
