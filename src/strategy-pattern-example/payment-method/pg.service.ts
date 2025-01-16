import { Injectable } from '@nestjs/common';
import { PayInterface } from '../interface/pay.interface';

const COMMISSION_RATE = 3;

@Injectable()
export class PgService implements PayInterface {
    pay(amount: number): string {
        const totalAmountWithoutCommission = amount * (100 / COMMISSION_RATE);
        return `커미션을 제외한 총 지불금액 : ${totalAmountWithoutCommission}원`;
    }
}
