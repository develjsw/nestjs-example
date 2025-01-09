import { Injectable } from '@nestjs/common';
import { ApiInterface } from './api.interface';
import { TBody, TimeOut, TMethod, TUrl } from './type/api-type';

type TApiOptions = {
    method: TMethod;
    url: TUrl;
    body?: TBody<any>; // TODO : 현재 Service에서만 사용될 Type으로 설정해도 됨
    timeOut?: TimeOut;
};

@Injectable()
export class ApiService implements ApiInterface {
    private apiOptions: TApiOptions;

    constructor() {
        // 필수값 초기화
        this.apiOptions = {
            method: null,
            url: null
        };
    }

    setMethod(method: TMethod): this {
        this.apiOptions.method = method;
        return this;
    }

    setUrl(url: TUrl): this {
        const { protocol, host, port, params } = url;

        if ([!!protocol, !!host, !!port].includes(false)) {
            throw Error('setUrl() - 필수값 미존재');
        }

        return this;
    }

    setBody(body: TBody<any>): this {
        this.apiOptions.body = body;
        return this;
    }

    setTimeOut(timeout: TimeOut): this {
        this.apiOptions.timeOut = timeout;
        return this;
    }

    // 객체 초기화
    init(): ApiService {
        return new ApiService();
    }
}
