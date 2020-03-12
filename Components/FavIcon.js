import React, {useContext} from 'react'
import { Animated, Image, TouchableOpacity } from 'react-native'

import FavContext from '../Context/FavContext.js'

export default function FavIcon({film}){

  console.log('FavIcon', film)

  const context = useContext(FavContext)

  const iconWidth = new Animated.Value(55)
  const iconHeight = new Animated.Value(50)

  let sourceImage

  if (context.favoritesFilm.findIndex(item => item.id === film.id) !== -1) {
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
  } else {
    sourceImage = require('../assets/Icons/ic_favorite_border.png')
  }

  return(
    <TouchableOpacity
      style={{alignItems: 'center'}}
      onPress={() => context.toggleFav(film)}>
           <Animated.Image
                source={sourceImage}
                style={{marginTop: 15, width: iconWidth, height: iconHeight}}/>
    </ TouchableOpacity>
  );
}
