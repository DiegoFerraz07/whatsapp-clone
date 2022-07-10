import Toast from 'react-native-toast-message';

export default function notifyMessage(msg: string, type: string = 'error', position: string = 'bottom', duration: number = 2000) {
    Toast.show({type, text1: msg, position, visibilityTime: duration});
}

