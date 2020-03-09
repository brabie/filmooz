import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Account({navigation}){
  return(
    <View style={{flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent:  'center'}}>
    <Image source={require('../assets/Logo.png')}  style={{marginTop:60, height: 50, width: 220}}/>
    <Text style={{color: '#fff'}}>Account</Text>
    </View>
  )
}
