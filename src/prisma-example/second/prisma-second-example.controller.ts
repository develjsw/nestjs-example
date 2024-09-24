import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './servicies/products.service';
import { products as ProductsModel } from '../../../prisma/generated/second';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { OrdersService } from './servicies/orders.service';

@Controller('prisma-second-example')
export class PrismaSecondExampleController {
    constructor(
        private readonly productsService: ProductsService,
        private readonly ordersService: OrdersService
    ) {}

    // 상품 단건 조회
    @Get('products/:id')
    async getProductsDetail(@Param('id', ParseIntPipe) id: number): Promise<ProductsModel> {
        return this.productsService.getProductsDetail(id);
    }

    // 주문 생성
    @Post('orders')
    @UsePipes(ValidationPipe)
    async createOrders(@Body() createOrdersDto: CreateOrdersDto): Promise<{
        nIntegratedMemberCode: bigint;
        nAgencyCode: bigint;
        nAmount: number;
        nMemberCode: bigint;
        sOrderStatus: string;
    }> {
        const transformedData = {
            ...createOrdersDto,
            nIntegratedMemberCode: createOrdersDto.nIntegratedMemberCode,
            nMemberCode: createOrdersDto.nMemberCode,
            nAgencyCode: createOrdersDto.nAgencyCode
        };

        return this.ordersService.createOrders(transformedData);
    }
}
