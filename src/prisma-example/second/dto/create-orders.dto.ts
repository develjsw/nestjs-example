import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrdersDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    nIntegratedMemberCode: number;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    nMemberCode: number;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    nAgencyCode: number;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    nAmount: number;

    @IsNotEmpty()
    @IsString()
    sOrderStatus: string;
}
