import { Injectable, Scope } from '@nestjs/common';

/*
    [ Request Scope (Request Scoped) ]
    - 각 HTTP 요청마다 새로운 인스턴스가 생성됨
    - 따라서 요청이 발생할 때마다 생성자가 실행됨
    - 요청이 끝나면 인스턴스가 소멸됨 (싱글톤이 아님)
    - 즉, 각 요청 간에 상태가 공유되지 않음
*/
@Injectable({ scope: Scope.REQUEST })
export class RequestScopeService {
    constructor() {
        console.log('RequestScopeService 생성자 호출');
    }
}
