import { Module } from '@nestjs/common';
import { ReturnTypeModularityController } from './return-type-modularity.controller';
import { ReturnTypeModularityService } from './servicies/return-type-modularity.service';
import { GetPrimaryKeyService } from './servicies/get-primary-key.service';

@Module({
    providers: [ReturnTypeModularityService, GetPrimaryKeyService],
    controllers: [ReturnTypeModularityController]
})
export class ReturnTypeModularityModule {}
