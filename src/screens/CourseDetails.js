import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import CoursesApi from "../api/courseApi";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  console.log(id);

  const selectedCourse = CoursesApi.find((elem) => {
    return id === elem.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>
        <View>
          <Image
            source={selectedCourse.image}
            style={styles.cardImg}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>{selectedCourse.title}</Text>
        <Text style={styles.description}>{selectedCourse.description}</Text>
        <View style={styles.syllabusContainer}>
          <Text style={styles.syllabusHeading}>What Will You Learn</Text>
          <View style={styles.syllabus}>
            <Text style={styles.syllabusText}>1. {selectedCourse.course1}</Text>
            <Text style={styles.syllabusText}>2. {selectedCourse.course2}</Text>
            <Text style={styles.syllabusText}>3. {selectedCourse.course3}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}>̥₹ {selectedCourse.price}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Course");
            }}
          >
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal: 20,
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
    textAlign: "justify",
    fontFamily: "JosefinSans_400Regular",
  },
  syllabusContainer: {
    marginVertical: 20,
  },
  syllabusHeading: {
    color: "#344055",
    fontSize: 20,
    textTransform: "uppercase",
    paddingBottom: 10,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  syllabus: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  syllabusText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  price: {
    backgroundColor: "#282C35",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
  },
  button: {
    backgroundColor: "#809fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
  },
});
