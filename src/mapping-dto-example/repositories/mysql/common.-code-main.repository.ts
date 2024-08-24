import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CommonCodeMain } from '../../entities/mysql/common-code-main.entity';

@Injectable()
export class CommonCodeMainRepository {
    private readonly commonCodeMainRepository: Repository<CommonCodeMain>;

    constructor(protected readonly dataSource: DataSource) {
        this.commonCodeMainRepository = dataSource.getRepository(CommonCodeMain);
    }
}
