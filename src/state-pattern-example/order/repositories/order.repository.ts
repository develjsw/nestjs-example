import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { OrderEntity } from '../entities/mysql/order.entity';

@Injectable()
export class OrderRepository {
    private readonly orderRepository: Repository<OrderEntity>;

    constructor(protected readonly dataSource: DataSource) {
        this.orderRepository = dataSource.getRepository(OrderEntity);
    }

    async findOrderById(orderId: number): Promise<OrderEntity> {
        return await this.orderRepository.findOneBy({ orderId });
    }

    async updateOrderStatus(orderId: number, orderStatus: string): Promise<void> {
        await this.orderRepository.update(orderId, { orderStatus });
    }
}
