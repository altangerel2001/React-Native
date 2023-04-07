import {   View,   Text,   StyleSheet,   Pressable,   SafeAreaView,   ScrollView,   Image, TouchableOpacity, } from "react-native"; 
import React from "react"; 
import {   Ionicons,   Entypo,   MaterialCommunityIcons,   Octicons,   AntDesign, } from "@expo/vector-icons"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'


    
  const HomeScreen = () =>{
    const navigator = useNavigation();

  return (     
    <SafeAreaView style={styles.container}>       
      <ScrollView>        
      <View style={styles.vw1}>           
      <Text style={styles.txt}>Өдрийн мэнд</Text> 

      <MaterialCommunityIcons name="ticket-percent" style={styles.icon} />  

          <Octicons name="bell-fill" style={styles.icon1} />

          </View> 
         
          <View style={styles.vw2}>  
          <View style={styles.ch1}>
          <TouchableOpacity onPress={() => navigator.navigate('Details')}>            
          <View style={styles.choose1}>             
          <Text style={styles.choosetxt}>Товч ном</Text>  
          <Entypo name="triangle-down" style={styles.unguIcon1} /> 
          </View>
          </TouchableOpacity>
         
            
          <TouchableOpacity onPress={() => navigator.navigate('Details2')}> 
          <View style={styles.choose2}>           
          <Text style={styles.choosetxt}>Цахим ном</Text>   

          <MaterialCommunityIcons  name="rectangle" style={styles.unguIcon2} />            
          </View>  
          </TouchableOpacity>       
          </View> 
          
                 
      <View style={styles.ch2}>          
      <View style={styles.choose3}>       
      <TouchableOpacity onPress={() => navigator.navigate('AimagList')}> 
          <Text style={styles.choosetxt}>Aimaglist</Text>           
           <Entypo name="triangle-right" style={styles.unguIcon1} />   
          </TouchableOpacity>   
        </View>    
                 
           <View style={styles.choose4}>               
             <Text style={styles.choosetxt}>Подкаст</Text>              
             <AntDesign name="heart" style={styles.unguIcon3} />             
              </View>           
              </View>         
              </View>         
                  <View style={styles.vw3}>         
              <Text></Text>          
              <Text></Text>         
                </View>       
    </ScrollView>    
  </SafeAreaView>   ); }  

  const styles = StyleSheet.create({  
     container: {     
      flex: 1,     
      backgroundColor: "black",     
      padding: 20,   
    },   
      vw1: {     
      height: 80,     
      width: 350,     
      borderColor: "white",     
      flexDirection: "row",   
      },   
     txt: {     
      color: "white",     
      fontSize: 30,     
      paddingTop: 30,     
      alignItems: "flex-start",     
      fontWeight: "bold",     
      paddingLeft: 10,   },   
    icon: {     
       color: "blue",     
       fontSize: 28,     
       marginTop: 36,     
       marginLeft: 50,   
       },   
    icon1: {     
      color: "blue",     
      fontSize: 20,     
      marginTop: 41,     
      marginLeft: 10,   
    },   
    vw2: {     
      width: 350,     
      height: 225,     
      backgroundColor: "dimgray",     
      borderRadius: 30,     
      margin: 15,  
      },  
    ch1: {     
      flexDirection: "row",     
      paddingTop: 15,     
      paddingLeft: 20,  
      },   
    ch2: {     
      flexDirection: "row",     
      paddingTop: 10,     
      paddingLeft: 20,   
      },   
    choose1: {     
      width: 150,    
      height: 90,    
      backgroundColor: "#48d1cc",     
      borderRadius: 20,   
      },   
    choose2: {     
      width: 150,     
      height: 90,     
      backgroundColor: "#ff4500",     
      marginLeft: 10,     
       borderRadius: 20,   
       },   
    choose3: {     
      width: 150,    
      height: 90,     
      backgroundColor: "#ffff00",     
      borderRadius: 20,  
     },   
    choose4: {     
      width: 150,     
      height: 90,     
      backgroundColor: "#663399",     
      marginLeft: 10,    
      borderRadius: 20,   
      },   
     choosetxt: {     
      fontSize: 20,     
      fontWeight: "600",     
      marginTop: 15,     
      marginLeft: 15,   
      },   
    unguIcon1: {     
      fontSize: 45,     
       marginLeft: 8,   
      },   
    unguIcon2: {     
      fontSize: 30,     
      marginTop: 8,    
      marginLeft: 15,   },   
    unguIcon3: {     
      fontSize: 24,     
      marginTop: 10,     
       marginLeft: 15,   
    },   
    vw3: {     
      width: 350,     
      height: 225,     
      backgroundColor: "#696969",     
      borderRadius: 30,    
      margin: 15,   
  }, });
  export default HomeScreen