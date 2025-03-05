import { Module } from '@nestjs/common';
import { UseTransactionMethodService } from './servicies/use-transaction-method.service';
import { TypeormTransactionExampleController } from './typeorm-transaction-example.controller';
import { UseQueryRunnerService } from './servicies/use-query-runner.service';
import { UseTransactionManagerDecoratorService } from './servicies/use-transaction-manager-decorator.service';

@Module({
    imports: [],
    controllers: [TypeormTransactionExampleController],
    providers: [UseTransactionMethodService, UseQueryRunnerService, UseTransactionManagerDecoratorService],
    exports: []
})
export class TypeormTransactionExampleModule {}
