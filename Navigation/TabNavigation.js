// EXT
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// INT
import StackNavigationSearch from './StackNavigationSearch'
import StackNavigationFav from './StackNavigationFav'
import Account from '../Components/Account/Account'

const Tab = createMaterialBottomTabNavigator();

export default function TabNav(){

  return(

      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#960000"
        barStyle={{ backgroundColor: '#d01616' }}
      >

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-search" color={color} size={25} />
            ),
          }}
          name="Search" component={StackNavigationSearch}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-heart" color={color} size={25} />
            ),
          }}
          name="Favorite" component={StackNavigationFav}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={25} />
            ),
          }}
          name="Account" component={Account}
        />

      </Tab.Navigator>
  )
}
