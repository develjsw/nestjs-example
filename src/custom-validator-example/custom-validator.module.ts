import { Module } from '@nestjs/common';
import { CustomValidatorController } from './custom-validator.controller';

@Module({
    imports: [],
    controllers: [CustomValidatorController],
    exports: []
})
export class CustomValidatorModule {}
