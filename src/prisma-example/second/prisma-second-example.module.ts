import { Module } from '@nestjs/common';
import { PrismaSecondExampleController } from './prisma-second-example.controller';

@Module({
    imports: [],
    controllers: [PrismaSecondExampleController],
    providers: [],
    exports: []
})
export class PrismaSecondExampleModule {}
