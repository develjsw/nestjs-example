import { Module } from '@nestjs/common';
import { ReturnTypeModularityController } from './return-type-modularity.controller';
import { ReturnTypeModularityService } from './servicies/return-type-modularity.service';
import { GetPrimaryKeyService } from './servicies/get-primary-key.service';
import { ReturnTypeModularityRepository } from './repositories/return-type-modularity.repository';

@Module({
    providers: [ReturnTypeModularityService, GetPrimaryKeyService, ReturnTypeModularityRepository],
    controllers: [ReturnTypeModularityController]
})
export class ReturnTypeModularityModule {}
