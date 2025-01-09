import { Module } from '@nestjs/common';
import { HttpExampleController } from './http-example.controller';
import { HttpExampleService } from './http-example.service';
import { ApiService } from './api/api.service';

@Module({
    imports: [],
    controllers: [HttpExampleController],
    providers: [HttpExampleService, ApiService],
    exports: []
})
export class HttpExampleModule {}
