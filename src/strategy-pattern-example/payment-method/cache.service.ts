import { Injectable } from '@nestjs/common';
import { PayInterface } from '../interface/pay.interface';

@Injectable()
export class CacheService implements PayInterface {
    pay(amount: number): string {
        return `지불해야 할 총액 : ${amount}만원`;
    }
}
