import React, { createContext } from 'react'

const FavoriteContext = createContext({
	films: [],
	toggleFav: () => {}
})

export default FavoriteContext
