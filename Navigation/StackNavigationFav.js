//EXT
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//INT
import Favorite from '../Components/Favorite/Favorite'
import FilmDetails from '../Components/Details/FilmDetails'

const Stack = createStackNavigator();

export default function Navigator() {
  return (

    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#d01616',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center'
      }}
    >

      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{title: 'Favorite', headerShown: false}}
      />

      <Stack.Screen
        name="FilmDetailsFav"
        component={FilmDetails}
        options={({ route }) => ({ title: route.params.film.title })}
      />

    </Stack.Navigator>

  );
}
