import { Controller } from '@nestjs/common';

@Controller('return-type-modularity')
export class ReturnTypeModularityController {
    constructor() {}

    // TODO : 1개의 테이블 데이터 전체를 그대로 반환
    async getOneTableAllData() {}

    // TODO : 1개의 테이블 데이터 일부를 반환
    async getOneTablePartialData() {}

    // TODO : 1개의 테이블 DML 처리 후 특정 반환 값 생성하여 반환
    async updateOneTable() {}

    // TODO : 여러개의 테이블 데이터 전체를 묶어서 그대로 반환
    async getMultiTableAllData() {}

    // TODO : 여러개의 테이블 데이터 일부를 반환
    async getMultiTablePartialData() {}

    // TODO : 여러개의 테이블 Transaction 처리 후 특정 반환 값 생성하여 반환
    async processMultiTableTransaction() {}
}
