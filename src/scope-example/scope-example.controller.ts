import { Controller, Get } from '@nestjs/common';
import { RequestScopeService } from './service/request-scope.service';
import { DefaultScopeService } from './service/default-scope.service';

@Controller('scope-example')
export class ScopeExampleController {
    /*
        scope-example/defaults 엔드포인트를 호출해도 RequestScopeService의 생성자가 호출되는 이유
        - RequestScopeService는 Scope.REQUEST로 설정되어 각 HTTP 요청마다 새로운 인스턴스가 생성됨
        - 이 컨트롤러는 RequestScopeService를 생성자 주입(Dependency Injection) 받고있음
        - 따라서, scope-example/defaults 엔드포인트를 호출해도 NestJS는 컨트롤러를 실행하기 전에 RequestScopeService의 새 인스턴스를 생성하여 주입함
        - 즉, RequestScopeService가 어느 엔드포인트에서 사용되든 요청이 발생하면 새로운 인스턴스가 만들어짐
    */
    constructor(
        private readonly requestScopeService: RequestScopeService, // 요청할 때마다 새로운 인스턴스 생성
        private readonly defaultScopeService: DefaultScopeService // 싱글톤(한 번만 생성됨)
    ) {}

    @Get('requests')
    async requestScope(): Promise<void> {}

    @Get('defaults')
    async defaultScope(): Promise<void> {}
}
