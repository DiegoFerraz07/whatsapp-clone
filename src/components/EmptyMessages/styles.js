import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextEmpty = styled.Text`
    font-size: 12px;
    text-align: center;
    color: #000;
`;

export const ContactContainer = styled.View`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
`;

export const ContactPhoto = styled.Image`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border-style: solid;
    border-width: 1px;
    border-color: #FFFFFF;
    margin-right: -5px;
`;

export const BodyContainer = styled.View`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
`;

export const FooterContainer = styled.View`
    display: flex;
    width: 100%;
    flex: 1;
    padding-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: flex-end;
    align-items: flex-end;
`;
export const ButtonSendMessage = styled.TouchableOpacity.attrs({
        activeOpacity: 1,
        underlayColor: '#FFF',
    })`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #27c04a;
    border-radius: 55px;
    padding: 5px;
    margin-top: 10px;
`;

export const TextNewMessage = styled.Text`
    font-size: 13px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
    text-transform: uppercase;
    color: #FFF;
`;