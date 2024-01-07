import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { useFonts } from "expo-font";

//fix pixels issue
const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  //Fix fonts issue
  const [fontsLoaded] = useFonts({
    "Caveat Brush": require("../assets/Fonts/CaveatBrush-Regular.ttf"),
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  return (
    <View style={styles.container}>
      <Image source={require("../assets/Logo.png")} style={styles.logo} />
      <Text style={styles.kareta_name}>kareta</Text>
      <View style={styles.divider} />
      <Text style={styles.text}>Share a ride with your college friends</Text>

      <View>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => {
            navigation.navigate("CreateAcc");
          }}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.loginButtonText}>I have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    height: 253,
    top: 137.13,
  },

  kareta_name: {
    position: "absolute",
    flex: 1,
    fontFamily: "Caveat Brush",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 81,
    textAlign: "center",
    color: "#0B4E00",
  },

  text: {
    position: "absolute",
    width: 264,
    height: 73,
    left: 68,
    top: height * 0.555,
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#6A7768",
  },

  divider: {
    position: "absolute",
    width: 229.26,
    height: 0,
    left: 87,
    top: height * 0.545,
    borderWidth: 1,
    borderColor: "#454242",
  },

  getStartedButton: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 10,
    width: 343,
    height: 45,
    marginTop: 450,
    backgroundColor: "#0B4E00",
    borderWidth: 2,
    borderColor: "rgba(46, 40, 40, 0.88)",
    borderRadius: 12,
    shadowColor: "rgba(57, 113, 31, 0.72)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  getStartedButtonText: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },

  loginButton: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 10,
    width: 343,
    height: 45,
    borderWidth: 2,
    borderColor: "#EBEBEB",
    borderRadius: 12,
    shadowColor: "rgba(81, 77, 77, 0.53)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  loginButtonText: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#0B4E00",
  },
});
