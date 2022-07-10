import React, { useEffect, useState } from 'react';
import { Dimensions, Image, SafeAreaView, Text, View} from 'react-native';
import { colors } from '../../themes/whitelabel';
import ProgressBar from 'react-native-progress/Bar'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOGIN, MAIN, REGISTER, VERIFY_TOKEN } from '../../themes/constants';
import { api } from '../../services';

export default function Splash({navigation}) {
    const [progress, setProgress] = useState(0);
    
    const checkStorage = async () => {
        updateProgress(0.3);
        try {
            const token = await AsyncStorage.getItem("@token");
            if(token) {
                verifyToken();
            } else {
                navigation.navigate(REGISTER);
            }
        } catch (error) {
            console.log('erro ao tentar pegar o token no storage: ', error);
            navigation.navigate(REGISTER);
        }
    }

    const verifyToken = async () => {
        updateProgress(0.3);
        api.post(VERIFY_TOKEN)
            .then(res => {
                const { success } = res.data;
                if(!success) {
                    doLogin();
                } else {
                    updateProgress(1);
                    navigation.navigate(MAIN);
                }
            }).catch(err => {
                console.log('erro ao verificar token: ', err);
                doLogin();
            });
    }

    const doLogin = async () => {
        updateProgress(0.3);
        const phone = await AsyncStorage.getItem("@phone");
        const password = await AsyncStorage.getItem("@password");
        await api.post(LOGIN, {
            phone,
            password
        }).then(async res => {
            const { success, token } = res.data;
            updateProgress(1);
            if(success) {
                try {
                    await AsyncStorage.setItem('@token', token);
                } catch (e) {
                    console.log('erro ao tentar salvar no storage: ', e);
                }
                navigation.navigate(MAIN);
            } else {
                navigation.navigate(REGISTER);
            }
        }).catch(err => {
            updateProgress(1);
            console.log('erro ao fazer login: ', err);
            navigation.navigate(REGISTER);
        });
    }

    const updateProgress = (progress) => {
        if(progress === 1) setProgress(progress);
        if(progress < 1) setProgress(progress ++);
    }

    useEffect(() => {
        checkStorage();
    }, []);

  return (
    <SafeAreaView 
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary,
        }}>
            <Image source={require('../../assets/images/logo.png')} style={{width: 200, height: 200}} />
            <View style={{ position: 'absolute', bottom: 30, alignItems: 'center'}}>
                <Text style={{ color: colors.unselected, fontSize: 18}}>
                    From
                </Text>
                <Text style={{ color: colors.unselected, fontSize: 20, fontWeight: 'bold'}}>
                    Ferraz Software
                </Text>
                <View style={{display: 'flex', width: Dimensions.get('screen').width}}>
                    <ProgressBar
                        style={{ marginTop: 10}} 
                        direction="counter-clockwise"
                        height={3}
                        borderWidth={0}
                        borderRadius={1}
                        color={colors.unselected}
                        progress={progress} 
                        width={null} />

                </View>
            </View>
    </SafeAreaView>
  );
}
