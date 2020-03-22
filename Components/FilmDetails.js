// EXT
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Image } from 'react-native';

// INT
import styles from'../Styles/FilmDetails.js';
import { getFilmDetailsFromApi, getImage } from'../API/TMDBapi.js'
import { FilmDetailsLocals } from '../shared/Locals'
import FavContext from '../Context/FavContext.js'
import FavIcon from './FavIcon'

export default function FilmDetails(props) {

	// CONTEXT
	const context = useContext(FavContext)

	// CONSTANTS
	const navigation = props.navigation
	const film = props.route.params.film

	// STATES
	const [isLoading, setisLoading] = useState(true)
	const [filmDetails, setFilmDetails] = useState(null)

	// FUNCTIONS
	function getNamesFromArray (target) {

		let dataArray = filmDetails[target];
		let values = ""

		for (let i = 0; i < dataArray.length; i++) {
		  if ( i != dataArray.length - 1) {
		  	values += dataArray[i].name + ", "
		  } else {
		  	values += dataArray[i].name
		  }
		}
		return values
	}

	useEffect(() => {
		getFilmDetailsFromApi(film.id).then(data => {
			setFilmDetails(data)
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
				filmDetails ?
					<ScrollView Style={styles.SV_Container}>

						<Image
							style={styles.imageFilm}
							source={{uri: getImage(filmDetails.poster_path)}}
						/>

						<Text style={styles.Title}> {filmDetails.title} </Text>

					  <FavIcon film={filmDetails}/>

						{ filmDetails.overview ? <Text style={styles.descriptionFilm}> {filmDetails.overview} </Text> : <></>}


						<View style={styles.Details}>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Average_Votes } :  {filmDetails.vote_average} / 10 </Text>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Number_of_votes } :  {filmDetails.popularity} </Text>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Release_date } :  {filmDetails.release_date} </Text>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Type } :  {getNamesFromArray('genres')} </Text>
							{ getNamesFromArray('production_companies').length !== 0 ? <Text style={styles.DetailsText}> { FilmDetailsLocals.Company } :  {getNamesFromArray('production_companies')} </Text> : <></>}
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

						<View style={styles.Details}>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Average_Votes } :  {film.vote_average} / 10 </Text>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Number_of_votes } :  {film.popularity} </Text>
							<Text style={styles.DetailsText}> { FilmDetailsLocals.Release_date } :  {film.release_date} </Text>
						</View>

					</ScrollView>
			}

		</View>
	)
}
