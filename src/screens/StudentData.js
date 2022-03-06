import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useState, useEffect } from "react";

const StudentData = () => {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const res = await fetch(
        "https://shekhar404.github.io/data/StudentsData.json"
      );
      const actualData = await res.json();
      setMyData(actualData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUserData(), []);

  const showUserData = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image style={styles.img} source={{ uri: item.photo }} />

          <View style={styles.textContainer}>
            <View>
              <Text style={styles.text}>Name: {item.name}</Text>
              <Text style={styles.text}>Email: {item.emailId}</Text>
              <Text style={styles.text}>Mobile: {item.mobileNo}</Text>
            </View>
            <View>
              <Text style={styles.idNum}>
                {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return <FlatList data={myData} renderItem={showUserData} />;
};

export default StudentData;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },

  img: {
    borderRadius: 20,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

  idNum: {
    color: "#353535",
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
  },
  text: {
    color: "#344055",
    fontFamily: "JosefinSans_400Regular",
    fontSize: 22,
    lineHeight: 30,
  },
});
