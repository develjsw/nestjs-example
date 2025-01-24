import { CustomExceptionHandler } from '../interface/custom-exception.handler';
import { Injectable } from '@nestjs/common';
import { BadGatewayErrorHandler } from '../handler/bad-gateway-error.handler';
import { BadRequestErrorHandler } from '../handler/bad-request-error.handler';
import { ForbiddenErrorHandler } from '../handler/forbidden-error.handler';
import { InternalServerErrorHandler } from '../handler/internal-server-error.handler';
import { NotFoundErrorHandler } from '../handler/not-found-error.handler';

@Injectable()
// 다양한 CustomExceptionHandler 구현체 (handler 파일 안 클래스들) 를 생성 및 관리하는 역할의 클래스
export class ExceptionHandlerFactory {
    constructor(
        private readonly badGatewayErrorHandler: BadGatewayErrorHandler,
        private readonly badRequestErrorHandler: BadRequestErrorHandler,
        private readonly forbiddenErrorHandler: ForbiddenErrorHandler,
        private readonly internalServerErrorHandler: InternalServerErrorHandler,
        private readonly notFoundErrorHandler: NotFoundErrorHandler
    ) {}

    private handlers: CustomExceptionHandler[] = [];

    onModuleInit() {
        /*
          onModuleInit
          - 클래스가 @Injectable()로 선언되고 DI에 의해 생성된 경우에만 호출됨
          - 인터페이스(OnModuleInit)를 구현하면, NestJS는 이를 감지하고 해당 메서드를 호출함
        */
        console.log('NestJS Hook 동작 확인');
        this.handlers = [
            this.badGatewayErrorHandler,
            this.badRequestErrorHandler,
            this.forbiddenErrorHandler,
            this.internalServerErrorHandler,
            this.notFoundErrorHandler
        ];
    }

    getHandler(exception: unknown): CustomExceptionHandler {
        return this.handlers.find((handler: CustomExceptionHandler) => handler.canHandle(exception));
    }
}
