import { View } from "react-native";
import Header from "./reuse/Header";
import Footer from "./reuse/Footer";

export default function Search({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header name="Veronika" />
      <Footer style={{ position: "absolute", left: 0, right: 0, bottom: 0 }} />
    </View>
  );
}
