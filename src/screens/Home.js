import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Menu from "../Components/Menu";

const Home = () => {
  let description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl rutrum, pulvinar sapien ornare, facilisis orci. Hello at nisl rutrum, pulvinar sapien ornare, facilisis orci.";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require("../../assets/logo.jpg")}
        />
        <Text style={styles.heading}> Welcome to </Text>
        <Text
          style={[
            styles.heading,
            {
              color: "#4c5dab",
              marginTop: 0,
              fontSize: 33,
            },
          ]}
        >
          Shekhar Classes
        </Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.navbarContainer}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={styles.lineStyle}></View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerImg: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    marginTop: 50,
    borderRadius: 20,
    resizeMode: "contain",
    alignItems: "stretch",
  },
  heading: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontFamily: "Nunito_600SemiBold",
  },
  description: {
    textAlign: "left",
    fontSize: 20,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: "JosefinSans_400Regular",
  },
  lineStyle: {
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 0.5,
  },
  navbarContainer: {
    marginBottom: 40,
  },
});
