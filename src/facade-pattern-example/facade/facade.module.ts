import { Module } from '@nestjs/common';
import { OrderPaymentFacade } from './order-payment.facade';
import { FacadeController } from './facade.controller';
import { GoodsModule } from '../goods/goods.module';
import { OrderModule } from '../order/order.module';
import { PaymentModule } from '../payment/payment.module';

@Module({
    imports: [GoodsModule, OrderModule, PaymentModule],
    controllers: [FacadeController],
    providers: [OrderPaymentFacade],
    exports: []
})
export class FacadeModule {}
