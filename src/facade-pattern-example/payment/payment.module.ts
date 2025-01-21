import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentEntity } from '../entities/mysql-facade/payment.entity';
import { PaymentRepository } from './payment.repository';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentEntity], 'facade-orm')],
    controllers: [],
    providers: [PaymentService, PaymentRepository],
    exports: [PaymentService, PaymentRepository]
})
export class PaymentModule {}
