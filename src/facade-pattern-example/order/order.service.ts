import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/mysql-facade/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrderRepository) {}

    async findOrderById(orderId: number): Promise<OrderEntity | null> {
        return await this.orderRepository.findOrderById(orderId);
    }

    // 파사드와 관련 없는 order.service만의 로직 작성가능
}
