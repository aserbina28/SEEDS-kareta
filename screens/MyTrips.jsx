import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native"
import Header from "./reuse/Header"
import Footer from "./reuse/Footer"
import { StyleSheet } from "react-native"
import { useFonts } from "expo-font" 


export default function MyTrips(){
    const [fontsLoaded] = useFonts({
        "Caveat Brush": require("../assets/Fonts/CaveatBrush-Regular.ttf"),
        "Fira Sans Condensed": require("../assets/Fonts/FiraSansCondensed-ExtraLight.ttf"),
      });

    return(
        <View style={{flex:1, alignItems:'center'}}>
            <Header name='Veronika'/>

            <Text style={styles.text}>My upcoming trips: </Text>

            <View style={styles.tripBackground}>
                <View style={styles.timesContainer}>
                    <View style={styles.timeContainer}>
                        <Image source={require('../assets/calendar.png')}/>
                        <Text style={styles.timeText}>July 7</Text>
                    </View>

                    <View style={styles.timeContainer}>
                        <Image source={require('../assets/clock-circle.png')}/>
                        <Text style={styles.timeText}>3 pm</Text>
                    </View>
                </View>
                <Text style={styles.peopleNumber}>2</Text>

                <View style={styles.adressContainer}>
                    <Text style={styles.addressText}>London</Text>
                    <View style={styles.arrow}>
                        <Image source={require('../assets/ellipse.png')} style={styles.ellipse}/>
                        <Image source={require('../assets/arrow.png')} style={styles.line}/>
                    </View>
                    <Text style={styles.addressText}>Budapest</Text>
                </View>

                {/* transport container */}
                <View style={{flexDirection:'row', paddingTop:'7%'}}>
                    <View style={styles.trasnportContainer}>
                        <Image source={require('../assets/car.png')}/>
                        <Text style={styles.transportText}>car</Text>
                    </View>

                    {/* <Text style={styles.transportText}>confirmed by 1/2</Text> */}
                </View>

            </View>

            <Footer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}/>

        </View>
    )

}

const styles = StyleSheet.create({
    text:{
        fontFamily: 'FiraSansCondensed-Regular',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 22,
        lineHeight: 26,
        marginLeft:'-38%',
        textAlign: 'left',
        color: '#454242',
        top:'4%',
    },

    tripBackground: {
        marginTop:'3.5%',
        padding:'6%',
        position: 'absolute',
        width: '90%',
        
        height: '20%',
        top: 247,
        backgroundColor: 'rgba(11, 78, 0, 0.15)',
        shadowColor: '#000',
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 15,
        
      },

    timeContainer:{
        flexDirection:'row',
        marginRight:'18%',
    },
    timesContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'60%'
    },
    timeText:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 24,
        color: '#454242',
        marginLeft:'10%'
    },
    peopleNumber:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        color: '#454242',
        top:'-20%',
        textAlign:'right',
        left:'-6%'

    },

    arrow:{
        flexDirection:'row',
        width:'40%',
        top:'35%',
        //overflow: 'hidden',
        resizeMode: 'cover',
        clipPath: 'path(0 50% 0 0)',
        
    },
    ellipse:{
        top:'1.5%'


    },
    addressText:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 24,
        color: '#0B4E00',
    },
    adressContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    line:{
        width:'100%',
        
    },
    transportText:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 18,
        color: '#454242',
        marginLeft:'11%'
    },
    trasnportContainer:{
        flexDirection:'row',
        
    }

    
})