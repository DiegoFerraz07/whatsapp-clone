import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { Call, Home, Status } from '../../../containers';
import { Icon } from '@rneui/base';
import { colors } from '../../../themes/whitelabel';

const Tab = createMaterialTopTabNavigator();

export default function TabMain() {
  return (
      <Tab.Navigator
        initialRouteName='Chats'
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#000',
          tabBarPressOpacity: 0,
          tabBarPressColor: 'transparent',
          tabBarIndicatorStyle: {
            backgroundColor: colors.primary,
            height: 3,
          },
          tabBarStyle: {
            backgroundColor: '#FFF',
            borderTopWidth: 1,
            borderTopColor: '#E5E5E5',
            height: 60,
          },
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen  
          name="Cam"   
          component={Call}
          options={{
            title: '',
            tabBarIcon: () => (
             <Icon name='photo-camera' type='material' />
            ),
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
