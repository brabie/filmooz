// EXT
import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// INT
import FilmItemSquare from './FilmItemSquare'
import FavContext from '../Context/FavContext.js'

export default function Favorite({navigation}){

  // CONTEXT
  const context = useContext(FavContext)

  // STATE
  const [films, setFilms] = useState(null)

  useFocusEffect(
    React.useCallback(() => {
      setFilms(context.films)
    })
  );

  return(

    <View style={{flex: 1, backgroundColor: '#000', alignItems: 'center',}}>

      <Image source={require('../assets/Logo.png')}  style={{ marginTop:30, height: 50, width: 220 }}/>

      <View style={{flex: 1, width: 340, marginTop: 20, backgroundColor: '#1c1c1c', borderRadius: 10, padding: 7, paddingBottom: 0, marginBottom: '3%'}}>

        <FlatList
          numColumns={2}
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItemSquare film={item} navigation={navigation}/>}
        />

      </View>
    </View>

  )
}
