import React, {useState, useReducer, useEffect} from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native"

const screenWidth =  Dimensions.get('screen').width

import * as Location from 'expo-location'

export const LandingScreen = () => {

  const [errorMsg, setErrorMsg] = useState("")
  const [address, setAddress] = useState<Location.LocationGeocodedAddress>()

  const [displayAddress, setDisplayAddress] = useState("waiting for current location")

  useEffect(() => {
    (async () => {
      let {status} =  await Location.requestBackgroundPermissionsAsync()

      if( status !== 'granted') {
        setErrorMsg("permision accress is not granted")
      }

      let location: any = await Location.getCurrentPositionAsync({})
      const {coords} = location

      if(coords) {
        const {latitude, longitude} = coords

        let addressResponse : any = await Location.reverseGeocodeAsync({longitude, latitude})

        for(let item of addressResponse){
          setAddress(item)
          let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}`
          setDisplayAddress(currentAddress)
          return;
        }
      }
    })
  }, [])


  return(
    <View style={style.container}>
      <View style={style.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={style.body}>
        <Image 
          source={require('../images/delivery_icon.png')}
          style={style.deliveryIcon}
        />
        <View style={style.addressContainer}>
          <Text style={style.addressTitle}>Your Delivery Addrress</Text>
        </View>
          <Text style={style.addressText}>{displayAddress}</Text>
      </View>
      <View style={style.footer} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgba(242,242,242,1)'
  },
  navigation: {
    flex:2, 
  },
  body: {
    flex: 9,
    justifyContent:'center',
    alignItems:'center',
  },
  deliveryIcon: {
    width:120,
    height:120
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor:'red',
    borderBottomWidth:0.5,
    padding:5,
    marginBottom:10,
    alignItems:'center'
  },
  addressTitle: {
    fontSize:22,
    fontWeight:'800',
    color:'#7d7d7d'
  },
  addressText: {
    fontSize:20,
    fontWeight:'200',
    color:'#4f4f4f'
  },
  footer: {
    flex:1,
  }
})