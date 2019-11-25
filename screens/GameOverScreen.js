import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <ScrollView>
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

        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            It took computer
            <Text style={styles.highlight}> {props.roundsNumber} </Text> rounds
            to guess the number
            <Text style={styles.highlight}> {props.userNumber} </Text>
          </BodyText>

          <View style={styles.buttonWrap}>
            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2, //it has to be half of width and height hence, the 2
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden", //u can add this to stay safe of child overflowing
    marginVertical: Dimensions.get("window").height / 30 //2%
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 300
  },
  highlight: {
    color: colors.primary,
    fontWeight: "bold"
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  },
  resultContainer: {
    marginHorizontal: 30
  },
  buttonWrap: {
    marginTop: 30
  }
});

export default GameOverScreen;
