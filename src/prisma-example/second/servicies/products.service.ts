import { Injectable } from '@nestjs/common';
import { Prisma2Service } from '../../../prisma/prisma2.service';
import { products as Products } from '../../../../prisma/generated/second';

@Injectable()
export class ProductsService {
    constructor(private prisma: Prisma2Service) {}

    async getProductsDetail(id: number): Promise<Products | null> {
        return this.prisma.products.findUnique({
            where: {
                id
            }
        });
    }
}
