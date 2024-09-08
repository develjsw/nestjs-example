import { Injectable } from '@nestjs/common';
import { MemberEntity } from '../entities/mysql/member.entity';
import { GoodsEntity } from '../entities/mysql/goods.entity';
import { PaymentsEntity } from '../entities/mysql/payments.entity';
import {
    MemberAndGoods,
    MemberAndGoodsList,
    MemberAndGoodsListAndPaymentsList,
    MemberGoods
} from '../return-type/detail-return.type';
import { ReturnTypeModularityRepository } from '../repositories/return-type-modularity.repository';

@Injectable()
export class ReturnTypeModularityService {
    constructor(private readonly returnTypeModularityRepository: ReturnTypeModularityRepository) {}

    async getMember(): Promise<Partial<MemberEntity>> {
        return await this.returnTypeModularityRepository.getMember();
    }

    async getGoods(): Promise<Partial<GoodsEntity>> {
        return await this.returnTypeModularityRepository.getGoods();
    }

    async getPayments(): Promise<Partial<PaymentsEntity>> {
        return await this.returnTypeModularityRepository.getPayments();
    }

    async getMemberAndGoods(): Promise<MemberAndGoods> {
        const member: Partial<MemberEntity> = await this.returnTypeModularityRepository.getMember();
        const goods: Partial<GoodsEntity> = await this.returnTypeModularityRepository.getGoods();

        // const memberAndGoods: MemberAndGoods = {
        //     member: member,
        //     goods: goods
        // };
        //
        // return memberAndGoods;
        return {
            member,
            goods
        };
    }

    async getMemberAndGoodsList(): Promise<MemberAndGoodsList> {
        return await this.returnTypeModularityRepository.getMemberAndGoodsList();
    }

    async getMemberAndGoodsListPaymentsList(): Promise<MemberAndGoodsListAndPaymentsList> {
        return await this.returnTypeModularityRepository.getMemberAndGoodsListPaymentsList();
    }

    async getMemberMergeGoods(): Promise<MemberGoods> {
        return await this.returnTypeModularityRepository.getMemberMergeGoods();
    }

    async createMember(): Promise<Partial<MemberEntity>> {
        const result = await this.returnTypeModularityRepository.createMember();

        const { password, ...extract } = result;

        return extract;
    }
}
