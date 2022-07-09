import { Icon } from '@rneui/base';
import React, { useEffect } from 'react';
import {View, Text, Image} from 'react-native';
import { api } from '../../services';
import { ALL_CHAT } from '../../themes/constants';
import { colors } from '../../themes/whitelabel';

export default function Chat({route, navigation}) {

  const [chatName, setChatName] = React.useState('');
  const [chatPhoto, setChatPhoto] = React.useState('');

  
  const { chatId } = route.params;


  const getAllChat = async () => {
    await api.post(ALL_CHAT, {chatId})
    .then(res => {
      const { 
        userFromName, 
        userFromLastViewed, 
        userFromPhoto 
      } = res.data.chatResponse;

      setChatName(userFromName);
      setChatPhoto(userFromPhoto);
      console.log('CHATS: ', res.data.chatResponse);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getAllChat();

  navigation.setOptions({
    headerTitle: '',
    headerLeft: () => (
      <View style={{ flexDirection: 'row'}}>
        <Icon name="arrow-back" onPress={() => navigation.goBack()} type="material" size={30} color={colors.unselected} />
        <Image source={{uri: chatPhoto}} style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}} />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.unselected}}>{chatName}</Text>
      </View>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row'}}>
        <Icon name="videocam" size={28} color={colors.unselected} type="material" />
        <Icon name="call" size={23} color={colors.unselected} type="material" />
        <Icon name="more-vert" color={colors.unselected} type="material" />
      </View>
    ),
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.unselected,
    
  });

  return (
    <View>
      <Text>Chat</Text>
    </View>
      
  );
}
