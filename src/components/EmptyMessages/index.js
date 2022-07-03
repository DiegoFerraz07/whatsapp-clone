import { Icon } from "@rneui/base";
import React, { useEffect, useState } from 'react'
import { Animated, Easing } from "react-native";

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

    const [animation, setAnimation] = useState(new Animated.Value(0));

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 900,
            useNativeDriver: false,
            easing: Easing.ease
        }).start();
    }

    useEffect(() => {
        setTimeout(() => {
            startAnimation();
        }, 3000);
    },[]);

    const widthInterpolate = 
        animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['20%', '70%'],
        });

    const animatedStyles = {
            width: widthInterpolate,
        };


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
            <Animated.View style={[animatedStyles, {paddingHorizontal: 10}]}>
                <ButtonSendMessage>
                    <Icon
                        containerStyle={{
                            width: 30,
                        }}
                        style={{  paddinRight: 35 }}
                        color="#FFF"
                        name="chat"
                        type="material"
                    />
                    <TextNewMessage>Enviar mensagem</TextNewMessage>
                </ButtonSendMessage>
            </Animated.View>

        </FooterContainer>
    </Container>
  )
}