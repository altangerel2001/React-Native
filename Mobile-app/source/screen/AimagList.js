import { StatusBar } from 'expo-status-bar';
import { useState ,useEffect } from 'react';
import { StyleSheet, Text, View , Image, ScrollView, Pressable, SafeAreaView, Button , TextInput} from 'react-native';
import { sendRequest, urlLookup } from '../settings/Settings';

const AimagList = () =>{
    const [aimagData, setData] = useState();
    useEffect(() => {
      const body = { action: "aimagsum" };
      sendRequest(urlLookup, body)
        .then((data) => {
           setData(data); 
            aimagData = data
           console.log(data, "2");
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  return (
    <SafeAreaView style ={style.container}>
      <ScrollView>
        <View>
         <Text>{JSON.stringify(aimagData)}</Text>
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


export default AimagList

