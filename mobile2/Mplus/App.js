import { View, Text, StyleSheet, ScrollView , TouchableOpacity, Image, SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () =>{
  const navigator = useNavigation();
  return (
  <ScrollView>
    <View style={style.container}>
      <View style={style.text}> 
        <Text style={style.text1}>Сайн байна уу</Text>
        <Text>abc</Text>
      </View>
      <View style={style.dood}>
      <ScrollView style ={style.scroll} horizontal={true}>
        <TouchableOpacity onPress={() => navigator.navigate('Detail')}>
          <Image source={require("../Mplus/assets/berserk.jpg")} style={style.draft1}></Image>

        </TouchableOpacity>
        <Image source={require("../Mplus/assets/vagabond.jpg")} style={style.draft2}></Image>
        <Image source={require("../Mplus/assets/vinland.jpg")} style={style.draft3}></Image>
        </ScrollView>
      </View>
    </View>
  </ScrollView>
  )
}



const style = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'column',
  },
  draft1: {
    width : 100,
    height: 100,
    margin: 10,
  },
  draft2: {
    width : 100,
    height: 100,
    margin: 10,
  },
  draft3: {
    width : 100,
    height: 100,
    margin: 10,
  },
  scroll:{
    backgroundColor: "white",

  },
  text: {
    flexDirection: 'row'
  },
  text1:{

  }
})

export default HomeScreen