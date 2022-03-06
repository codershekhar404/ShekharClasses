import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Shekhar Kumar</Text>
      <Text style={styles.secondaryHeading}>I am a React Developer.</Text>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: "https://source.unsplash.com/random/?boy/302*302" }}
          style={styles.logo}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          varius sit amet tellus ut faucibus. Nunc commodo lorem arcu, in porta
          mi tempor vel. Maecenas quis blandit odio. Pellentesque sit amet
          rhoncus neque. Nulla a nulla eros.
        </Text>
      </View>
      <View>
        <Text style={styles.linksText}>Follow me on Social Network</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/shekhar.404/")
            }
          >
            <Image
              source={{
                uri: "https://img.icons8.com/color-glass/48/000000/instagram-new.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/shekhar.404")
            }
          >
            <Image
              source={{
                uri: "https://img.icons8.com/doodle/48/000000/facebook-new.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/channel/UC9UYzozYTVTKB2env-XtcTA"
              )
            }
          >
            <Image
              source={{
                uri: "https://img.icons8.com/doodle/48/000000/youtube-play--v2.png",
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  mainHeading: {
    letterSpacing: 1.2,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    color: "#344055",
  },
  secondaryHeading: {
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 1.4,
    fontFamily: "Nunito_400Regular",
    lineHeight: 30,
    color: "#7d7d7d",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: 200,
    aspectRatio: 1,
    borderRadius: 100,
    marginVertical: 15,
  },
  descriptionContainer: {
    padding: 20,
    backgroundColor: "#4c5dab",
    paddingBottom: 30,
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "Nunito_600SemiBold",
    color: "#fff",
  },
  description: {
    fontFamily: "JosefinSans_500Medium",
    fontSize: 18,
    color: "#fff",
  },

  linksText: {
    color: "#344055",
    fontSize: 23,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
    fontFamily: "Nunito_600SemiBold",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});
