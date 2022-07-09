import styled from 'styled-components';
import {colors} from '../../themes/whitelabel';

export const Conatiner = styled.View`
  display: flex;
  flex-direction: row;
  height: 60px;
  background-color: ${colors.primary};
`;

export const ConatinerAppName = styled.View`
  display: flex;
  flex: 1;
  padding: 5px;
`;

export const AppName = styled.Text`
  font-size: 22px;
  color: ${colors.unselected};
  padding: 5px;
`;

export const ContainerActions = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: 8px;
  align-items: center;
`;
