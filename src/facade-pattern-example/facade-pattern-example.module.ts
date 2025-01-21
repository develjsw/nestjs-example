import { Module } from '@nestjs/common';
import { FacadeModule } from './facade/facade.module';
import { GoodsModule } from './goods/goods.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';

// 내부에 사용중인 모듈명과 다른 모듈명 충돌 방지를 위해 모듈화 진행, 실제로는 사용하지 않을 모듈
@Module({
    imports: [FacadeModule, GoodsModule, OrderModule, PaymentModule],
    exports: []
})
export class FacadePatternExampleModule {}
