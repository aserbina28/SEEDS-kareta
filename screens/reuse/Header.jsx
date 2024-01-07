import { View, Text, SafeAreaView, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function Header(props) {
  const [fontsLoaded] = useFonts({
    "Caveat Brush": require("../../assets/Fonts/CaveatBrush-Regular.ttf"),
    "Fira Sans Condensed": require("../../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  return (
    <SafeAreaView>
      <Text style={styles.name}>kareta</Text>

      <View style={styles.container}>
        <Image
          source={require("../../assets/small_logo.png")}
          style={styles.logo}
        />
        <Text style={styles.greeting}>Hi, {props.name}!</Text>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  name: {
    fontFamily: "Caveat Brush",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 64,
    lineHeight: 81,
    textAlign: "center",
    color: "#0B4E00",
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 16,
  },

  logo: {
    left: "-100%",
    transform: [{ rotate: "-9deg" }],
    resizeMode: "cover",
  },

  greeting: {
    fontFamily: "Caveat Brush",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 26,
    lineHeight: 33,
    textAlign: "center",
    color: "#454242",
    left:'-75%'
  },
});
