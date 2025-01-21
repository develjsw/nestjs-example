import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderRepository } from './order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from '../entities/mysql-facade/order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity], 'facade-orm')],
    controllers: [],
    providers: [OrderService, OrderRepository],
    exports: [OrderService, OrderRepository]
})
export class OrderModule {}
