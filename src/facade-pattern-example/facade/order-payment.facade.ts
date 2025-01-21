import { BadRequestException, Injectable } from '@nestjs/common';
import { GoodsService } from '../goods/goods.service';
import { GoodsEntity } from '../entities/mysql-facade/goods.entity';
import { OrderEntity } from '../entities/mysql-facade/order.entity';
import { OrderService } from '../order/order.service';
import { PaymentService } from '../payment/payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class OrderPaymentFacade {
    constructor(
        private readonly goodsService: GoodsService,
        private readonly orderService: OrderService,
        private readonly paymentService: PaymentService
    ) {}

    async processPayment(
        goodsId: number,
        orderId: number,
        dto: CreatePaymentDto
    ): Promise<{ paymentId: number | null }> {
        // 캐싱 처리된 데이터를 먼저 확인 후 DB 접근한다고 가정

        // 상품 조회
        const goods: GoodsEntity = await this.goodsService.findGoodsById(goodsId);
        if (!goods) {
            throw new BadRequestException('매칭되는 goods값이 없습니다.');
        }

        // 주문 조회
        const order: OrderEntity = await this.orderService.findOrderById(orderId);
        if (!order) {
            throw new BadRequestException('매칭되는 order값이 없습니다.');
        }

        // 좀 더 복잡한 결제 로직이 있다고 가정

        // 결제 데이터 적재
        return await this.paymentService.createPayment({ goodsId, orderId, amount: dto.amount });
    }
}
