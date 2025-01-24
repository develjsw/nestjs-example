import { Catch, ExceptionFilter, Injectable } from '@nestjs/common';
import { ExceptionHandlerFactory } from '../factory/exception-handler.factory';
import { ArgumentsHost, HttpArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';
import { CustomExceptionHandler } from '../interface/custom-exception.handler';

@Catch()
@Injectable()
export class GlobalExceptionFilter implements ExceptionFilter {
    constructor(private readonly factory: ExceptionHandlerFactory) {}

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx: HttpArgumentsHost = host.switchToHttp();
        const response = ctx.getResponse();

        const handler: CustomExceptionHandler = this.factory.getHandler(exception);

        if (handler) {
            // 핸들러에서 처리
            const { statusCode, message } = handler.handle(exception);
            response.status(statusCode).json({
                statusCode,
                message
            });
        } else {
            // 기본 처리
            response.status(500).json({
                statusCode: 500,
                message: 'Unhandled Exception'
            });
        }
    }
}
