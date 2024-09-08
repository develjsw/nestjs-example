import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReturnTypeModularityService } from './servicies/return-type-modularity.service';
import { MemberEntity } from './entities/mysql/member.entity';
import { GoodsEntity } from './entities/mysql/goods.entity';
import { PaymentsEntity } from './entities/mysql/payments.entity';
import {
    MemberAndGoods,
    MemberAndGoodsList,
    MemberAndGoodsListAndPaymentsList,
    MemberGoods
} from './return-type/detail-return.type';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('return-type-modularity')
export class ReturnTypeModularityController {
    constructor(private readonly returnTypeModularityService: ReturnTypeModularityService) {}

    // 반환 타입을 모듈화 하기 위한 테스트 작업으로 parameter, body 등으로 받아온 데이터는 사용하지 않음

    @Get('/members/:mid')
    async getMember(): Promise<Partial<MemberEntity>> {
        return this.returnTypeModularityService.getMember();
    }

    @Get('/goods/:gid')
    async getGoods(): Promise<Partial<GoodsEntity>> {
        return this.returnTypeModularityService.getGoods();
    }

    @Get('/payments/:pid')
    async getPayments(): Promise<Partial<PaymentsEntity>> {
        return this.returnTypeModularityService.getPayments();
    }

    @Get('/members/:mid/goods/:gid')
    async getMemberAndGoods(): Promise<MemberAndGoods> {
        return this.returnTypeModularityService.getMemberAndGoods();
    }

    @Get('/members/:mid/goodsList/:gid')
    async getMemberAndGoodsList(): Promise<MemberAndGoodsList> {
        return this.returnTypeModularityService.getMemberAndGoodsList();
    }

    @Get('/members/:mid/goodsList/:gid/paymentsList/:pid')
    async getMemberAndGoodsListPaymentsList(): Promise<MemberAndGoodsListAndPaymentsList> {
        return this.returnTypeModularityService.getMemberAndGoodsListPaymentsList();
    }

    @Get('/members/:mid/merge/goods/:gid')
    async getMemberMergeGoods(): Promise<MemberGoods> {
        return this.returnTypeModularityService.getMemberMergeGoods();
    }

    @Post('/members')
    async createMember(@Body() createMemberDto: CreateMemberDto): Promise<Partial<MemberEntity>> {
        return this.returnTypeModularityService.createMember();
    }
}
