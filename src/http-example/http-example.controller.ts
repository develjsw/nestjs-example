import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { HttpExampleService } from './http-example.service';

@Controller('http')
export class HttpExampleController {
    constructor(private readonly httpExampleService: HttpExampleService) {}

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
