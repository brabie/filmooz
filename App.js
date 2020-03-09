// EXT
import React, {useReducer} from 'react'
import Navigator from './Navigation/Navigation'

// INT
import FavContext from './Context/FavContext.js'
import FavReducer from './Context/FavReducer.js'

export default function App() {

	const initialState = { favoritesFilm :  [] }

	const [state, dispach] = useReducer(FavReducer, initialState)

	//console.log(FavReducer.toString())

	const toggleFav = (film) => {
		dispach({
			type: 'TOGGLE_FAV',
			payload: film
		})
	}

	return (
		<FavContext.Provider value={{favoritesFilm: state.favoritesFilm, toggleFav}}>
			<Navigator/>
		</FavContext.Provider>
	);
}
