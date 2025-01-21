import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaymentDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    amount: number;
}
