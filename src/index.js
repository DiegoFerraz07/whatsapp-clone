import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/router';
import Toast from 'react-native-toast-message';


export default function App() {
  return (
      <NavigationContainer>
        <Router />
        <Toast />
      </NavigationContainer>
  );
}
