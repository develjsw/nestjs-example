import { Module } from '@nestjs/common';
import { StrategyPatternController } from './strategy-pattern.controller';
import { BankTransferService } from './payment-method/bank-transfer.service';
import { CacheService } from './payment-method/cache.service';
import { GiftCardService } from './payment-method/gift-card.service';
import { PgService } from './payment-method/pg.service';

@Module({
    imports: [],
    controllers: [StrategyPatternController],
    providers: [BankTransferService, CacheService, GiftCardService, PgService],
    exports: []
})
export class StrategyPatternModule {}
