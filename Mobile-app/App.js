import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView, SafeAreaView, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={{marginTop: 55}}>

      <Pressable onPress={()=>alert('та нийтлэл бичих үүу?')} onLongPress={()=>alert('та өөрт таалагдсан нийтлэлээ бичихдээ нийтлэл хэсэгт нэг удаа дарна уу')}>
      <Text style={{textAlignVertical: "center",textAlign: "center",}} >та унших бүлгээ хайна уу?</Text>
      </Pressable> 

      <TextInput 
        style={styles.input}
        />

         <Button
      onPress={()=>alert('та нийтлэл бичих үү')}
      title="нийтлэл"
      color="black"
      style={{width:30}}
      />

       
       <Pressable 
      onPress={()=>alert("та зурган дээрээ удаан дарж зургаа солино уу?")} 
      onLongPress={()=>alert("та зургаа солих уу?")}>
      <Image source={require("./assets/e84ac7e579f3bca5def4193d2c00398a.jpg")} style={{height:250, width:'100%'}}></Image>
      </Pressable>




      <Button
      onPress={()=>alert('та товчийг дарсан байна!')}
      title="BUTTON"
      color="black"
      style={{width:300}}

      />
        <Image source={require("./assets/Vagabond-wallpaper-takehiko-inoue-Vagabond-manga-.jpg")} style={{height:700, width:400}}></Image>
      
        <Image source={require("./assets/001.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/002.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/003.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/005.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/006.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/007.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/008.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/009.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/010.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/011.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/012.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/013.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/014.jpg")} style={{height:700, width:400}}></Image>
        <Image source={require("./assets/015.jpg")} style={{height:700, width:400}}></Image>
        
    


        <StatusBar style="auto" />
    </View>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems:'center',
    justifyContent:'center',

  },
  text: {
    fontSize: 42,
  },
  input:{
    height:40,
    margin:25,
    borderWidth:3,
    padding:10,
    borderColor:'black',
  },
});