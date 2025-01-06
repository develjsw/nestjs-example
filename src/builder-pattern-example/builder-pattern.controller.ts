import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { CreateMemberService } from './servicies/create-member.service';

@Controller('builder-pattern')
export class BuilderPatternController {
    constructor(private readonly createMemberService: CreateMemberService) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createMember(@Body() createMemberDto: CreateMemberDto) {
        return await this.createMemberService.createMember(createMemberDto);
    }
}
