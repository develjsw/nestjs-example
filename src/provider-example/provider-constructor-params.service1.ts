import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderConstructorParamsService1 {
    private key: string;

    constructor(key: string) {
        this.key = key;
    }

    get providerConstructorParamsInstance1(): this {
        return this;
    }
}
