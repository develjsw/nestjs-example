import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { PaymentEntity } from '../entities/mysql-facade/payment.entity';

@Injectable()
export class PaymentService {
    constructor(private readonly paymentRepository: PaymentRepository) {}

    async createPayment(data: Partial<PaymentEntity>) {
        return await this.paymentRepository.createPayment(data);
    }

    // 파사드와 관련 없는 payment.service만의 로직 작성가능
}
