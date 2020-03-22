// EXT
import React, {useContext} from 'react'
import { Animated, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// INT
import FavContext from '../Context/FavContext.js'

export default function FavIcon({film}){

  // CONTEXT
  const context = useContext(FavContext)

  // CONTANTS
  let sourceImage
  let iconWidth
  let iconHeight

  const defaultDimensions = [55, 50]
  const favoriteDimensions = [77, 70]

  // LOGIC
  if ( context.favoritesFilm.findIndex(item => item.id === film.id) !== -1) {
    sourceImage = require('../assets/Icons/ic_favorite.png');
    Animate(defaultDimensions, favoriteDimensions);
  } else {
    sourceImage = require('../assets/Icons/ic_favorite_border.png');
    Animate(favoriteDimensions, defaultDimensions);
  }

  // FUNCTIONS
  function Animate ( A, B ) {
    iconWidth = new Animated.Value(A[0])
    iconHeight = new Animated.Value(A[1])
    Animated.spring( iconWidth, { toValue: B[0] } ).start()
    Animated.spring( iconHeight, { toValue: B[1]} ).start()
  }

  return(
    <TouchableOpacity
      style={{alignItems: 'center', marginTop: 10}}
      onPress={() => context.toggleFav(film)}>
           <Animated.Image
                source={sourceImage}
                style={{width: iconWidth, height: iconHeight}}
            />
    </ TouchableOpacity>
  );
}
