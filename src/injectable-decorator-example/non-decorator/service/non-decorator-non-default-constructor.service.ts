export class NonDecoratorNonDefaultConstructorService {
    constructor(private parameter: string) {
        console.info(`[Non][Decorator][Non][Default][Constructor][Service] 생성자 및 파라미터 실행 (${parameter})`);
    }

    async runNonDecoratorNonDefaultConstructorService(): Promise<void> {
        console.info('[Non][Decorator][Non][Default][Constructor][Service] 서비스 실행');
    }
}
