import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CoursesApi from "../api/courseApi";

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              source={item.image}
              style={styles.cardImg}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Course Details", {
                  courseId: item.id,
                });
              }}
            >
              <Text style={styles.buttonText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={CoursesApi}
      renderItem={courseCard}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Course;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  cardImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 20,
  },
  title: {
    color: "#344055",
    fontSize: 22,
    textTransform: "uppercase",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  description: {
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 18,
    fontFamily: "JosefinSans_400Regular",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#809fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
  },
});
