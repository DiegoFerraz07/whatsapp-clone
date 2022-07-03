import styled from 'styled-components';
import { colors } from '../../themes/whitelabel';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
    underlayColor: '#FFF',
})`
    display: flex;
    width: 100%;
    flex-direction: row;
    padding: 10px
    border-bottom-width: .5px;
    border-bottom-color: #e6e6e601f;
    background-color: #fff;
`;

export const ContainerImage = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ContactImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-right: 10px;
`;

export const ContainerMessage = styled.View`
    display: flex;
    flex: 3;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`;

export const ContainerLastMessage = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const ContactName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

export const StatusMessage = styled.Text`
    color: ${(props) =>
    props.readed ? `${colors.primary}` : `${colors.muted}`};
    font-size: 17px;
    margin-right: 5px;
`;

export const ContactMessage = styled.Text.attrs({
    ellipsizeMode: "tail",
    numberOfLines: 1
})`
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
`;

export const ContainerStatus = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const MessageTime = styled.Text`
    font-size: 12px;
    color: ${colors.primary};
    margin-right: 5px;
`;

export const BadgeUnread = styled.Text`
    background-color: ${colors.primary};
    color: #fff;
    margin-top: 2px;
    font-size: 10px;
    padding: 2px 5px;
    border-radius: 10px;
    margin-left: 5px;
`;