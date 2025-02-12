import { Module } from '@nestjs/common';
import { OrderService } from './servicies/order.service';
import { OrderRepository } from './repositories/order.repository';
import { PendingOrderState } from './states/pending-order.state';
import { CompletedOrderState } from './states/completed-order.state';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/mysql-state/order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity], 'state-orm')],
    controllers: [],
    providers: [OrderService, OrderRepository, PendingOrderState, CompletedOrderState],
    exports: [OrderService]
})
export class OrderModule {}
