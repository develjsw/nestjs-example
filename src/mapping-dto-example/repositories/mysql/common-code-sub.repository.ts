import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CommonCodeSub } from '../../entities/mysql/common-code-sub.entity';

@Injectable()
export class CommonCodeSubRepository {
    private readonly commonCodeSubRepository: Repository<CommonCodeSub>;

    constructor(protected readonly dataSource: DataSource) {
        this.commonCodeSubRepository = dataSource.getRepository(CommonCodeSub);
    }
}
