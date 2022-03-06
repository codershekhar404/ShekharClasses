import { StyleSheet } from "react-native";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Screens
import Home from "./src/screens/Home";
import Course from "./src/screens/Course";
import StudentData from "./src/screens/StudentData";
import Contact from "./src/screens/Contact";
import About from "./src/screens/About";
import CourseDetails from "./src/screens/CourseDetails";

// Fonts
import {
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoad] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,

    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        {/* Course Screen */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* Student screen */}
        <Stack.Screen
          name="Students"
          component={StudentData}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
            title: "Enrolled Students",
          }}
        />
        {/* Contact Screen */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* About Screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
        {/* CourseDetails Screen */}
        <Stack.Screen
          name="Course Details"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontFamily: "Nunito_600SemiBold",
              fontSize: 25,
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
