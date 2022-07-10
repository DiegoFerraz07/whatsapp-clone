import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import { colors } from "../../themes/whitelabel";


const widthScreen = parseInt(Dimensions.get('screen').width);
const heightScreen = parseInt(Dimensions.get('screen').height);

export const ContainerRounded = styled.View`
    display: flex;
    position: absolute; 
    background-color: #FFF;
    bottom: 0px; 
    height: ${heightScreen / 1.4}px; 
    width: 680px;
    border-top-left-radius: 550px; 
    border-top-right-radius: 550px; 
    justify-content: center; 
    align-items: center; 
`;

export const ContainerBody = styled.View`
    display: flex;
    flex: 1; 
    margin-top: 100px; 
    widht: ${widthScreen}px;
`; 

export const TextNumber = styled.Text`
    font-size: 18px;
    margin-bottom: 20px; 
    font-weight: bold; 
    text-align: center; 
    width: ${widthScreen - 20}px;
    color: ${colors.muted};
`;

export const ContainerButton = styled.View`
    display: flex;  
    position: absolute; 
    bottom: 20px; 
    right: 30px;
`;

export const ButtonNext = styled.TouchableOpacity`
    display: flex;
    align-items: center; 
    justify-content: center; 
    width: 70px;
    height: 70px; 
    background-color: ${colors.primary};
    borderRadius: 40px;
`;

export const ContainerResend = styled.View`
    display: flex; 
    flexDirection: row;
    width: ${widthScreen - 20}px;
`;

export const TextResendCodeMuted = styled.Text`
    font-size: 14px;
    margin-bottom: 20px; 
    font-weight: bold; 
    text-align: center; 
    color: ${colors.muted};
`;
export const TextResendCodePrimary = styled.Text`
    font-size: 14px;
    margin-bottom: 20px; 
    font-weight: bold; 
    text-align: center; 
    color: ${colors.primary};
`;