import { BadRequestException, Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { MappingTable } from '../type/mapping-table';
import { entityMap } from '../../config/contents';

@Injectable()
export class MappingTableService {
    constructor() {}

    async start(mappingTable: MappingTable): Promise<object> {
        const { table, columns } = mappingTable;

        const entityClass = entityMap[table];
        if (!entityClass) {
            throw new BadRequestException('존재하지 않는 테이블명을 입력하셨습니다.');
        }

        return plainToInstance(entityClass, columns);
    }
}