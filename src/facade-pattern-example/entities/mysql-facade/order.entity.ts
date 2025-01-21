import { Entity, PrimaryColumn } from 'typeorm';

@Entity('order')
export class OrderEntity {
    @PrimaryColumn('int', {
        name: 'orderId'
    })
    orderId: number;
}
