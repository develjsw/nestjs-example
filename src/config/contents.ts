import { Member } from '../mapping-dto-example/entities/mysql/member.entity';
import { CommonCodeMain } from '../mapping-dto-example/entities/mysql/common-code-main.entity';
import { CommonCodeSub } from '../mapping-dto-example/entities/mysql/common-code-sub.entity';

export const entityMap = {
    tb_member: Member,
    tb_common_code_main: CommonCodeMain,
    tb_common_code_sub: CommonCodeSub
};
