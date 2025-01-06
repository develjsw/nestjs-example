import { Module } from '@nestjs/common';
import { BuilderPatternController } from './builder-pattern.controller';
import { BuilderPatternService } from './servicies/builder-pattern.service';
import { CreateMemberService } from './servicies/create-member.service';

@Module({
    imports: [],
    controllers: [BuilderPatternController],
    providers: [BuilderPatternService, CreateMemberService],
    exports: []
})
export class BuilderPatternModule {}
