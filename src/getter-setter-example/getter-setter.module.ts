import { Module } from '@nestjs/common';
import { GetterSetterController } from './getter-setter.controller';
import { GetterSetterService } from './getter-setter.service';

@Module({
    providers: [GetterSetterService],
    controllers: [GetterSetterController],
    imports: [],
    exports: []
})
export class GetterSetterModule {}
