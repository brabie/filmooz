// EXT
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Animated, View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity } from 'react-native';

// INT
import styles from'../Styles/FilmDetails.js';
import { getFilmDetailsFromApi, getImage } from'../API/TMDBapi.js'
import { FilmDetailsLocals } from '../shared/Locals'
import FavContext from '../Context/FavContext.js'

export default function FilmDetails(props) {


  	// CONTEXT
  	const context = useContext(FavContext)

	// CONSTANTS
	const navigation = props.navigation
	const film = props.route.params.film
  const iconWidth = new Animated.Value(55)
  const iconHeight = new Animated.Value(50)

	// STATES
	const [isLoading, setisLoading] = useState(true)
	const [filmAdditionalDetails, setFilmAdditionalDetails] = useState(null)

	// FUNCTIONS
	function getNamesFromArray (target) {

		let dataArray = filmAdditionalDetails[target];
		//console.log(dataArray)
		let values = ""

		for (let i = 0; i < dataArray.length; i++) {
		  if ( i != dataArray.length - 1) {
		  	//console.log(dataArray[i])
		  	values += dataArray[i].name + ", "
		  } else {
		  	values += dataArray[i].name
		  }
		}

		return values
	}

  function displayFavIcon(){
    var sourceImage = require('../assets/Icons/ic_favorite_border.png')
    if (context.favoritesFilm.findIndex(item => item.id === film.id) !== -1){
      sourceImage = require('../assets/Icons/ic_favorite.png')
      Animated.spring(
        iconWidth,{
          toValue: 77,
          bounciness: 15
        }
      ).start()
      Animated.spring(
        iconHeight,{
          toValue: 70,
          bounciness: 20
        }
      ).start()
    }
    return(
      <Animated.Image
        source={sourceImage}
        style={{marginTop: 15, width: iconWidth, height: iconHeight}}
      />
    )
  }

	useEffect(() => {
		getFilmDetailsFromApi(film.id).then(data => {
			setFilmAdditionalDetails(data)
			setisLoading(false)
		})
	}, []);

	return (
		<View style={styles.container}>
			{ isLoading &&
				<View style={styles.loading_container}>
					<ActivityIndicator size="large" color="#d01616" />
				</View>
			}
			{
				filmAdditionalDetails ?
					<ScrollView Style={styles.SV_Container}>

						<Image
							style={styles.imageFilm}
							source={{uri: getImage(film.poster_path)}}
						/>
						<Text style={styles.Title}> {film.title} </Text>
						<TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => context.toggleFav(film)}>
					    {displayFavIcon()}
					  </TouchableOpacity>
						<Text style={styles.descriptionFilm}> {film.overview} </Text>
						<View style={styles.Numbers}>
							<Text style={styles.Vote}> { FilmDetailsLocals.Average_Votes } :  {film.vote_average} / 10 </Text>
							<Text style={styles.Popularity}> { FilmDetailsLocals.Number_of_votes } :  {film.popularity} </Text>
							<Text style={styles.dateFilm}> { FilmDetailsLocals.Release_date } :  {film.release_date} </Text>
							<Text style={styles.dateFilm}> { FilmDetailsLocals.Type } :  {getNamesFromArray('genres')} </Text>
							<Text style={styles.dateFilm}> { FilmDetailsLocals.Company } :  {getNamesFromArray('production_companies')} </Text>
						</View>
					</ScrollView>

				:

					<ScrollView Style={styles.SV_Container}>

						<Image
							style={styles.imageFilm}
							source={{uri: getImage(film.poster_path)}}
						/>
						<Text style={styles.Title}> {film.title} </Text>
						<Text style={styles.descriptionFilm}> {film.overview} </Text>
						<View style={styles.Numbers}>
							<Text style={styles.Vote}> { FilmDetailsLocals.Average_Votes } :  {film.vote_average} / 10 </Text>
							<Text style={styles.Popularity}> { FilmDetailsLocals.Number_of_votes } :  {film.popularity} </Text>
							<Text style={styles.dateFilm}> { FilmDetailsLocals.Release_date } :  {film.release_date} </Text>
						</View>
					</ScrollView>
			}

		</View>
	)
}
