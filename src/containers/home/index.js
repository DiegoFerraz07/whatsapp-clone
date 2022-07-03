import React from 'react';

import { EmptyMessages } from '../../components';
import ChatActive from '../../components/ChatActive';

import { ListMessage } from './styles';

const activeChat = require('../../../bin/chats/active.json');

export default function Home({ navigation }) {
  return (
    <ListMessage
        ListEmptyComponent={() => <EmptyMessages />}
        data={activeChat}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ChatActive  item={item} navigation={navigation} />}
      />
  );
}
