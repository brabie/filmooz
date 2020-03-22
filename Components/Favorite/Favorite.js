// EXT
import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// INT
import FilmItemSquare from './FilmItemSquare'
import FavContext from '../../Context/FavContext'
import Style from './FavoriteStyle'

export default function Favorite({navigation}){

  // CONSTANTS
  const src = '../../assets/Logo.png'

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
    <View style={Style.container}>

      <Image source={require(src)}  style={Style.image}/>
      <View style={Style.listContainer}>
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
