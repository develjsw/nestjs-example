import { Injectable } from '@nestjs/common';
import { PayInterface } from '../interface/pay.interface';

const GOODS_PRICE = 50000;

@Injectable()
export class BankTransferService implements PayInterface {
    pay(amount: number): string {
        // 상품 금액을 포함한 예상 지불금액 계산
        const totalAmount = amount + GOODS_PRICE;
        return `총 지불 금액 : ${totalAmount}원`;
    }
}
