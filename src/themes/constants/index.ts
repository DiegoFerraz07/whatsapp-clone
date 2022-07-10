
export const MAIN           = 'MAIN'; 
export const CAM            = 'CAM'; 
export const HOME           = 'HOME'; 
export const CHAT           = 'CHAT'; 
export const SPLASH         = 'SPLASH'; 
export const ACTIVE_CHATS   = 'ACTIVE_CHATS'; 
export const CALL           = 'CALL'; 
export const STATUS         = 'STATUS'; 
export const REGISTER       = 'REGISTER'; 

export const BASE_URL = 'http://192.168.0.107:3000';

enum ApiVersion {
    v1 = '/api/v1',
}

export const LOGIN = `${ApiVersion.v1}/login`;
export const VERIFY_TOKEN = `${ApiVersion.v1}/verify-token`;
export const GENERATE_PIN = `${ApiVersion.v1}/generate-pin`;

export const ALL_CHAT = `${ApiVersion.v1}/all-chat`;