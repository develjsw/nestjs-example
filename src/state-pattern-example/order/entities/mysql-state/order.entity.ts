import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'order_id'
    })
    orderId: number;

    @Column('enum', {
        enum: ['PENDING', 'COMPLETED', 'CANCELED'],
        default: 'PENDING',
        name: 'order_status'
    })
    orderStatus: string;
}
