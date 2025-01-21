import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderEntity } from '../entities/mysql-facade/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderRepository {
    constructor(
        @InjectRepository(OrderEntity, 'facade-orm')
        private readonly orderRepository: Repository<OrderEntity>
    ) {}

    async findOrderById(orderId: number): Promise<OrderEntity> {
        return this.orderRepository.findOne({
            where: { orderId }
        });
    }

    // 파사드와 관련 없는 order.repository만의 로직 작성가능
}
