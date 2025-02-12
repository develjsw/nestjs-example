import { Injectable } from '@nestjs/common';
import { OrderStateInterface } from './order-state.interface';
import { OrderRepository } from '../repositories/order.repository';
import { OrderEntity } from '../entities/mysql-state/order.entity';

@Injectable()
export class PendingOrderState implements OrderStateInterface {
    constructor(private readonly orderRepository: OrderRepository) {}

    async process(orderId: number): Promise<any> {
        console.log(`주문 ${orderId}을 처리 중입니다.`);

        try {
            const order: OrderEntity = await this.orderRepository.findOrderById(orderId);
            if (!order) {
                throw new Error('주문을 찾을 수 없습니다.');
            }

            return order;
        } catch(error) {
            console.log(error)
        }



    }
}
