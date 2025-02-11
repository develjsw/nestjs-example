import { Injectable } from '@nestjs/common';
import { OrderStateInterface } from './order-state.interface';
import { OrderRepository } from '../repositories/order.repository';

@Injectable()
export class CompletedOrderState implements OrderStateInterface {
    constructor(private readonly orderRepository: OrderRepository) {}

    async process(orderId: number): Promise<any> {
        console.log(`✅ 주문 ${orderId}이 완료되었습니다.`);

        const order = await this.orderRepository.findOrderById(orderId);
        if (!order) {
            throw new Error('❌ 주문을 찾을 수 없습니다.');
        }

        return order;
    }
}
