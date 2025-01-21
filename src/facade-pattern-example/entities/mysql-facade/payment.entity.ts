import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { GoodsEntity } from './goods.entity';
import { OrderEntity } from './order.entity';

@Entity('payment')
export class PaymentEntity {
    @PrimaryColumn('int', {
        name: 'paymentId'
    })
    paymentId: number;

    @Column('int', {
        name: 'goodsId'
    })
    goodsId: number;

    @Column('int', {
        name: 'orderId'
    })
    orderId: number;

    @Column('int', {
        name: 'amount'
    })
    amount: number;

    @Column('datetime', {
        name: 'regDate'
    })
    regDate: Date;

    @Column('datetime', {
        name: 'modDate'
    })
    modDate: Date;

    @OneToMany(() => GoodsEntity, (goods) => goods.goodsId)
    @JoinColumn({ name: 'goodsId' })
    goods: GoodsEntity;

    @OneToMany(() => OrderEntity, (order) => order.orderId)
    @JoinColumn({ name: 'orderId' })
    order: OrderEntity;
}
