const Toggle_Fav = 'TOGGLE_FAV'

const toggleFav = (film, state) => {

	let nextState;
	let filmEssentials = { id: film.id, title: film.title, poster_path: film.poster_path}
	let favoriteFilmIndex = state.findIndex(item => item.id === film.id)

	if (favoriteFilmIndex !== -1) {
		nextState = state.filter( (item, index) => index !== favoriteFilmIndex)
	}
	else {
		nextState = [...state, filmEssentials]
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
