const Toggle_Fav = 'TOGGLE_FAV'

const toggleFav = (film, state) => {
	
	let nextState;
	const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === film.id)

	if (favoriteFilmIndex !== -1) {
		nextState = {
			...state,
			favoritesFilm: state.favoritesFilm.filter( (item, index) => index !== favoriteFilmIndex)
		}
	}
	else {
		nextState = {
			...state,
			favoritesFilm: [...state.favoritesFilm, film]
		}
	}
 	return nextState || state

}

export default (state, action) => { // action = type + valeur
	switch(action.type){
		case Toggle_Fav:

			return toggleFav(action.payload, state)
		default :
			return state
	}
} 