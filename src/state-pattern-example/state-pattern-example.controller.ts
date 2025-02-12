import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrderEntity } from './order/entities/mysql-state/order.entity';
import { OrderService } from './order/servicies/order.service';

@Controller('state-pattern-example/orders')
export class StatePatternExampleController {
    constructor(private readonly orderService: OrderService) {}

    @Get(':orderId')
    async handleProcessOrder(@Param('orderId', ParseIntPipe) orderId: number): Promise<OrderEntity> {
        console.log(`=== 주문 처리 요청 ===`);
        return await this.orderService.processOrder(orderId);
    }

    @Post(':orderId/complete')
    async handleCompleteOrder(@Param('orderId') orderId: number): Promise<void> {
        console.log(`=== 주문 완료 요청 ===`);
        await this.orderService.completeOrder(orderId);
    }
}
