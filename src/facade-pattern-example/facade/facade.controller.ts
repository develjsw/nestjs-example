import { Body, Controller, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { OrderPaymentFacade } from './order-payment.facade';

@Controller('facade-pattern')
export class FacadeController {
    constructor(private readonly orderPaymentFacade: OrderPaymentFacade) {}

    @Post('goods/:goodsId/orders/:orderId/payments')
    @UsePipes(ValidationPipe)
    async processPayment(
        @Param('goodsId', ParseIntPipe) goodsId: number,
        @Param('orderId', ParseIntPipe) orderId: number,
        @Body() createPaymentDto: CreatePaymentDto
    ) {
        return await this.orderPaymentFacade.processPayment(goodsId, orderId, createPaymentDto);
    }
}
