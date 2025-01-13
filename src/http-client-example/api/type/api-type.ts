export type TMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

export type THeader = {
    'Content-Type':
        | 'application/json'
        | 'application/x-www-form-urlencode'
        | 'multipart/formed-data'
        | 'application/pdf'
        | 'audio/mpeg'
        | 'image/jpeg'
        | 'text/csv'
        | 'text/plain'
        | 'text/xml';
    Accept: 'application/json' | 'text/html' | 'application/xml';
    // TODO : 필요한 경우 추가
    Authorization?: string;
    Version?: string;
};

export type TResponseType = 'json' | 'text' | 'blob' | 'arraybuffer' | 'document';
