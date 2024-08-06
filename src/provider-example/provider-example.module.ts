import { Module } from '@nestjs/common';
import { ProviderExampleController } from './provider-example.controller';
import { ProviderDefaultService } from './provider-default.service';
import { ProviderConstructorParamsService1 } from './provider-constructor-params.service1';
import { ProviderConstructorParamsService2 } from './provider-constructor-params.service2';

@Module({
    controllers: [ProviderExampleController],
    providers: [
        ProviderDefaultService,
        /*
            ProviderConstructorParamsService는 생성자에 매개변수가 있으므로
            팩토리 프로바이더(useFactory), 상수 주입(useValue) 등을 통해서 주입을 해줘야 한다.
        */
        // [방법-1] 팩토리 프로바이더(useFactory) 사용
        {
            provide: ProviderConstructorParamsService1,
            useFactory: () => {
                const key = '내가 입력한 키 값1';
                return new ProviderConstructorParamsService1(key);
            }
        },
        // [방법-2] 상수 주입(useValue) 사용 : constructor에 @Inject 데코레이터를 통해 provider에 입력한 값 주입
        {
            provide: 'test-key',
            useValue: '내가 입력한 키 값2'
        },
        {
            provide: ProviderConstructorParamsService2,
            useClass: ProviderConstructorParamsService2
        }
    ],
    imports: [],
    exports: []
})
export class ProviderExampleModule {}
