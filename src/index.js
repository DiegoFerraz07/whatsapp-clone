import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/router';
import Toast from 'react-native-toast-message';
import store from './store';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
