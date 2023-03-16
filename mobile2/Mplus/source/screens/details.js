import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, ScrollView, Pressable, SafeAreaView, Button , TextInput} from 'react-native';

const DetailScreen = () =>{
  return (
    <SafeAreaView style ={style.container}>
      <ScrollView>
        <View>
          <Image source={require("../../assets/vaga1.jpg")} style={{height:500, width:300}}></Image>
          <Image source={require("../../assets/vaga2.jpg")} style={{height:500, width:300}}></Image>
          <Image source={require("../../assets/vaga3.jpg")} style={{height:500, width:300}}></Image>
          <Image source={require("../../assets/vaga4.jpg")} style={{height:500, width:300}}></Image>
          <Image source={require("../../assets/vaga5.jpg")} style={{height:500, width:300}}></Image>
          <Image source={require("../../assets/vaga6.jpg")} style={{height:500, width:300}}></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  draft1:{
    height: 200,
    width: 200,
  }
});


export default DetailScreen 
