import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_payments')
@Index('memberCd', ['memberCd', 'goodsCd', 'paymentsCd'], { unique: true })
export class PaymentsEntity {
    @PrimaryGeneratedColumn({ type: 'int', comment: '결제 코드' })
    paymentsCd: number;

    @Column({ type: 'int', comment: '회원 코드' })
    memberCd: number;

    @Column({ type: 'int', comment: '상품 코드' })
    goodsCd: number;

    @Column({ type: 'int', comment: '결제 금액' })
    amount: number;

    @Column({ type: 'varchar', comment: '결제 상태 (PENDING, COMPLETED, CANCELED)' })
    status: string;

    @CreateDateColumn({ type: 'datetime', comment: '결제 일시' })
    regDate: Date;

    @Column({ type: 'datetime', comment: '취소 일시' })
    cancelDate: Date;
}
