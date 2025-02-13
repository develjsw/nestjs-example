import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    userId: number;
}
