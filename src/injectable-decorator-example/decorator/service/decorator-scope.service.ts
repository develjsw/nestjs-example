import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST }) // Scope 설정 가능
export class DecoratorScopeService {
    constructor() {
        console.info('[Decorator][Scope][Service] 생성자 실행');
    }
}
