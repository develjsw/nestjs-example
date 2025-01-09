import { Injectable } from '@nestjs/common';
import { ApiService } from './api/api.service';

@Injectable()
export class HttpExampleService {
    constructor(private readonly apiService: ApiService) {}

    async httpGetMethod(): Promise<{ apiInfo1: ApiService; apiInfo2: ApiService }> {
        const apiInfo1: ApiService = this.apiService.setMethod('get').setUrl({
            protocol: 'http',
            host: 'localhost',
            port: 80
        });

        const apiInfo2: ApiService = this.apiService.init().setBody('test');

        return {
            apiInfo1,
            apiInfo2
        };
    }
}
