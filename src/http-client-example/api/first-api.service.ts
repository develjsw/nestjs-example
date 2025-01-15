import { Injectable } from '@nestjs/common';
import { ApiInterface } from './interface/api.interface';
import { HttpService } from '@nestjs/axios';
import { THeader, TMethod, TResponseType } from './type/api-type';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

const DEFAULT_TIMEOUT_MS: number = 5000;

type TApiOption = {
    url: string;
    method: TMethod;
    headers: THeader;
    responseType: TResponseType;
    data?: any;
    timeout?: number;
};

@Injectable()
export class FirstApiService implements ApiInterface {
    private apiOption: TApiOption;

    constructor(private readonly httpService: HttpService) {
        this.setDefault();
    }

    setUrl(baseUrl: string, path?: string, pathParams?: Record<string, any>): this {
        let fullPath: string = path || '';

        if (path && pathParams) {
            fullPath = Object.entries(pathParams).reduce((resultPath, [key, value]) => {
                return resultPath.replace(`{${key}}`, value.toString());
            }, path);
        }

        this.apiOption.url = `${baseUrl}${fullPath}`;

        return this;
    }

    setMethod(method: TMethod): this {
        this.apiOption.method = method;
        return this;
    }

    setHeader(header: THeader): this {
        this.apiOption.headers = { ...this.apiOption.headers, ...header };
        return this;
    }

    setData(data: any): this {
        if (this.apiOption.method !== 'get') {
            this.apiOption.data = data;
        } else {
            this.apiOption.url = this.apiOption.url + '?' + new URLSearchParams(data).toString();
        }

        return this;
    }

    setResponseType(responseType: TResponseType): this {
        this.apiOption.responseType = responseType;
        return this;
    }

    setTimeOut(milliSecond: number): this {
        this.apiOption.timeout = milliSecond;
        return this;
    }

    private setDefault(): void {
        this.apiOption = {
            url: '',
            method: 'get',
            headers: {
                //Authorization: 'Bearer ' + '토큰값',
                'Content-Type': 'application/json',
                Accept: 'application/json'
                //Version: '1.0.0'
            },
            responseType: 'json',
            timeout: DEFAULT_TIMEOUT_MS
        };
    }

    async execute(): Promise<Pick<AxiosResponse, 'status' | 'statusText' | 'data'>> {
        return await lastValueFrom(this.httpService.request(this.apiOption))
            .then((response: AxiosResponse) => {
                const { status, statusText, data } = response;

                return {
                    status,
                    statusText,
                    data
                };
            })
            .catch((error: Error) => {
                return Promise.reject(error);
                //throw error;
            });
    }

    // TODO : executeWithRetry 작업 필요
    async executeWithRetry(executeCount: number): Promise<void> {}
}
