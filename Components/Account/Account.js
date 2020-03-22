// EXT
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

// INT
import Style from './AccountStyle'
import Locals from './AccountLocals'

export default function Account({navigation}){

  const src = '../../assets/Logo.png'

  return(
    <View style={Style.container}>
        <Image source={require(src)} style={Style.image}/>
        <Text style={Style.text}> {Locals.account} </Text>
    </View>
  )
}
