import { Entity, PrimaryColumn } from 'typeorm';

@Entity('goods')
export class GoodsEntity {
    @PrimaryColumn('int', {
        name: 'goodsId'
    })
    goodsId: number;
}
