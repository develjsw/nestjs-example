import { CustomExceptionHandler, ExceptionResponse } from '../interface/custom-exception.handler';
import { InternalServerErrorException } from '@nestjs/common';

export class InternalServerErrorHandler implements CustomExceptionHandler {
    canHandle(exception: any): boolean {
        return exception instanceof InternalServerErrorException;
    }
    handle(exception: any): ExceptionResponse {
        return {
            statusCode: 500,
            message: exception.message || 'Internal Server Error'
        };
    }
}
