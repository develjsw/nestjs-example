import { BadRequestException, Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { BankTransferService } from './payment-method/bank-transfer.service';
import { CacheService } from './payment-method/cache.service';
import { GiftCardService } from './payment-method/gift-card.service';
import { PgService } from './payment-method/pg.service';

enum EPayMethod {
    BANK_TRANSFER = 'bankTransfer',
    CACHE = 'cache',
    GIFT_CARD = 'giftCard',
    PG = 'pg'
}

@Controller('strategy-pattern')
export class StrategyPatternController {
    constructor(
        private readonly bankTransferService: BankTransferService,
        private readonly cacheService: CacheService,
        private readonly giftCardService: GiftCardService,
        private readonly pgService: PgService
    ) {}

    @Get('payments')
    async getTotalPayment(
        @Query('method') method: EPayMethod,
        @Query('amount', ParseIntPipe) amount: number
    ): Promise<string> {
        if (!method || !amount) {
            throw new BadRequestException('method 또는 amount 값이 필요합니다.');
        }

        switch (method) {
            case EPayMethod.BANK_TRANSFER:
                return this.bankTransferService.pay(amount);
            case EPayMethod.CACHE:
                return this.cacheService.pay(amount);
            case EPayMethod.GIFT_CARD:
                return this.giftCardService.pay(amount);
            case EPayMethod.PG:
                return this.pgService.pay(amount);
            default:
                throw new BadRequestException('선택한 결제수단이 유효하지 않습니다.');
        }
    }
}
