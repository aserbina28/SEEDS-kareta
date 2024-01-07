import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "./reuse/Header";
import Footer from "./reuse/Footer";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import React, { useState } from "react";
export default function EditTrips() {
  const [fontsLoaded] = useFonts({
    "Caveat Brush": require("../assets/Fonts/CaveatBrush-Regular.ttf"),
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  const [publicNote, setPublicNote] = useState("Add a public note...");

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.text}>Edit your trip:</Text>

      <View style={styles.tripBackground}>
        <View style={styles.timesContainer}>
          <View style={styles.timeContainer}>
            <Image source={require("../assets/calendar.png")} />
            <Text style={styles.timeText}>July 7</Text>
          </View>

          <View style={styles.timeContainer}>
            <Image source={require("../assets/clock-circle.png")} />
            <Text style={styles.timeText}>3 pm</Text>
          </View>
        </View>

        <View style={styles.adressContainer}>
          <Text style={styles.addressText}>London</Text>
          <View style={styles.arrow}>
            <Image
              source={require("../assets/ellipse.png")}
              style={styles.ellipse}
            />
            <Image
              source={require("../assets/arrow.png")}
              style={styles.line}
            />
          </View>
          <Text style={styles.addressText}>Budapest</Text>
        </View>
        <Text style={styles.regText}>3 available</Text>
        <TextInput
          style={styles.regTextInput} // Style for the editable text
          value={publicNote}
          onChangeText={(text) => setPublicNote(text)}
          placeholder="Add a public note..."
          placeholderTextColor="#888" // Optional: Customize the placeholder text color
          multiline // Enable multiline input
          numberOfLines={3} // Set the number of lines to display
          textAlignVertical="top" // Align the text at the top of the TextInput
        />
        <Text style={styles.regText}>People:</Text>
        <Text style={styles.regText}>Avaiting confirmation:</Text>
        <TouchableOpacity style={styles.addFriendsButton}>
          <Text style={styles.addFriendsText}>ADD FRIENDS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.allSetButton}>
          <Text style={styles.allSetButtonText}>ALL SET</Text>
        </TouchableOpacity>

        {/* transport container */}
      </View>

      <Footer style={{ position: "absolute", left: 0, right: 0, bottom: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "FiraSansCondensed-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 26,
    marginLeft: "-56%",
    textAlign: "left",
    color: "#454242",
    top: "10%",
  },
  regText: {
    fontFamily: "FiraSansCondensed-Regular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 60,
    marginLeft: "1%",
    textAlign: "left",
    color: "#454242",
    top: "10%",
  },

  regTextInput: {
    fontSize: 18,
    lineHeight: 24,
    color: "#000", // Customize the text color
    padding: 10,
    paddingTop: 15,
    borderWidth: 2,
    borderColor: "#EBEBEB",
    borderRadius: 12,
    minHeight: 100, // Set a minimum height to ensure enough space for multiline input
    marginBottom: 10, // Optional: Add some spacing at the bottom of the TextInput
  },
  tripBackground: {
    marginTop: "0%",
    padding: "6%",
    position: "absolute",
    width: "90%",

    height: "40%",
    top: 130,
    backgroundColor: "rgba(11, 78, 0, 0.15)",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 15,
  },

  timeContainer: {
    flexDirection: "row",
    justifyContent: "center", // To center the items horizontally
    alignItems: "center", // To center the items vertically (optional, if needed)
    width: "30%", // You may adjust the width to your needs
  },
  timesContainer: {
    flexDirection: "row",
    justifyContent: "center", // To center the items horizontally
    alignItems: "center", // To center the items vertically (optional, if needed)
    width: "90%",
  },
  timeText: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
    color: "#454242",
    marginLeft: "auto", // To distribute the values in the middle, adjust marginLeft and marginRight
    marginRight: "auto", // by setting them to "auto".
  },

  peopleNumber: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#454242",
    top: "-20%",
    textAlign: "right",
    left: "-6%",
  },

  arrow: {
    flexDirection: "row",
    width: "40%",
    top: "35%",
    //overflow: 'hidden',
    resizeMode: "cover",
    clipPath: "path(0 50% 0 0)",
  },
  ellipse: {
    top: "1.5%",
  },
  addressText: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 24,
    color: "#0B4E00",
  },
  adressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    width: "100%",
  },
  transportText: {
    fontFamily: "Fira Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: "#454242",
    marginLeft: "11%",
  },
  trasnportContainer: {
    flexDirection: "row",
  },

  citiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seatsAvailableText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  addNoteText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 10,
  },
  peopleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  personName: {
    fontSize: 16,
    fontWeight: "bold",
    paddingRight: 10,
  },
  addButton: {
    backgroundColor: "#3F51B5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  addFriendsText: {
    fontFamily: "Fira Sans",
    color: "green",
    fontSize: 12,
    fontWeight: "bold",
  },
  addFriendsButton: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 25,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "rgba(0, 128, 0, 0.3)",
    borderRadius: 12,
    elevation: 4,
    // Add the following properties to shift the button to the right
    position: "absolute",
    top: 300,
    right: 10,
    boxShadow: "0px 0px 10px rgba(0, 128, 0, 0.3)", // Adding a green shadow
    // You can adjust the top, right, and boxShadow values as needed for positioning and shadow effect.
  },
  allSetButton: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    width: "113%", // Change the width to match the width of the ripBackground
    height: 45,
    borderWidth: 2,
    borderColor: "#EBEBEB",
    borderRadius: 12,
    shadowColor: "rgba(0, 128, 0, 0.3)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    position: "absolute", // Make sure the button is positioned absolutely
    top: 375, // Adjust the top value to align the button properly
  },

  allSetButtonText: {
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
