import { Module } from '@nestjs/common';
import { MappingTableService } from './servicies/mapping-table.service';
import { MappingTableController } from './mapping-table.controller';
import { CommonCodeMainRepository } from './repositories/mysql/common.-code-main.repository';
import { CommonCodeSubRepository } from './repositories/mysql/common-code-sub.repository';
import { MemberRepository } from './repositories/mysql/member.repository';

@Module({
    providers: [MappingTableService, CommonCodeMainRepository, CommonCodeSubRepository, MemberRepository],
    controllers: [MappingTableController],
    imports: [],
    exports: []
})
export class MappingTableModule {}
