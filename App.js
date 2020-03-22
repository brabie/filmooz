// EXT
import React, {useReducer, useEffect} from 'react'
import Navigator from './Navigation/Navigation'
import {AsyncStorage} from 'react-native';

// INT
import FavContext from './Context/FavContext.js'
import FavReducer from './Context/FavReducer.js'

export default function App() {

	const [state, dispach] = useReducer(FavReducer, [])

	const toggleFav = (film) => {
		dispach({ type: 'TOGGLE_FAV',	payload: film	})
	}

	const setFav = (array) => {
		dispach({	type: 'INIT_FAV',	payload: array })
	}

	useEffect( () => {
		AsyncStorage.getItem('favorite')
		.then( (result) => { if (result) setFav(JSON.parse(result)) } )
	}, [])

	return (
		<FavContext.Provider value={{films: state, toggleFav}}>
			<Navigator/>
		</FavContext.Provider>
	);
}
