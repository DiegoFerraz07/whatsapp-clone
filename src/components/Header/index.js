import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/base';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {connect, useDispatch} from 'react-redux';

import {Conatiner, AppName, ConatinerAppName, ContainerActions} from './styles';
import {colors} from '../../themes/whitelabel';
import {CONFIG} from '../../themes/constants';
import {changeTheme} from '../../actions/settings';

//https://reactnavigation.org/docs/headers/
function Header({state, descriptors, navigation}) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

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
            marginLeft: 10,
            marginTop: -20,
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
          <MenuItem onPress={() => dispatch(changeTheme('white'))}>
            Novo Grupo
          </MenuItem>
          <MenuItem onPress={() => dispatch(changeTheme('blue'))}>
            Nova Trasmissão
          </MenuItem>
          <MenuItem onPress={hideMenu}>Aparelhos Conectados</MenuItem>
          <MenuItem onPress={hideMenu}>Mensagens Favoritas</MenuItem>
          <MenuItem onPress={hideMenu}>Pagamentos</MenuItem>
          <MenuItem onPress={() => navigation.navigate(CONFIG)}>
            Configurações
          </MenuItem>
        </Menu>
      </ContainerActions>
    </Conatiner>
  );
}

export default Header;
