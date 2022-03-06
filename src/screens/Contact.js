import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [agree, setAgree] = useState(false);

  // submit form function
  const submit = () => {
    if (!name && !email && !phone && !msg) {
      Alert.alert("Please fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate("Home");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Level Up Your Knowledge</Text>
      <Text style={styles.subHeading}>
        You can reach us at anytime via shekhar@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(userData) => setName(userData)}
          placeholder={"vinod"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(userData) => setEmail(userData)}
          placeholder={"demo@gmail.com"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Mobile</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(userData) => setPhone(userData)}
          placeholder={"1234567890"}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can we help you?</Text>
        <TextInput
          style={[styles.input, styles.multiLineStyle]}
          value={msg}
          onChangeText={(userData) => setMsg(userData)}
          placeholder={"Tell us about your query"}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* checkbox */}
      <View style={styles.checkboxWrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.checkboxText}>I have read and agreed with T&C</Text>
      </View>

      {/* submit button */}
      <TouchableOpacity
        style={[
          styles.btn,
          {
            backgroundColor: agree ? "#4630EB" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={() => {
          submit();
        }}
      >
        <Text style={styles.btnText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeading: {
    fontSize: 23,
    color: "#344055",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
  },
  subHeading: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_500Medium",
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_500Medium",
    lineHeight: 25,
    fontSize: 16.5,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiLineStyle: {
    paddingVertical: 4,
  },
  checkboxWrapper: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 5,
  },
  checkboxText: {
    fontFamily: "JosefinSans_500Medium",
    marginLeft: 10,
  },
  btn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  btnText: {
    color: "#eee",
    fontSize: 18,
    fontFamily: "JosefinSans_500Medium",
  },
});
