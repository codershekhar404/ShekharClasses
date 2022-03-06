import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Btn = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(props.Screen)}>
        <Image source={props.imgSrc} style={styles.imgStyle} />
      </TouchableOpacity>
    </View>
  );
};

const Menu = () => {
  return (
    <View style={styles.navBar}>
      <Btn
        Screen="Course"
        imgSrc={{
          uri: "https://img.icons8.com/stickers/100/000000/training.png",
        }}
      />
      <Btn
        Screen="Students"
        imgSrc={{
          uri: "https://img.icons8.com/stickers/100/000000/conference.png",
        }}
      />
      <Btn
        Screen="Contact"
        imgSrc={{
          uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
        }}
      />
      <Btn
        Screen="About"
        imgSrc={{ uri: "https://img.icons8.com/stickers/100/000000/about.png" }}
      />
    </View>
  );
};

export default Menu;
const styles = StyleSheet.create({
  imgStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
  navBar: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
});
