import { Module } from '@nestjs/common';
import { DecoratorModule } from './decorator/decorator.module';
import { NonDecoratorModule } from './non-decorator/non-decorator.module';

@Module({
    imports: [DecoratorModule, NonDecoratorModule],
    controllers: [],
    providers: [],
    exports: []
})
export class InjectableDecoratorExampleModule {}
