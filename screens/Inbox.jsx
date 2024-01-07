import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "./reuse/Header";
import Footer from "./reuse/Footer";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width;


export default function Inbox() {
  const [fontsLoaded] = useFonts({
    "Caveat Brush": require("../assets/Fonts/CaveatBrush-Regular.ttf"),
    "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
  });

  const navigation = useNavigation()

  return (
    <View style={{flex:1}}>
      <Header name='Veronika'/>

      <View style={{marginTop:'8%', marginLeft:'1%'}}>
        {/* images container  that will be in a row*/}
        <View style={{flexDirection:'column'}}>
          <View style={styles.vector}></View>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Chat");
          }}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/tania_circle.png')} style={styles.image}/>
              <View style={styles.nameDate}>
                  <Text style={styles.name}>Tania Perehinets</Text>
                  <Text style={styles.time}>9:23 am</Text>
              </View>

              <Text  style={styles.text}>{`Hey, what is good pick up spot for tomorrow?`} </Text>
            </View>
          </TouchableOpacity>
          
          <View style={styles.vector}></View>
          <TouchableOpacity>
            <View style={{flexDirection:'row'}}>
              <Image source={require('../assets/ania_ellipse.png')} style={styles.image}/>
              <View style={styles.nameDate}>
                  <Text style={styles.name}>Ania Serbina</Text>
                  <Text style={styles.time}>8:20 pm</Text>
              </View>
              <Text style={styles.text}>{`Yeah, sounds good, see you then!`} </Text>

            </View>
          </TouchableOpacity>
          <View style={styles.vector}></View>
        </View>


      </View>

      <Footer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}/>

    </View>
    

    
  );
}

const styles = StyleSheet.create({
  vector:{
    left:'20%',
    width: '75%',
    height: 0,
    borderWidth: 1,
    borderColor: 'rgba(81, 77, 77, 0.53)',
    //marginTop:'5%'
  },
  name:{
    fontFamily: 'Fira Sans Condensed',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#454242',
    //marginRight:'30%'
  },
  time:{
    fontFamily: 'Fira Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: '#454242',
    //left:'30%',
    textAlign:'left',
    left: width*0.53,
    position:'absolute'

  },
  text:{
    fontFamily: 'Fira Sans Condensed',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
    color: 'rgba(81, 77, 77, 0.8)',
    maxWidth:'80%',
    position:'relative',
    top:'8.75%',
    left: width*0.015,
    textAlign:'left'
   
  },
  nameDate:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    marginTop:'1%',
    position:'absolute',
    left: width*0.234

    
  },
  textImageContainer:{
    flexDirection:'row',
    justifyContent:'center',

    
  },
  image:{
    margin:'2%',
    //left:'40%'
  },
  inboxesContainer:{
    flexDirection:'column',
    marginTop:'8%'
  }

 
   
});
