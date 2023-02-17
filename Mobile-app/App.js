import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.deed}>
      </View> 
      <View style={style.dood}>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: "brown",

  },
  deed: {
    flex: 1,
    backgroundColor: "black",

  },
  dood: {
    flex: 1,
    backgroundColor: "white",

  },

})