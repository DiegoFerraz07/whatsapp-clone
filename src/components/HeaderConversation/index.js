import {View, Text} from 'react-native';
import React from 'react';
import { colors } from '../../themes/whitelabel';

export default function HeaderConversation({conversation}) {
  //const firstTime = new Date(item.lastMessage.createdAt);

  //get first date time
  const getDateTimeInitial = () => {
    let initDateTime = null;
    conversation.map(item => {
      if(initDateTime) {
        // compare min date
        if(new Date(item.created_datetime) < new Date(initDateTime)) {
          initDateTime = item.created_datetime;
        } else {
          return initDateTime;
        }
      } else {
        initDateTime = item.created_datetime;
      }
    });

    return formatDate(initDateTime);
  }

  const formatDate = (date) => {
    console.log(date);
    const dateFormated = new Date(date.split(' ')[0]);

    const day = dateFormated.getDate().toString();
    const month = dateFormated.getMonth().toString();
    const year = dateFormated.getFullYear().toString();
    
    return `${day.length === 1 ? `0${day}` : day}/${ month.length === 1 ? `0${month}` : month}/${year}`;
  }

  return (
    <View style={{
      justifyContent: 'center', 
      alignItems: 'center', 
      padding: 5, 
      borderRadius: 15,
      marginVertical: 5,
      backgroundColor: colors.muted,
      alignSelf: 'center',
    }}>
      <Text style={{
        fontSize: 12,
        color: "#fff",
      }}>{getDateTimeInitial()}</Text>
    </View>
  );
}
