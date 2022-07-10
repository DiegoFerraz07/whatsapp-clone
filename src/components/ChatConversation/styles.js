import styled from 'styled-components/native';
import {colors} from '../../themes/whitelabel';

export const ContainerChat = styled.View`
  min-height: 60px; 
  display: flex;
  align-self: ${(props) => props.isMe ? 'flex-end' : 'flex-start'};
  width: 70%;
  padding: 10px; 
  border-radius: 8px;
  background-color: ${(props) => props.isMe ? colors.primaryChat : '#FFF'};
  margin-top: 10px;
  margin-bottom: 10px; 
  margin-left: 20px;
  margin-right: 20px; 
  padding-left: 20px;
  padding-right: 20px;
  elevation: 2; 
  display: flex; 
  flex-direction: row; 
  justify-content: ${(props) => props.isMe ? 'flex-end' : 'flex-start'}; 
  align-items: center;
`;

export const MessageChat = styled.Text`
  color: ${(props) => props.isMe ? '#FFF' : colors.primaryChat};
  font-size: 16px;
`;