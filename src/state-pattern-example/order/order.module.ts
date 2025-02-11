import { Module } from '@nestjs/common';
import { OrderService } from './servicies/order.service';
import { OrderRepository } from './repositories/order.repository';
import { PendingOrderState } from './states/pending-order.state';
import { CompletedOrderState } from './states/completed-order.state';

@Module({
    imports: [],
    controllers: [],
    providers: [OrderService, OrderRepository, PendingOrderState, CompletedOrderState],
    exports: []
})
export class OrderModule {}
