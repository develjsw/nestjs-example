import { CustomExceptionHandler, ExceptionResponse } from '../interface/custom-exception.handler';
import { BadGatewayException } from '@nestjs/common';

export class BadGatewayErrorHandler implements CustomExceptionHandler {
    canHandle(exception: any): boolean {
        return exception instanceof BadGatewayException;
    }
    handle(exception: any): ExceptionResponse {
        return {
            statusCode: 502,
            message: exception.message || 'Bad Gateway'
        };
    }
}
