import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order.repository';
import { PendingOrderState } from '../states/pending-order.state';
import { CompletedOrderState } from '../states/completed-order.state';
import { OrderStateInterface } from '../states/order-state.interface';
import { OrderEntity } from '../entities/mysql-state/order.entity';

@Injectable()
export class OrderService {
    private state: OrderStateInterface;

    constructor(
        private readonly orderRepository: OrderRepository,
        private readonly pendingState: PendingOrderState,
        private readonly completedState: CompletedOrderState
    ) {
        this.state = this.pendingState; // 기본 상태
    }

    async processOrder(orderId: number): Promise<OrderEntity> {
        return await this.state.process(orderId);
    }

    async completeOrder(orderId: number): Promise<void> {
        await this.orderRepository.updateOrderStatus(orderId, 'COMPLETED');
        this.state = this.completedState;
    }
}
