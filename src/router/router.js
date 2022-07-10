import React from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import TabMain from './navigation';
import { Header } from '../components';
import { Chat, Register, Splash } from '../containers';
import { CHAT, MAIN, REGISTER, SPLASH } from '../themes/constants';
import { Easing } from 'react-native';

const Stack = createStackNavigator();

export default function Router() {

  const timingConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };

  const optionsSplash = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    cardStyle: {
      backgroundColor: '#fff',
    },
    animationTypeForReplace: 'pop',
    transitionSpec: {
      open: timingConfig,
      close: timingConfig,
    },
  };
  
  const options = {
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: timingConfig,
      close: timingConfig,
    },
  };

  return (
    <Stack.Navigator
      initialRouteName={SPLASH}
      screenOptions={{
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen
       options={{
        header: (props) => <Header {...props} />,
        }}
        name={MAIN}  component={TabMain} />
      <Stack.Screen 
        options={options}
        name={CHAT} 
        component={Chat} />
      <Stack.Screen 
        options={optionsSplash}
        name={SPLASH} 
        component={Splash} />
      <Stack.Screen 
        options={optionsSplash}
        name={REGISTER} 
        component={Register} />
    </Stack.Navigator>
  );
}
