// EXT
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

//INT
import TabNavigation from './TabNavigation'

export default function Navigator() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
