import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { GoodsRepository } from './goods.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsEntity } from '../entities/mysql-facade/goods.entity';

@Module({
    imports: [TypeOrmModule.forFeature([GoodsEntity], 'facade-orm')],
    controllers: [GoodsController],
    providers: [GoodsService, GoodsRepository],
    exports: [GoodsService, GoodsRepository]
})
export class GoodsModule {}
