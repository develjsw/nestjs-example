import { Injectable } from '@nestjs/common';
import { orders as Orders, Prisma } from '../../../../prisma/generated/second';
import { Prisma2Service } from '../../../prisma/prisma2.service';

@Injectable()
export class OrdersService {
    constructor(private prisma: Prisma2Service) {}

    async createOrders(data: Prisma.ordersCreateInput): Promise<Orders> {
        return this.prisma.orders.create({
            data
        });
    }
}
