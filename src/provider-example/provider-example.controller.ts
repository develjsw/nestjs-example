import { Controller, Get } from '@nestjs/common';
import { ProviderConstructorParamsService1 } from './provider-constructor-params.service1';
import { ProviderConstructorParamsService2 } from './provider-constructor-params.service2';

@Controller('provider-example')
export class ProviderExampleController {
    constructor(
        private readonly providerConstructorParamsService1: ProviderConstructorParamsService1,
        private readonly providerConstructorParamsService2: ProviderConstructorParamsService2
    ) {}

    @Get()
    async getProviderConstructorParamsInstance() {
        return this.providerConstructorParamsService2.providerConstructorParamsInstance2;
        //return this.providerConstructorParamsService1.providerConstructorParamsInstance1;
    }
}
