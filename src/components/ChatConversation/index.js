import React from 'react';
import { ContainerChat, MessageChat } from './styles';

export default function ChatConversation({item, userFrom}) {
  const {message, from} = item.item;
  const isMe = from === userFrom.id;

  return (
    <ContainerChat isMe={isMe}>
      <MessageChat isMe={isMe}>{message}</MessageChat>
    </ContainerChat>
  );
}
