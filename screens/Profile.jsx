import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "./reuse/Header";
import Footer from "./reuse/Footer";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default function Profile({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Caveat Brush": require("../assets/Fonts/CaveatBrush-Regular.ttf"),
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    // Add loading logic if needed
    return null;
  }

  return (
    <View style={styles.container}>
      <Header name="Veronika" />

      <View style={styles.content}>
        {/* Personal info */}
        <Text style={styles.info}>
          Veronika Kitsul,{"\n"}
          College ‘26,{"\n"}
          +1 000 000000
        </Text>
        <Image
          source={require("../assets/veronika.png")}
          style={styles.image}
        />

        {/* buttons */}

        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text style={styles.buttonText}>Personal data</Text>
          <Ionicons
            name="chevron-forward-sharp"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons
            name="notifications-circle-outline"
            size={24}
            color="black"
          />
          <Text style={styles.buttonText}>Notifications</Text>
          <Ionicons
            name="chevron-forward-sharp"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="lock-closed" size={24} color="black" />
          <Text style={styles.buttonText}>Privacy and security</Text>
          <Ionicons
            name="chevron-forward-sharp"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="cog" size={24} color="black" />
          <Text style={styles.buttonText}>Account settings</Text>
          <Ionicons
            name="chevron-forward-sharp"
            size={24}
            color="black"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  info: {
    fontFamily: "Caveat Brush",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 26,
    lineHeight: 29,
    color: "#454242",
    position: "absolute",
    left: 20, // Adjust the value to position the text as desired
    top: 25,
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: "#0B4E00",
    borderRadius: 75,
    overflow: "hidden",
    position: "absolute",
    right: 20, // Adjust the value to align the image as desired
  },
  divider: {
    position: "absolute",
    width: (280 / 390) * screenWidth,
    height: 0,
    borderWidth: (1 / 390) * screenWidth,
    borderColor: "rgba(81, 77, 77, 0.53)",
  },
  settings: {
    position: "absolute",
    width: (201 / 390) * screenWidth,
    height: (23 / 390) * screenWidth,
    left: (115 / 390) * screenWidth,
    top: (200 / 390) * screenWidth,
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: (24 / 390) * screenWidth,
    color: "#000000",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "rgba(81, 77, 77, 0.53)",
    marginVertical: 0,
    width: "100%",
    top: 160,
  },
  buttonText: {
    marginLeft: 8,
    marginRight: 8,
    fontSize: (20 / 390) * screenWidth,
    fontFamily: "Fira Sans",
    fontStyle: "normal",
  },
  buttonIcon: {
    alignContent: "flex-end",
    alignItems: "flex-end",
  },
});
