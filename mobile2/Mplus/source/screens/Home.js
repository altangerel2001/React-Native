import { View, Text, StyleSheet, ScrollView , TouchableOpacity, Image,SafeAreaView,Pressable,Button,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () =>{
  const navigator = useNavigation();
  return (    
      <SafeAreaView style={styles.container}>
          <View>
          <Pressable onPress={()=>alert('та нийтлэл бичих үүу?')} onLongPress={()=>alert('та өөрт таалагдсан нийтлэлээ бичихдээ нийтлэл хэсэгт нэг удаа дарна уу')}>
            <Text style={{textAlignVertical: "center",textAlign: "center",}} >та унших бүлгээ хайна уу?</Text>
          </Pressable> 
          </View>
        <ScrollView>
          <ScrollView style={styles.scroll} horizontal={true} >
          <View style={styles}>

            <TouchableOpacity onPress={() => navigator.navigate('Detail')}>
            <Image source={require("../../assets/vagabond.jpg")} style={{height:250, width:200}}></Image>

            </TouchableOpacity>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
              <Image source={require("../../assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/vagabond_3.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <Button 
              onPress={()=>alert('та нийтлэл бичих үү')}
              title="унших"       
              color="black"
              
              />
            
          </ScrollView>
  
  
          <ScrollView style={styles.scroll} horizontal={true}>
          <View style={styles}>
            <Image source={require("../../assets/berserk.jpg")} style={{height:400, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/berserk1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/berserk2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../../assets/berserk3.jpg")} style={{height:300, width:300}}></Image>
            </View>
            
          </ScrollView>
  
           <ScrollView style={styles.scroll} horizontal={true} >
           <View style={styles}>
            <Image source={require("../../assets/vinland.jpg")} style={{height:250, width:300}}></Image>
            </View>
            <View style={styles}>
            <Image source={require("../..//assets/vagabond_1.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
              <Image source={require("../../assets/vagabond_2.jpg")} style={{height:300, width:300}}></Image>
            </View>
            <View style={styles}>
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
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        draft1:{
          height: 200,
          width: 200,
        }
      });
 

    

export default HomeScreen