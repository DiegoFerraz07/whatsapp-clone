import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { Call, Home, Status } from '../../../containers';


const Tab = createMaterialTopTabNavigator();

export default function TabMain() {
  return (
      <Tab.Navigator
        initialRouteName='Chats'>
        <Tab.Screen  
          name="Cam"   
          component={Home}
          options={{
            title: 'CAM',
          }} 
        />
        <Tab.Screen 
            name="Chats"  
            component={Home}
            options={{
              title: 'Conversas',
            }} 
        />
        <Tab.Screen 
          name="Status" 
          component={Status} 
          options={{
            title: 'Status',
          }}
        />
        <Tab.Screen 
          name="Calls" 
          component={Call}
          options={{
            title: 'Chamadas',
          }} 
        />
      </Tab.Navigator>
  );
}
