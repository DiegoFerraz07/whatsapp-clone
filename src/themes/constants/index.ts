
export const MAIN           = 'MAIN'; 
export const CAM            = 'CAM'; 
export const HOME           = 'HOME'; 
export const CHAT           = 'CHAT'; 
export const ACTIVE_CHATS   = 'ACTIVE_CHATS'; 
export const CALL           = 'CALL'; 
export const STATUS         = 'STATUS'; 

export const BASE_URL = 'http://192.168.0.107:3000';

enum ApiVersion {
    v1 = '/api/v1',
}

export const ALL_CHAT = `${ApiVersion.v1}/all-chat`;
