// EXT
import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// INT
import FilmItemSquare from './FilmItemSquare'
import filmEx from '../Helpers/filmData'
import FavContext from '../Context/FavContext.js'

export default function Favorite({navigation}){

  // CONTEXT
  const context = useContext(FavContext) 

  // STATE
  const [films, setFilms] = useState(null)

  useFocusEffect(
    React.useCallback(() => {
      setFilms(context.favoritesFilm) 
    })
  );

  return(

    <View style={{flex: 1, backgroundColor: '#000', alignItems: 'center',}}>
      <View style={{marginTop:50}}>
        <Image source={require('../assets/Logo.png')}  style={{height: 50, width: 220}}/>
      </View>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20, marginTop: 30}}>My favorite Films:</Text>
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
