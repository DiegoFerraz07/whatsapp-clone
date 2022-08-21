import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../../../themes/whitelabel/index';

export default function Config() {
  return (
    <View style={styles.container}>
        <View style={styles.perfil}>
            <TouchableOpacity style={styles.botaoPerfil}>
                <Image style={styles.imagePerfil} source={require('../../../assets/images/thor.png')} />
                <View style={styles.containerName}>
                    <Text style={styles.namePerfil}>Thor</Text>
                    <Text style={styles.nameFrase}>Melhor Vingador</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    perfil: {
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.muted,
    },
    botaoPerfil: {
        display: 'flex',
        flexDirection: 'row',
    },
    imagePerfil: {
        width: 105,
        height: 105,
        borderRadius: 70,
    },
    containerName: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
    },  
    namePerfil: {
        fontSize: 22,
        paddingBottom: 5, 
    },
    nameFrase: {
        fontSize: 12,
        color: colors.muted
    }
})
