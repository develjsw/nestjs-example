import { Controller, Post } from '@nestjs/common';
import { UseTransactionMethodService } from './servicies/use-transaction-method.service';
import { UseQueryRunnerService } from './servicies/use-query-runner.service';

@Controller('typeorm-transaction-examples')
export class TypeormTransactionExampleController {
    constructor(
        private readonly useTransactionMethodService: UseTransactionMethodService,
        private readonly useQueryRunnerService: UseQueryRunnerService
    ) {}

    @Post('with-transaction-methods')
    async createBoardWithTransactionMethod(): Promise<void> {
        await this.useTransactionMethodService.createBoard();
    }

    @Post('with-query-runners')
    async createBoardWithQueryRunner(): Promise<void> {
        await this.useQueryRunnerService.createBoard();
    }
}
