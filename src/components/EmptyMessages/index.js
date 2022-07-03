import { Icon } from "@rneui/base";
import React from 'react'

import { 
    Container, 
    ContactPhoto,
    ContactContainer, 
    TextEmpty, 
    ButtonSendMessage,
    TextNewMessage,
    FooterContainer,
    BodyContainer
} from './styles';

const contacts = require('../../../bin/contacts/contacts.json');

export default function EmptyMessages() {
  return (
    <Container>
        <BodyContainer>
            <ContactContainer>
                {contacts.slice(0,5).reverse().map(contact => (
                    <ContactPhoto
                        key={contact.id}
                        source={{ uri: contact.photo }}  
                    />
                ))}
            </ContactContainer>
            <TextEmpty>{`${contacts.slice(0,3).map(contact => contact.name)} e mais ${contacts.length - 3} contatos estão no WhatsApp`}</TextEmpty>
        </BodyContainer>
        <FooterContainer>
            <ButtonSendMessage>
                <Icon
                    style={{ marginLeft: 10 }}
                    color="#FFF"
                    name="chat"
                    type="material"
                />
                <TextNewMessage>Enviar mensagem</TextNewMessage>
            </ButtonSendMessage>

        </FooterContainer>
    </Container>
  )
}