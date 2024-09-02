import { Injectable } from '@nestjs/common';
import { ColumnType, DataSource, EntityMetadata, EntityTarget } from 'typeorm';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';

type TypeScriptType = 'string' | 'number' | 'boolean' | 'object' | 'any';

interface PrimaryKeyType {
    [key: string]: TypeScriptType;
}

@Injectable()
export class GetPrimaryKeyService {
    constructor(private readonly dataSource: DataSource) {}

    async getPrimaryKey(entity: EntityTarget<any>): Promise<PrimaryKeyType[]> {
        const repository = this.dataSource.getRepository(entity);
        const metadata: EntityMetadata = repository.metadata;

        const primaryColumns = metadata.primaryColumns;

        return primaryColumns.map((primary: ColumnMetadata) => {
            return {
                [primary.propertyName]: this.convertDatabaseTypeToTypeScriptType(primary.type)
            };
        });
    }

    convertDatabaseTypeToTypeScriptType(databaseType: ColumnType): TypeScriptType {
        switch (databaseType) {
            case 'int':
            case 'tinyint':
            case 'smallint':
            case 'mediumint':
            case 'bigint':
                return 'number';
            case 'varchar':
            case 'varchar2':
            case 'char':
            case 'text':
            case 'tinytext':
            case 'mediumtext':
            case 'longtext':
                return 'string';
            case 'boolean':
                return 'boolean';
            default:
                throw new Error(
                    `기본 키에 대해 지원되지 않는 열 유형: ${databaseType}. 기본 키가 int 또는 varchar(varchar2)와 같이 지원되는 유형인지 확인하세요.`
                );
        }
    }
}
