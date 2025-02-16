import { Injectable } from '@nestjs/common';

@Injectable()
export class DecoratorNonDefaultConstructorService {
    constructor(private parameter: string) {
        console.info(`[Decorator][Non][Default][Constructor][Service] 생성자 및 파라미터 실행 (${parameter})`);
    }

    async runDecoratorNonDefaultConstructorService(): Promise<void> {
        console.info('[Decorator][Non][Default][Constructor][Service] 서비스 실행');
    }
}
