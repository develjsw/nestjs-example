import { CustomExceptionHandler, ExceptionResponse } from '../interface/custom-exception.handler';
import { ForbiddenException } from '@nestjs/common';

export class ForbiddenErrorHandler implements CustomExceptionHandler {
    canHandle(exception: any): boolean {
        return exception instanceof ForbiddenException;
    }
    handle(exception: any): ExceptionResponse {
        return {
            statusCode: 403,
            message: exception.message || 'Forbidden'
        };
    }
}
