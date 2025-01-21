import { Injectable } from '@nestjs/common';
import { InsertResult, Repository } from 'typeorm';
import { PaymentEntity } from '../entities/mysql-facade/payment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentRepository {
    constructor(
        @InjectRepository(PaymentEntity, 'facade-orm')
        private readonly paymentRepository: Repository<PaymentEntity>
    ) {}

    async createPayment(data: Partial<PaymentEntity>): Promise<{ paymentId: number | null }> {
        const insertResult: InsertResult = await this.paymentRepository.insert({
            ...data,
            regDate: new Date()
        });

        const { raw } = insertResult;

        return {
            paymentId: raw?.insertId ?? null
        };
    }

    // 파사드와 관련 없는 payment.repository만의 로직 작성가능
}
