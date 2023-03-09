import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>


      <ScrollView>
        <ScrollView style={styles.scroll} horizontal={true} >
          <View style={styles}>
          <Image source={require("../Mplus/assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
            <Image source={require("../Mplus/assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
          <Image source={require("../Mplus/assets/vagabond_3.jpg")} style={{height:300, width:300}}></Image>
          </View>
        </ScrollView>


        <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles}>
          <Image source={require("../Mplus/assets/berserk1.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
          <Image source={require("../Mplus/assets/berserk2.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
          <Image source={require("../Mplus/assets/berserk3.jpg")} style={{height:300, width:300}}></Image>
          </View>
          
        </ScrollView>

         <ScrollView style={styles.scroll} horizontal={true} >
          <View style={styles}>
          <Image source={require("../Mplus/assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
            <Image source={require("../Mplus/assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
          </View>
          <View style={styles}>
          <Image source={require("../Mplus/assets/vagabond_3.jpg")} style={{height:300, width:300}}></Image>
          </View>
        </ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
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
    width: 100,
    backgroundColor: "blue",
    margin: 10,
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
});