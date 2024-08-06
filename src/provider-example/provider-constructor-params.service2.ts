import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class ProviderConstructorParamsService2 {
    constructor(
        @Inject('test-key')
        private readonly key: string
    ) {}

    get providerConstructorParamsInstance2(): this {
        return this;
    }
}
