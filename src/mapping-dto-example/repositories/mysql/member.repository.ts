import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Member } from '../../entities/mysql/member.entity';

@Injectable()
export class MemberRepository {
    private readonly memberRepository: Repository<Member>;

    constructor(protected readonly dataSource: DataSource) {
        this.memberRepository = dataSource.getRepository(Member);
    }
}
