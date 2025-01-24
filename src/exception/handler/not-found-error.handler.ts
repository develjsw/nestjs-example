import { CustomExceptionHandler, ExceptionResponse } from '../interface/custom-exception.handler';
import { NotFoundException } from '@nestjs/common';

export class NotFoundErrorHandler implements CustomExceptionHandler {
    canHandle(exception: any): boolean {
        return exception instanceof NotFoundException;
    }
    handle(exception: any): ExceptionResponse {
        return {
            statusCode: 404,
            message: exception.message || 'Not Found'
        };
    }
}
