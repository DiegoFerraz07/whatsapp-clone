import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/base';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

import {Conatiner, AppName, ConatinerAppName, ContainerActions} from './styles';

//https://reactnavigation.org/docs/headers/
export default function Header({state, descriptors, navigation}) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <Conatiner>
      <ConatinerAppName>
        <AppName>WhatsApp</AppName>
      </ConatinerAppName>
      <ContainerActions>
        <Icon name="search" size={30} style={{paddingRight: 10}} />
        <Menu
          visible={visible}
          anchor={<Text onPress={showMenu}>menu</Text>}
          onRequestClose={hideMenu}>
          <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
          <MenuItem disabled>Disabled item</MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
        </Menu>
      </ContainerActions>
    </Conatiner>
  );
}
