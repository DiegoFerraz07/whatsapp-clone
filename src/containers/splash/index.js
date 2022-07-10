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
        try {
            const token = await AsyncStorage.getItem("@token");
            if(token) {
                if(progress < 1)
                    setProgress(progress + 0.5);
                verifyToken(token);
            } else {
                navigation.navigate(REGISTER);
            }
        } catch (error) {
            console.log('erro ao tentar pegar o token no storage: ', error);
            navigation.navigate(REGISTER);
        }
    }

    const verifyToken = async (token) => {
        await api.post(VERIFY_TOKEN)
            .then(res => {
                const { success } = res.data;
                if(!success) {
                    doLogin();
                } else {
                    navigation.navigate(MAIN);
                }
            }).catch(err => {
                doLogin();
            });
    }

    const doLogin = async () => {
        const phone = await AsyncStorage.getItem("@phone");
        const password = await AsyncStorage.getItem("@password");
        await api.post(LOGIN, {
            phone,
            password
        }).then(async res => {
            const { success, token } = res.data;
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
            navigation.navigate(REGISTER);
        });
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
