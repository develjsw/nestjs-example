import { Body, Controller, Post } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';

@Controller('custom-validator-example')
export class CustomValidatorController {
    constructor() {}

    @Post()
    async testCustomValidator(@Body() dto: CreateMemberDto): Promise<void> {
        console.log(dto);
    }
}
