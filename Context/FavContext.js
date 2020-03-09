import React, { createContext } from 'react'

const FavoriteContext = createContext({
	films: [],
	toggleFav: (film) => {}
})

export default FavoriteContext