import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TabMain from './navigation';
import { Header } from '../components';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
       options={{
        header: (props) => <Header {...props} />,
        }}
        name="Home"  component={TabMain} />
    </Stack.Navigator>
  );
}
