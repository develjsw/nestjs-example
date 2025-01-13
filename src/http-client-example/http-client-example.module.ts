import { Module } from '@nestjs/common';
import { HttpClientExampleController } from './http-client-example.controller';
import { HttpClientExampleService } from './http-client-example.service';
import { FirstApiService } from './api/first-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [HttpClientExampleController],
    providers: [HttpClientExampleService, FirstApiService],
    exports: []
})
export class HttpClientExampleModule {}
