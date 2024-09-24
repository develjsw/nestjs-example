import { Module } from '@nestjs/common';
import { PrismaSecondExampleController } from './prisma-second-example.controller';
import { Prisma2Service } from '../../prisma/prisma2.service';
import { ProductsService } from './servicies/products.service';
import { OrdersService } from './servicies/orders.service';

@Module({
    imports: [],
    controllers: [PrismaSecondExampleController],
    providers: [Prisma2Service, ProductsService, OrdersService],
    exports: []
})
export class PrismaSecondExampleModule {}
