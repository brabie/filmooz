//EXT
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//INT
import Search from '../Components/Search'
import FilmDetails from '../Components/FilmDetails'

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
        name="Search"
        component={Search}
        options={{title: 'Search', headerShown: false}}
      />

      <Stack.Screen
        name="FilmDetailsSearch"
        component={FilmDetails}
        options={({ route }) => ({ title: route.params.film.title })}
      />

    </Stack.Navigator>

  );
}
