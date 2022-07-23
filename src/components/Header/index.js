import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/base';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

import {Conatiner, AppName, ConatinerAppName, ContainerActions} from './styles';
import {colors} from '../../themes/whitelabel';

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
        <Icon
          name="search"
          color={colors.unselected}
          size={30}
          style={{paddingRight: 10}}
        />
        <Menu
          visible={visible}
          style={{ 
            marginLeft:10, 
            marginTop:-20,
          }}
          anchor={
            <Icon
              onPress={showMenu}
              name="more-vert"
              type="material"
              color={colors.unselected}
              size={30}
              underlayColor={colors.primary}
              style={{marginRight: 0}}
            />
          }
          onRequestClose={hideMenu}>
          <MenuItem onPress={hideMenu}>Novo Grupo</MenuItem>
          <MenuItem onPress={hideMenu}>Nova Trasmissão</MenuItem>
          <MenuItem onPress={hideMenu}>Aparelhos Conectados</MenuItem>
          <MenuItem onPress={hideMenu}>Mensagens Favoritas</MenuItem>
          <MenuItem onPress={hideMenu}>Pagamentos</MenuItem>
          <MenuItem onPress={hideMenu}>Configurações</MenuItem>
        </Menu>
      </ContainerActions>
    </Conatiner>
  );
}
