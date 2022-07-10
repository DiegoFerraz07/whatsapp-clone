import { Icon } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import {View, Text, Image, ImageBackground, FlatList} from 'react-native';
import { ChatConversation, HeaderConversation } from '../../components';
import { api } from '../../services';
import { ALL_CHAT, USER_FROM } from '../../themes/constants';
import notifyMessage from '../../themes/utils';
import { colors } from '../../themes/whitelabel';

export default function Chat({route, navigation}) {

  const [loading, setLoading] = useState(false);
  const [userFrom, setUserFrom] = useState(null);
  const [userFromId, setUserFromId] = useState(null);
  const [chatName, setChatName] = useState('');
  const [chatPhoto, setChatPhoto] = useState('');
  const [conversation, setConversation] = useState(null);
  const [lastViewed, setLastViewed] = useState(null);

  const { chatId } = route.params;

  const getAllChat = async () => {
    setLoading(true);
    await api.post(ALL_CHAT, {chatId})
    .then(res => {
      const { 
        userFromId, 
        userFromName, 
        userFromLastViewed, 
        userFromPhoto,
        conversation
      } = res.data.chatResponse;

      setChatName(userFromName);
      setChatPhoto(userFromPhoto);
      setUserFromId(userFromId);
      setConversation(conversation);
      setLastViewed(userFromLastViewed);
      setLoading(false);

    })
    .catch(err => {
      console.log(err);
      notifyMessage(err);
      setLoading(false);
    });
  }
  const getUserFromChat = async () => {
    await api.post(USER_FROM, {userId: userFromId})
    .then(res => {
      const {success, user} = res.data;
      if(success) {
        setUserFrom(user);
      } else {
        notifyMessage(res.data.message);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    if(userFromId) {
      getUserFromChat();
    }
  }, [userFromId])

  useEffect(() => {
    getAllChat();
  }, []);

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
    <ImageBackground source={require('../../assets/images/background.jpg')} style={{flex: 1}}> 
      
      {conversation && userFrom && (
      <FlatList
        data={conversation}
        ListEmptyComponent={() => (<Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>{chatName}</Text>)}
        ListHeaderComponent={() => <HeaderConversation conversation={conversation} />}
        keyExtractor={(item) => item.id} 
        renderItem={(item) => <ChatConversation item={item} userFrom={userFrom} />}
      />)}
    </ImageBackground>
      
  );
}
