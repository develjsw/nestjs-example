import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FirstApiService } from './api/first-api.service';
import { apiList } from './api/constants/api-list';

@Injectable()
export class HttpClientExampleService {
    constructor(private readonly firstApiService: FirstApiService) {}

    async httpGetMethod(): Promise<{ status: number; data: any }> {
        try {
            const result = await this.firstApiService
                .setUrl('https://jsonplaceholder.typicode.com', apiList.inner.posts.get.posts, {
                    postId: 1
                })
                .execute();

            const { status, data } = result;

            return {
                status,
                data
            };
        } catch (error: any) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
