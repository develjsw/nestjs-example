import { Injectable, Scope } from '@nestjs/common';

/*
    [ Default Scope (Singleton) ]
    - 앱이 실행될 때 단 한 번 인스턴스가 생성됨
    - 이후 모든 요청에서 동일한 인스턴스를 재사용 (싱글톤 패턴)
    - 따라서 NestJS 애플리케이션이 초기화될 때 생성자가 한 번만 실행됨
*/
@Injectable({ scope: Scope.DEFAULT }) // = @Injectable()
export class DefaultScopeService {
    constructor() {
        console.log('DefaultScopeService 생성자 호출');
    }
}
