export class NonDecoratorDefaultConstructorService {
    constructor() {
        console.info('[Non][Decorator][Default][Constructor][Service] 생성자 실행');
    }

    async runNonDecoratorDefaultConstructorService(): Promise<void> {
        console.info('[Non][Decorator][Default][Constructor][Service] 서비스 실행');
    }
}
