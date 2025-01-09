export type TMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type TUrl = {
    protocol: 'http' | 'https';
    host: string; // Domain, IP
    port: number;
    params?: string; // PathParam, QueryParam
};

// TODO : 실제 구체화하는 영역에서 제네릭 T에 대한 제한 추가예정 EX) Bearer 토큰, Basic encoded 등..
export type THeader<T extends string> = {
    authorization: T;
    contentType:
        | 'Application/json'
        | 'Application/x-www-form-urlencode'
        | 'multipart/formed-data'
        | 'application/pdf'
        | 'audio/mpeg'
        | 'image/jpeg'
        | 'text/csv'
        | 'text/plain'
        | 'text/xml';
};

export type TBody<T> = T;

export type TimeOut = number;
