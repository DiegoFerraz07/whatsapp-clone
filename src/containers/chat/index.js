import React from 'react';
import {Text} from 'react-native';
import { EmptyMessages } from '../../components';
import ChatActive from '../../components/ChatActive';

import { ScrollContainer, ListMessage } from './styles';

const activeChat = require('../../../bin/chats/active.json');

export default function Chat() {
  return (
    <ScrollContainer>
      <ListMessage
        ListEmptyComponent={() => <EmptyMessages />}
        data={activeChat}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ChatActive  item={item} />}
      />
    </ScrollContainer>
  );
}
