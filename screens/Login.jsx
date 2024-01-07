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

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableHighlight onPress={() => navigation.goBack()}>
          <Image source={require("../assets/arrow_back.png")} />
        </TouchableHighlight>

        <Text style={styles.name}>kareta</Text>

        {/* add an action to Help button */}
        <TouchableOpacity>
          <Text style={styles.help_button}>Help</Text>
        </TouchableOpacity>
      </View>

      <Image source={require("../assets/Logo.png")} style={styles.logo} />

      <View style={styles.textcontainer}>
        <Text style={styles.welcomeback}>Welcome Back!</Text>
        <Text style={styles.logintext}>Login with your school credentials</Text>
      </View>

      <View style={styles.inputContainer}>
        <GestureHandlerRootView style={styles.input}>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
            value={email}
            style={{
              fontFamily: "Fira Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 20,
              lineHeight: 24,
              color: "#6A7768",
            }}
          />
          <View style={styles.vector} />
        </GestureHandlerRootView>

        <GestureHandlerRootView style={styles.input}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            value={password}
            secureTextEntry
            style={{
              fontFamily: "Fira Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 20,
              lineHeight: 24,
              color: "#6A7768",
            }}
          />
          <View style={styles.vector} />
        </GestureHandlerRootView>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Search")}
        >
          <Text
            style={{
              fontFamily: "Fira Sans Condensed",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: 24,
              lineHeight: 29,
              textAlign: "center",
              textTransform: "uppercase",
              color: "#FFFFFF",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#F5F5F5",
  },

  help_button: {
    fontFamily: "Graduate",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "right",
    color: "#6A7768",
  },

  name: {
    fontFamily: "Caveat Brush",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 81,
    textAlign: "center",
    color: "#0B4E00",
  },

  welcomeback: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#454242",
  },

  logintext: {
    fontFamily: "Fira Sans Condensed",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#6A7768",
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },

  input: {
    height: "20%",
  },

  vector: {
    width: 279,
    height: 0,
    borderWidth: 0.5,
    borderColor: "#454242",
    flex: 0,
    order: 1,
    flexGrow: 0,
  },

  loginButton: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    //   padding: 0,
    //   margin: 10,

    width: 343,
    height: 45,
    //   marginTop: 450,
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
});
