import { Controller, Get } from '@nestjs/common';
import { NonDecoratorDefaultConstructorService } from './service/non-decorator-default-constructor.service';
import { NonDecoratorNonDefaultConstructorService } from './service/non-decorator-non-default-constructor.service';

@Controller('injectable-decorator-examples/non-decorators')
export class NonDecoratorController {
    constructor(
        private readonly nonDecoratorDefaultConstructorService: NonDecoratorDefaultConstructorService,
        private readonly nonDecoratorNonDefaultConstructorService: NonDecoratorNonDefaultConstructorService
    ) {}

    @Get('default-constructors')
    async callNonDecoratorDefaultConstructor(): Promise<void> {
        await this.nonDecoratorDefaultConstructorService.runNonDecoratorDefaultConstructorService();
    }

    @Get('non-default-constructors')
    async callNonDecoratorNonDefaultConstructor(): Promise<void> {
        await this.nonDecoratorNonDefaultConstructorService.runNonDecoratorNonDefaultConstructorService();
    }
}
