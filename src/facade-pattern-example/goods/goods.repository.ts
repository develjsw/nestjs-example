import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GoodsEntity } from '../entities/mysql-facade/goods.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GoodsRepository {
    constructor(
        @InjectRepository(GoodsEntity, 'facade-orm')
        private readonly goodsRepository: Repository<GoodsEntity>
    ) {}

    async findGoodsById(goodsId: number): Promise<GoodsEntity> {
        return await this.goodsRepository.findOne({
            where: {
                goodsId
            }
        });
    }

    // 파사드와 관련 없는 goods.repository만의 로직 작성가능
}
