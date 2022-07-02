import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/containers/index';

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
