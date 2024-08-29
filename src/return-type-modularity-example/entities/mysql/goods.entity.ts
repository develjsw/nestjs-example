import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tb_goods')
export class GoodsEntity {
    @PrimaryGeneratedColumn({ type: 'int', comment: '상품 코드(PK)' })
    goodsCd: number;

    @Column({ type: 'int', comment: '상품 가격' })
    price: number;

    @Column({ type: 'char', comment: '사용 여부(Y/N)' })
    isUse: string;

    @CreateDateColumn({ type: 'datetime', comment: '상품 등록일' })
    regDate: Date;

    @UpdateDateColumn({ type: 'datetime', comment: '상품 수정일' })
    updateDate: Date;

    @Column({ type: 'varchar', comment: '상품명' })
    goodsName: string;

    @Column({ type: 'datetime', comment: '상품 삭제일' })
    deleteDate: Date;
}
