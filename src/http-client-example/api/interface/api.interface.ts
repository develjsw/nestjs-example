import { THeader, TMethod, TResponseType } from '../type/api-type';

export interface ApiInterface {
    setUrl(baseUrl: string, path?: string, pathParams?: Record<string, any>): this;

    setMethod(method: TMethod): this;

    setHeader(header: THeader): this;

    setData(data: any): this;

    setResponseType(responseType: TResponseType): this;

    setTimeOut(milliSecond: number): this;

    execute(): any;

    executeWithRetry(executeCount: number): void;
}
