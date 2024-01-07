import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

export default function Pic2({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Image source={require("../assets/arrow_back.png")} />
        </TouchableHighlight>

        <Text style={styles.karetaText}>kareta</Text>

        {/* add an action to Help button */}
        <TouchableOpacity>
          <Text style={styles.help_button}>Help</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.infoText}>You look great!</Text>
      </View>
      <Image source={require("../assets/aniaRound.png")} style={styles.ania} />

      <View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("LogNewUser");
          }}
        >
          <Text style={styles.buttonsText}>Change Profile Picture</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            navigation.navigate("InputInfo");
          }}
        >
          <Text style={styles.buttonsText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    width: "100%",
  },
  helpButton: {
    fontFamily: "Graduate",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "right",
    color: "#6A7768",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  infoText: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    marginBottom: 20,
    color: "#6A7768",
    position: "absolute",
    top: 58,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  buttons: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 10,
    width: 343,
    height: 45,
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
  buttonsText: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
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
  karetaText: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 64,
    color: "#0B4E00",
    textAlign: "center",
    flex: 1,
  },
  ania: {
    position: "absolute",
    height: 264,
    top: 319,
  },
});
