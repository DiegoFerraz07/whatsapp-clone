import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Call, Home, Status} from '../../../containers';
import {Icon} from '@rneui/base';
import {colors} from '../../../themes/whitelabel';
import {Dimensions} from 'react-native';
import { ACTIVE_CHATS, CALL, CAM, CHAT, HOME, STATUS } from '../../../themes/constants';
import Cam from '../../../containers/cam';

const Tab = createMaterialTopTabNavigator();
const sizeBar = (Dimensions.get('screen').width - 135) / 3;

export default function TabMain() {
  return (
    <Tab.Navigator
      initialRouteName={ACTIVE_CHATS}
      screenOptions={({ navigation }) => (
        {
        tabBarItemStyle: {width: 'auto'},
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.unselected,
        tabBarPressOpacity: 0,
        tabBarPressColor: 'transparent',
        tabBarIndicatorStyle: {
          backgroundColor: colors.white,
          height: 3,
        },
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: navigation.getState().index == 0 ? 0 : 60,
        },
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen
        name={CAM}
        component={Cam}
        options={{
          tabBarIconStyle: {marginTop: 7},
          title: '',
          tabBarIcon: () => <Icon name="photo-camera" color={colors.unselected} type="material" />,
        }}
      />
      <Tab.Screen
        name={ACTIVE_CHATS}
        component={Home}
        options={{
          title: 'Conversas',
          tabBarLabelStyle: {width: sizeBar, fontSize: 12 },
        }}
      />
      <Tab.Screen
        name={STATUS}
        component={Status}
        options={{
          title: 'Status',
          tabBarLabelStyle: {width: sizeBar, fontSize: 12},
        }}
      />
      <Tab.Screen
        name={CALL}
        component={Call}
        options={{
          title: 'Chamadas',
          tabBarLabelStyle: {width: sizeBar, fontSize: 12},
        }}
      />
    </Tab.Navigator>
  );
}
