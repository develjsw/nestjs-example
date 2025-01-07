import { Module } from '@nestjs/common';
import { BuilderPatternController } from './builder-pattern.controller';
import { MemberBuilderService } from './servicies/member-builder.service';
import { CreateMemberService } from './servicies/create-member.service';

@Module({
    imports: [],
    controllers: [BuilderPatternController],
    providers: [MemberBuilderService, CreateMemberService],
    exports: []
})
export class BuilderPatternModule {}
