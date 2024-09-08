import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    memberNm: string;

    @IsOptional()
    @IsString()
    nickName: string;

    @IsNotEmpty()
    @IsString()
    plainPassword: string;

    @IsNotEmpty()
    @IsString()
    tel: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}
