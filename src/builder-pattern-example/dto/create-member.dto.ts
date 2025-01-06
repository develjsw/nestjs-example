import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMemberDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    memberId: number;

    @IsOptional()
    @IsString()
    memberName: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    address: string;
}
