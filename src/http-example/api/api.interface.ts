import { TBody, TimeOut, TMethod, TUrl } from './type/api-type';

export interface ApiInterface {
    setMethod(method: TMethod): this;

    setUrl(url: TUrl): this;

    setBody(body: TBody<any>): this;

    setTimeOut(timeout: TimeOut): this;
}
