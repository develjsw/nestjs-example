import { Module } from '@nestjs/common';
import { DecoratorController } from './decorator.controller';
import { DecoratorDefaultConstructorService } from './service/decorator-default-constructor.service';
import { DecoratorNonDefaultConstructorService } from './service/decorator-non-default-constructor.service';
import { DecoratorScopeService } from './service/decorator-scope.service';

@Module({
    imports: [],
    controllers: [DecoratorController],
    providers: [
        {
            provide: DecoratorDefaultConstructorService,
            useClass: DecoratorDefaultConstructorService
        },
        // DecoratorDefaultConstructorService는 사실 위와 같이 provide, useClass를 좀 더 간편하게 사용하는 문법임
        DecoratorDefaultConstructorService,
        /*
            Providers에 Class를 입력함으로써 DI를 위한 준비 행동을 함
            만약, 해당 Class의 생성자에 매개변수가 존재하고 @Injectable() 데코레이터를 사용한 경우 - 초기 파라미터 값을 반드시 전달해야 함
            전달하는 방법은 아래와 같음
        */
        {
            provide: DecoratorNonDefaultConstructorService,
            useFactory: () => new DecoratorNonDefaultConstructorService('초기 파라미터 입력')
        },
        DecoratorScopeService
    ],
    exports: []
})
export class DecoratorModule {}
