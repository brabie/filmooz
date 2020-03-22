// EXT
import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

// INT
import styles from './FilmItemSquareStyle'

export default function FilmItemSquare({film, navigation}){

  // CONSTANTS
  let src = 'https://image.tmdb.org/t/p/w300'+ film.poster_path

  // FONCTIONS
  function displayDetailforFilm(){
    return(
      navigation.navigate("FilmDetailsFav", {film: film})
    )
  }

  return(

    <TouchableOpacity
      style={styles.filmContainer}
      onPress={() => displayDetailforFilm()}
    >
        <Image
          style={styles.imageFilm}
          source={{uri: src}}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.filmTitle} numberOfLines={2}>{film.title}</Text>
        </View>

    </TouchableOpacity>
  );
}
