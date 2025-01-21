import { Injectable } from '@nestjs/common';
import { GoodsRepository } from './goods.repository';
import { GoodsEntity } from '../entities/mysql-facade/goods.entity';

@Injectable()
export class GoodsService {
    constructor(private readonly goodsRepository: GoodsRepository) {}

    async findGoodsById(goodsId: number): Promise<GoodsEntity | null> {
        return await this.goodsRepository.findGoodsById(goodsId);
    }

    // 파사드와 관련 없는 goods.service만의 로직 작성가능
}
