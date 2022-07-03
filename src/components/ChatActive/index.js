import { View, Text } from 'react-native'
import React from 'react'

import { BadgeUnread, ContactImage, ContactMessage, ContactName, Container, ContainerImage, ContainerLastMessage, ContainerMessage, ContainerStatus, MessageTime, StatusMessage } from './styles'
import { Icon } from '@rneui/base';
import { colors } from '../../themes/whitelabel';

export default function ChatActive({item, navigation}) {

    const formatDate = (date) => {
        const dateFormated = new Date(date);
        const hours = dateFormated.getHours().toString();
        const minutes = dateFormated.getMinutes().toString();
        return `${hours.length === 1 ? `0${hours}` : hours}:${minutes.length === 1 ? `0${minutes}` : minutes}`;
    } 

    const renderStatusMessage = (item) => {
        if(item.delivered && !item.readed) {
            return (
                <Icon 
                    name="done-all" 
                    type='material' 
                    size={20} 
                    color={colors.muted} />
            )
        } else if (item.readed) {
            return (
                <Icon 
                    name="done-all" 
                    type='material' 
                    size={20} 
                    color={colors.primary} />
            )
        } else {
            return (
                <Icon 
                    name="check" 
                    type='material' 
                    size={20} 
                    color={colors.muted} />
            )
        }
    }

  return (
    <Container>
        <ContainerImage>
            <ContactImage source={{ uri: item.photo}} />
        </ContainerImage>
        <ContainerMessage>
            <ContactName>{item.name}</ContactName>
            <ContainerLastMessage>
                <StatusMessage>
                    {renderStatusMessage(item)}
                </StatusMessage>
                <ContactMessage>{item.last_message}</ContactMessage>
            </ContainerLastMessage>
        </ContainerMessage>
        <ContainerStatus>
            <MessageTime>{formatDate(item.date_time_delivered)}</MessageTime>
            {
                item.total_unread > 0 && <BadgeUnread>{item.total_unread}</BadgeUnread>
            }
        </ContainerStatus>
    </Container>
  )
}