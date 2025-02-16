import { Injectable } from '@nestjs/common';

@Injectable()
export class DecoratorDefaultConstructorService {
    constructor() {
        console.info('[Decorator][Default][Constructor][Service] 생성자 실행');
    }

    async runDecoratorDefaultConstructorService(): Promise<void> {
        console.info('[Decorator][Default][Constructor][Service] 서비스 실행');
    }
}
