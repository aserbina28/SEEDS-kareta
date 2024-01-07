import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Button, TextInput, Keyboard } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Chat(){
    const navigation = useNavigation()

    return(
        <View style={{flex:1}}>
            {/* header with contact detail and back button */}
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Image source={require('../assets/arrow-back.png')}/>
                </TouchableOpacity>
                <Text style={styles.nameText}>Tania Perehinets</Text>
                <Image source={require('../assets/chat_image.png')} style={styles.personImage}/>
            </View>

            {/* chat container */}
            <View>
                {/* date */}
                <Text style = {styles.date}>July 10</Text>

                {/* container for text and its time */}
                <View style={styles.textTimeContainer}>
                    {/* text container 
                    width is set up in css, but height is accustomed to the message*/}

                    
                    <View style={styles.textContainerGreen}>
                        <Text style={styles.textGreen}>{`Hey, what is good pick up spot for tomorrow? `}</Text>

                    </View>
                    <Text style={styles.time}>9:23 am</Text>
                </View>

                {/* in transpose container, the row will go reverse */}
                <View style={styles.textTimeContainerReverse}>
                    <View style={styles.textContainerTranspose}>
                        <Text style={styles.textTranspose}>{`How about we just meet in the parking lot?`}</Text>
                    </View>
                    <Text style={styles.timeReverse}>9:23 am</Text>
                </View>

            </View>

            {/* footer to type text  */}
            <View style={styles.footer}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            style={styles.container}>

            <View style={{ flex: 1 }}>
                {/* Chat content */}
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#CCCCCC', padding: 10 }}>
                <TextInput
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: '#CCCCCC',
                    borderRadius: 5,
                    paddingHorizontal: 10,
                  }}
        
                placeholder="Type a message..."
                />
            </View>

            
            </KeyboardAvoidingView>

            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    nameText:{
        fontFamily: 'Fira Sans Condensed',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24,
        color: '#454242',
    },
    personImage:{
        
        
    },
    header:{
        flexDirection: 'row',
        top:'12%',
        justifyContent:'space-between',
        margin:'6%',
        alignItems:'center',
        marginBottom:'15%'
    },

    date:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#454242',
        textAlign:'center',
        position:'relative',
        marginTop:'4%',

    },
    textContainerGreen:{
        position: 'absolute',
        width: 237,
        minHeight: 59,
        backgroundColor: '#0B4E00',
        borderRadius: 30,
        paddingTop:'5%',
        paddingBottom:'5%',
        paddingLeft:'7%',
        paddingRight:'7%',
        justifyContent:'center',
        alignItems:'center'

        
    },
    textGreen:{
        fontFamily: 'Fira Sans Condensed',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF',
        textAlign:'left',
        
    },
    textContainerTranspose:{
        position: 'absolute',
        width: 237,
        minHeight: 59,
        backgroundColor: '#0B4E00',
        borderRadius: 30,
        paddingTop:'5%',
        paddingBottom:'5%',
        paddingLeft:'7%',
        paddingRight:'7%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(11, 78, 0, 0.15)',
        
    },
    textTranspose:{
        fontFamily: 'Fira Sans Condensed',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#454242',
        textAlign:'left'
    },
    time:{
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#454242',
        marginLeft:'78.5%'
        
    },
    timeReverse:{
        left:'1250%',
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        lineHeight: 22,
        color: '#454242',
        //paddingLeft:'50%'

    },
    textTimeContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        top:'10%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:'5%'


    },
    textTimeContainerReverse:{
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-between',
        top:'25%',
        marginLeft:'5%',
        marginRight:'5%',
        marginBottom:'5%'
    },
    footer:{
        position: 'absolute', 
        left: 0, 
        right: 0,
        bottom: 0
    }

})