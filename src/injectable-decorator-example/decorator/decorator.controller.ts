import { Controller, Get } from '@nestjs/common';
import { DecoratorDefaultConstructorService } from './service/decorator-default-constructor.service';
import { DecoratorNonDefaultConstructorService } from './service/decorator-non-default-constructor.service';

@Controller('injectable-decorator-examples/decorators')
export class DecoratorController {
    constructor(
        private readonly decoratorDefaultConstructorService: DecoratorDefaultConstructorService,
        private readonly decoratorNonDefaultConstructorService: DecoratorNonDefaultConstructorService
    ) {}

    @Get('default-constructors')
    async callDecoratorDefaultConstructor(): Promise<void> {
        await this.decoratorDefaultConstructorService.runDecoratorDefaultConstructorService();
    }

    @Get('non-default-constructors')
    async callDecoratorNonDefaultConstructor(): Promise<void> {
        await this.decoratorNonDefaultConstructorService.runDecoratorNonDefaultConstructorService();
    }
}
