import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function FilmItemSquare(props){

  const film = props.film
  const navigation = props.navigation

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
        source={{uri: 'https://image.tmdb.org/t/p/w300'+ film.poster_path}}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.filmTitle} numberOfLines={2}>{film.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filmContainer:{
    width: 155,
    height: 160,
    borderRadius: 5,
    backgroundColor: '#960000',
    margin: 4
  },
  imageFilm:{
    width: 155,
    height: 120,
    backgroundColor: 'grey',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titleContainer:{
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filmTitle:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  }
})
