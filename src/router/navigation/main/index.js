import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Call, Home, Status} from '../../../containers';
import {Icon} from '@rneui/base';
import {colors} from '../../../themes/whitelabel';
import {Dimensions} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const sizeBar = (Dimensions.get('screen').width - 135) / 3;

export default function TabMain() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarItemStyle: {width: 'auto'},
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: '#000',
        tabBarPressOpacity: 0,
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
          height: 3,
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 60,
        },
        tabBarLabelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Cam"
        component={Call}
        options={{
          tabBarIconStyle: {marginTop: 7},
          title: '',
          tabBarIcon: () => <Icon name="photo-camera" type="material" />,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Home}
        options={{
          title: 'Conversas',
          tabBarLabelStyle: {width: sizeBar},
        }}
      />
      <Tab.Screen
        name="Status"
        component={Status}
        options={{
          title: 'Status',
          tabBarLabelStyle: {width: sizeBar},
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Call}
        options={{
          title: 'Chamadas',
          tabBarLabelStyle: {width: sizeBar},
        }}
      />
    </Tab.Navigator>
  );
}
