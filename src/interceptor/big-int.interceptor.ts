import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                if (data === undefined || data === null) {
                    return data;
                }

                // BigInt 포함된 객체를 직렬화
                return JSON.parse(serializeBigInt(data));
            })
        );
    }
}

// BigInt 처리 함수
function serializeBigInt(obj: any): string {
    return JSON.stringify(obj, (key, value) => (typeof value === 'bigint' ? Number(value) : value));
}
