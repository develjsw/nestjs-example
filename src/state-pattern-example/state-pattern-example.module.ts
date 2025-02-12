import { Module } from '@nestjs/common';
import { StatePatternExampleController } from './state-pattern-example.controller';
import { OrderModule } from './order/order.module';

@Module({
    imports: [OrderModule],
    controllers: [StatePatternExampleController],
    providers: [],
    exports: []
})
export class StatePatternExampleModule {}
