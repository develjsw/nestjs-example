import { BadRequestException } from '@nestjs/common';
import { CustomExceptionHandler, ExceptionResponse } from '../interface/custom-exception.handler';

export class BadRequestErrorHandler implements CustomExceptionHandler {
    canHandle(exception: any): boolean {
        return exception instanceof BadRequestException;
    }

    handle(exception: any): ExceptionResponse {
        return {
            statusCode: 400,
            message: exception.message || 'Bad Request'
        };
    }
}
