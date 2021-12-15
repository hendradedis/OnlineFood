import React from "react";
import {View, Text, StyleSheet} from "react-native"

export const HomeScreen = () => {
  return(
    <View style={style.container}>
      <View style={style.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={style.body}>
        <Text>Home Screen</Text>
      </View>
      <View style={style.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'green'
  },
  navigation: {
    flex:2, 
    backgroundColor:'red',
  },
  body: {
    flex: 9,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'yellow'
  },
  footer: {
    flex:1,
    backgroundColor:'cyan'
  }
})