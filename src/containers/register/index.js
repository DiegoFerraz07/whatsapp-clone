import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Keyboard, SafeAreaView, StyleSheet, View } from 'react-native';
import { colors } from '../../themes/whitelabel';
import PhoneInput from 'react-native-phone-number-input';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Icon, Input } from '@rneui/base';
import notifyMessage from '../../themes/utils';
import {  api, web } from '../../services';
import { GENERATE_PIN, HOME, LOGIN, MAIN } from '../../themes/constants';
import { ButtonNext, ContainerBody, ContainerButton, ContainerResend, ContainerRounded, TextNumber, TextResendCode, TextResendCodeMuted, TextResendCodePrimary } from './styles';


export default function Register({ navigation }) {

    const [phoneNumber, setphoneNumber] = useState('');
    const [pin, setPin] = useState(null);
    const [pin1, setPin1] = useState(null);
    const [pin2, setPin2] = useState(null);
    const [pin3, setPin3] = useState(null);
    const [pin4, setPin4] = useState(null);
    const phoneInput = useRef(null);
    const refPin1 = useRef(null);
    const refPin2 = useRef(null);
    const refPin3 = useRef(null);
    const refPin4 = useRef(null);

    const clearPin = () => {
        setPin(null);
        setPin1(null);
        setPin2(null);
        setPin3(null);
        setPin4(null);
        setphoneNumber('');
    }


    const buttonPress = async () => {
        const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
        if(!checkValid) {
            notifyMessage('Invalid phone number');
            return;
        }
        Keyboard.dismiss();
        
        let phone = phoneNumber;
        if(phone.includes('+')) {
            phone = phone.replace('+', '');
        }

        await web.post(GENERATE_PIN, {
            phone
        }).then(res => {
            const { success, pin } = res.data;
            if(success) {
                notifyMessage(`You Pin is: ${pin}`, 'success', 'top', 10000);
                setPin(pin);
            }
        }).catch(err => {
            console.log({err});
        });        

    };

    const validatePin = async () => {
        if(!pin1 || !pin2 || !pin3 || !pin4) {
            notifyMessage('Please enter your pin');
            return;
        }

        const pinEntered = `${pin1}${pin2}${pin3}${pin4}`;
        if(pinEntered !== pin.toString()) {
            notifyMessage('Invalid pin');
            return;
        }

        
        await api.post(LOGIN, {
            phone: phoneNumber,
            password: pinEntered
        }).then(res => {
            const { success, token } = res.data;
            if(success) {
                try {
                    AsyncStorage.setItem('@phone', phoneNumber);
                    AsyncStorage.setItem('@password', pinEntered);
                    AsyncStorage.setItem('@token', token);
                } catch (e) {
                    console.log('erro ao tentar salvar no storage: ', e);
                }
                navigation.navigate(MAIN);
            }
        }).catch(err => {
            console.log({err});
        });

    }

    const renderPinScreen = () => {
        return (
            <ContainerRounded>
                <ContainerBody>
                    <TextNumber>Insira o pin gerado e enviado para o número: {phoneNumber}</TextNumber>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 30, marginBottom: 20}}>
                        <Input
                            ref={refPin1}
                            value={pin1}
                            onChangeText={text => setPin1(text)}
                            autoFocus
                            onSubmitEditing={() => refPin2.current?.focus()}
                            onKeyPress={() => refPin2.current?.focus()}
                            keyboardType='numeric'
                            maxLength={1}
                            containerStyle={{ width: 80, }}
                            style={{ fontSize: 28, textAlign: 'center', borderColor: colors.muted, marginRight: 10 }}
                        />
                        <Input
                            ref={refPin2}
                            value={pin2}
                            onChangeText={text => setPin2(text)}
                            onSubmitEditing={() => refPin3.current?.focus()}
                            onKeyPress={() => refPin3.current?.focus()}
                            keyboardType='numeric'
                            maxLength={1}
                            containerStyle={{ width: 80, }}
                            style={{ fontSize: 28, textAlign: 'center', borderColor: colors.muted, marginRight: 10 }}
                        />
                        <Input
                            ref={refPin3}
                            value={pin3}
                            onChangeText={text => setPin3(text)}
                            onSubmitEditing={() => refPin4.current?.focus()}
                            onKeyPress={() => refPin4.current?.focus()} 
                            keyboardType='numeric'
                            maxLength={1}
                            containerStyle={{ width: 80, }}
                            style={{ fontSize: 28, textAlign: 'center', borderColor: colors.muted, marginRight: 10 }}
                        />
                        <Input
                            ref={refPin4}
                            value={pin4}
                            onChangeText={text => setPin4(text)}
                            keyboardType='numeric'
                            maxLength={1}
                            containerStyle={{ width: 80, }}
                            style={{ fontSize: 28, textAlign: 'center', borderColor: colors.muted, marginRight: 10 }}
                        />
                    </View>
                    <View>

                    </View>
                    <ContainerResend>
                        <TextResendCodeMuted>Não recebeu o pin? </TextResendCodeMuted>
                        <TextResendCodePrimary
                         onPress={() => clearPin()}>
                            ENVIAR NOVAMENTE
                        </TextResendCodePrimary>
                    </ContainerResend>

                    <ContainerButton>
                        <ButtonNext onPress={validatePin}>
                            <Icon
                                name="arrow-forward"
                                size={20}
                                color={colors.white}
                            />
                        </ButtonNext>
                    </ContainerButton>



                </ContainerBody>
            </ContainerRounded>
        );
    }

    const renderPhoneScreen = () => {
        return (
            <ContainerRounded>
                <ContainerBody>
                    <TextNumber>Digite o seu número de telefone para fazer login ou cadastrar-se.</TextNumber>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="BR"
                        layout="first"
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.textInput}
                        onChangeFormattedText={text => {
                            setphoneNumber(text);
                        }}
                    />
                    <ContainerButton>
                        <ButtonNext onPress={buttonPress}>
                            <Icon
                                name="arrow-forward"
                                size={20}
                                color={colors.white}
                            />
                        </ButtonNext>
                    </ContainerButton>
                </ContainerBody>
            </ContainerRounded>
        );
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.primary,
            }}>
            {pin && renderPinScreen()}
            {!pin && renderPhoneScreen()}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
        marginTop: 10

    },
    phoneContainer: {
      width: Dimensions.get('screen').width - 20,
      height: 50,
      borderWidth: 0
    },
    textInput: {
      paddingVertical: 0,
    },
  });