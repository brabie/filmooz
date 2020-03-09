import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { getImage } from '../API/TMDBapi'
import styles from'../Styles/FilmItem'

export default function FilmItem(props){

  const navigation = props.navigation
  const item = props.film
  const displayDetailforFilm = props.displayDetailforFilm

  return(
    <TouchableOpacity
    style={styles.filmContainer}
    onPress={() => navigation.navigate("FilmDetailsSearch", {film: item})}
    >

      <Image
        style={styles.imageFilm}
        source={{uri: getImage(item.poster_path)}}
      />
      <View style={styles.infoFilm}>
        <View style={styles.headerFilm}>
          <Text style={styles.filmTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.filmVote}>{item.vote_average}</Text>
        </View>
        <View style={styles.descriptionoFilm1}>
          <Text style={styles.filmOverview} numberOfLines={6}>{item.overview}</Text>
        </View>
        <View style={styles.descriptionoFilm2}>
          <Text style={styles.filmDate}>{item.release_date}</Text>
        </View>
      </View>

    </TouchableOpacity>
  );
}
