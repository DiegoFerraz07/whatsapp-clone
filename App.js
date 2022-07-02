import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
