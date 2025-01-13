import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { HttpClientExampleService } from './http-client-example.service';

@Controller('http-clients')
export class HttpClientExampleController {
    constructor(private readonly httpExampleService: HttpClientExampleService) {}

    @Get()
    async httpGetMethod() {
        return this.httpExampleService.httpGetMethod();
    }

    @Post()
    async httpPostMethod() {
        //this.httpExampleService.httpPostMethod();
    }

    @Patch()
    async httpPatchMethod() {
        //this.httpExampleService.httpPatchMethod();
    }

    @Put()
    async httpPutMethod() {
        //this.httpExampleService.httpPutMethod();
    }

    @Delete()
    async httpDeleteMethod() {
        //this.httpExampleService.httpDeleteMethod();
    }
}
