import { Module } from '@nestjs/common';
import { NonDecoratorController } from './non-decorator.controller';
import { NonDecoratorDefaultConstructorService } from './service/non-decorator-default-constructor.service';
import { NonDecoratorNonDefaultConstructorService } from './service/non-decorator-non-default-constructor.service';

@Module({
    imports: [],
    controllers: [NonDecoratorController],
    /*
        Providers에 Class를 입력함으로써 DI를 위한 준비 행동을 함
        만약, 해당 Class의 생성자에 매개변수가 존재하고 @Injectable() 데코레이터를 사용하지 않은 경우 - 초기 파라미터 값을 전달할 필요는 없음
        단, 이때 매개변수 값은 undefined로 인식됨
    */
    providers: [
        NonDecoratorDefaultConstructorService,
        NonDecoratorNonDefaultConstructorService,
        /*
            DecoratorDefaultConstructorService 서비스와 동일하게 아래와 같이 초기 파라미터를 전달하는 방법을 사용할 수도 있겠지만
            그럴 경우에는 @Injectable()를 사용하는 것이 더 나음
            @Injectable() 데코레이터를 사용하지 않고 매개변수를 받는 클래스의 경우에는
            extends로 상속되는 클래스로 사용하되 상속시에 super 키워드를 통해 파라미터로 전달하는 방식이 더 올바른 방법임
        */
        // {
        //     provide: NonDecoratorNonDefaultConstructorService,
        //     useFactory: () => new NonDecoratorNonDefaultConstructorService('초기 파라미터 입력')
        // }
    ],
    exports: []
})
export class NonDecoratorModule {}
