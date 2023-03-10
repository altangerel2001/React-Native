import { View, Text, StyleSheet, ScrollView , TouchableOpacity, Image,SafeAreaView,Pressable,Button,TextInput} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () =>{
  const navigator = useNavigation();
  return (    
      <SafeAreaView style={styles.container}>
          <View>
          <Pressable onPress={()=>alert('та нийтлэл бичих үү?')} onLongPress={()=>alert('та өөрт таалагдсан нийтлэлээ бичихдээ нийтлэл хэсэгт нэг удаа дарна уу')}>
            <Text style={{textAlignVertical: "center",textAlign: "center" ,}} >та унших бүлгээ хайна уу?</Text>
          </Pressable> 
          <TextInput style={styles.input}/>
          </View>
        <ScrollView>
          <ScrollView style={styles.scroll} horizontal={true} >
          <View style={styles}>

            <TouchableOpacity onPress={() => navigator.navigate('Vagobond 1р Бүлэг')}>
        
            <Image source={require("../../assets/vagabond.jpg")} style={{height:250, width:200}}></Image>
            </TouchableOpacity>
            
            </View>
            <View style={styles.draft2}>
            <Image source={require("../../assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
              <Image source={require("../../assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/vagabond_3.jpg")} style={{height:300, width:300}}></Image>
            </View>
            {/* <Button 
              onPress={()=>alert('та нийтлэл бичих үү')}
              title="унших"       
              color="black"
              
              />
             */}
          </ScrollView>
  
  
          <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles}>
            <TouchableOpacity onPress={() => navigator.navigate('Berserk 1р Бүлэг')}>
            <Image source={require("../../assets/berserk.jpg")} style={{height:250, width:200}}></Image>
            </TouchableOpacity>
            </View>
            <View style={styles.draft2}>
            <Image source={require("../../assets/berserk1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles.draft2}>
            <Image source={require("../../assets/berserk2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles.draft2}>
            <Image source={require("../../assets/berserk3.jpg")} style={{height:300, width:300}}></Image>
            </View>
            
          </ScrollView>
  
           <ScrollView style={styles.scroll} horizontal={true} >
           <View style={styles.draft2}>
            <Image source={require("../../assets/vinland.jpg")} style={{height:250, width:300}}></Image>
            </View>
            <View style={styles.draft2}>
            <Image source={require("../..//assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles.draft2}>
              <Image source={require("../../assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles.draft2s}>
            <Image source={require("../../assets/vagabond_3.jpg")} style={{height:300, width:300}}></Image>
            </View>
          </ScrollView>
  
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "gray",
    },
    deed: {
      flex: 4,
      backgroundColor: "aqua",
    },
    dood: {
      flex: 3,
      backgroundColor: "yellow",
    },
    draft1: {
      height: 100,
      width: 100,
      backgroundColor: "pink",
      margin: 10,
    },
    draft2: {
      height: 100,
      width: 300,
      backgroundColor: "blue",
      margin: 20,
    },
    draft3: {
      height: 100,
      width: 100,
      backgroundColor: "green",
      margin: 10,
    },
    draft4: {
      height: 100,
      width: 100,
      backgroundColor: "yellow",
      margin: 10,
    },
    draft5: {
      height: 100,
      width: 100,
      backgroundColor: "aqua",
      margin: 10,
    },
    scroll: {
      backgroundColor: "white",
      flexDirection: "row",
      padding: 20,
      margin: 10,
      height: 270,
    },
    input:{
            height:40,
            margin:25,
            borderWidth:3,
            padding:10,
             borderColor:'white',
          },
  }); 
    

export default HomeScreen