import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/mysql-state/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(OrderEntity, 'state-orm')
        private readonly orderRepository: Repository<OrderEntity>
    ) {}

    async findOrderById(orderId: number): Promise<OrderEntity> {
        return await this.orderRepository.findOneBy({ orderId });
    }

    async updateOrderStatus(orderId: number, orderStatus: string): Promise<void> {
        await this.orderRepository.update(orderId, { orderStatus });
    }
}
