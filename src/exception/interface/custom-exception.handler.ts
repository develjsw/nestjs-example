export interface ExceptionResponse {
    statusCode: number;
    message: string;
}

// 예외처리 전략은 interface 로 여기에 생성
// 구체적인 전략(예외 처리 로직)은 handler 폴더 안 파일에서 구현
export interface CustomExceptionHandler {
    canHandle(exception: any): boolean;
    handle(exception: any): ExceptionResponse;
}
