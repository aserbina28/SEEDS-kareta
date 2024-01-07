import { View, Image, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Image source={require("../../assets/search.png")} />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("MyTrips");
          }}
        >
          <Image source={require("../../assets/my_trips_logo.png")} />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Inbox");
          }}
        >
          <Image source={require("../../assets/inbox.png")} />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Image source={require("../../assets/profile.png")} />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(11, 78, 0, 0.15)",
    width: "100%",
    padding: 10,

    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
