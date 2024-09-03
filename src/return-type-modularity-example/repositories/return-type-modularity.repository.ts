import { Injectable } from '@nestjs/common';
import { MemberEntity } from '../entities/mysql/member.entity';
import { GoodsEntity } from '../entities/mysql/goods.entity';
import { PaymentsEntity } from '../entities/mysql/payments.entity';
import { MemberAndGoodsList, MemberAndGoodsListAndPaymentsList, MemberGoods } from '../return-type/detail-return.type';

@Injectable()
export class ReturnTypeModularityRepository {
    constructor() {}

    async getMember(): Promise<Partial<MemberEntity>> {
        return {
            memberCd: 1,
            nickName: '홍길동',
            regDate: new Date(),
            delDate: new Date()
        };
    }

    async getGoods(): Promise<Partial<GoodsEntity>> {
        return {
            goodsName: '상품명',
            regDate: new Date(),
            delDate: new Date()
        };
    }

    async getPayments(): Promise<Partial<PaymentsEntity>> {
        return {
            paymentsCd: 1,
            memberCd: 1,
            goodsCd: 2,
            amount: 100000,
            regDate: new Date()
        };
    }

    async getMemberAndGoodsList(): Promise<MemberAndGoodsList> {
        return {
            member: {
                memberCd: 1,
                nickName: '홍길동',
                regDate: new Date(),
                delDate: new Date()
            },
            goodsList: [
                { goodsName: '타이틀1', regDate: new Date(), delDate: new Date() },
                { goodsName: '타이틀2', regDate: new Date(), delDate: new Date() },
                { goodsName: '타이틀3', regDate: new Date(), delDate: new Date() }
            ]
        };
    }

    async getMemberAndGoodsListPaymentsList(): Promise<MemberAndGoodsListAndPaymentsList> {
        return {
            member: {
                memberCd: 1,
                nickName: '홍길동',
                regDate: new Date(),
                delDate: new Date()
            },
            goodsList: [
                { goodsName: '타이틀1', regDate: new Date(), delDate: new Date() },
                { goodsName: '타이틀2', regDate: new Date(), delDate: new Date() },
                { goodsName: '타이틀3', regDate: new Date(), delDate: new Date() }
            ],
            paymentsList: [
                { paymentsCd: 1, memberCd: 1, goodsCd: 1, amount: 100000, regDate: new Date() },
                { paymentsCd: 2, memberCd: 1, goodsCd: 1, amount: 100000, regDate: new Date() },
                { paymentsCd: 3, memberCd: 2, goodsCd: 2, amount: 200000, regDate: new Date() },
                { paymentsCd: 4, memberCd: 2, goodsCd: 3, amount: 300000, regDate: new Date() }
            ]
        };
    }

    async getMemberMergeGoods(): Promise<MemberGoods> {
        return {
            memberCd: 1,          // member entity
            nickName: '홍길동',    // member entity
            goodsName: '타이틀',   // goods entity
            regDate: new Date(),  // member entity (goods entity에도 있지만 제외시킴)
            delDate: new Date()   // member entity (goods entity에도 있지만 제외시킴)
        };
    }
}
