import { Module } from '@nestjs/common';
import { ReturnTypeModularityController } from './return-type-modularity.controller';
import { ReturnTypeModularityService } from './servicies/return-type-modularity.service';

@Module({
    providers: [ReturnTypeModularityService],
    controllers: [ReturnTypeModularityController]
})
export class ReturnTypeModularityModule {}
