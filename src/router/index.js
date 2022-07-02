import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '../containers/home';
import Status from '../containers/status';
import Chamadas from '../containers/chamadas';

const Tab = createMaterialTopTabNavigator();

export default function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Conversas" component={Home} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Chamadas" component={Chamadas} />
    </Tab.Navigator>
  );
}
