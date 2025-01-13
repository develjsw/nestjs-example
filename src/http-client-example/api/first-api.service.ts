import { Injectable } from '@nestjs/common';
import { ApiInterface } from './interface/api.interface';
import { HttpService } from '@nestjs/axios';
import { THeader, TMethod, TResponseType } from './type/api-type';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

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
        if (path && pathParams) {
            const convertPath: string = Object.entries(pathParams).reduce((resultPath, [key, value]) => {
                return resultPath.replace(`{${key}}`, value.toString());
            }, path);

            this.apiOption.url = baseUrl + convertPath;
        } else {
            this.apiOption.url = baseUrl;
        }

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

    // TODO : get method vs etc method 값 저장방식 분기처리 필요
    setData(data: any): this {
        this.apiOption.data = data;
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
                Accept: 'application/json',
                //Version: '1.0.0'
            },
            responseType: 'json',
            timeout: 5000
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
