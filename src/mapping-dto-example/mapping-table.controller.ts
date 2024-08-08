import { Body, Controller, Get } from '@nestjs/common';
import { MappingTableService } from './servicies/mapping-table.service';
import { MappingTable } from './type/mapping-table';

@Controller('mapping-table')
export class MappingTableController {
    constructor(private readonly commonDtoService: MappingTableService) {}

    @Get()
    async getMappingTable(@Body() mappingTable: MappingTable) {
        return await this.commonDtoService.start(mappingTable);
    }
}
