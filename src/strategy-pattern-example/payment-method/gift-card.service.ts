import { Injectable } from '@nestjs/common';
import { PayInterface } from '../interface/pay.interface';

const VAT = 5000;

@Injectable()
export class GiftCardService implements PayInterface {
    pay(amount: number): string {
        // 부가세를 제외한 금액 계산
        const totalAmountWithoutVAT = amount - VAT;
        return `부가세 제외한 총액 : ${totalAmountWithoutVAT}달러`;
    }
}
