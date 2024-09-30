import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                // data - undefined, null, 빈 값 예외처리
                if (data === undefined || data === null) {
                    return data;
                }

                return JSON.parse(serializeBigIntAndDateTime(data));
            })
        );
    }
}

function serializeBigIntAndDateTime(obj: any): string {
    return JSON.stringify(obj, (key, value) => {
        // bigint 처리
        if (typeof value === 'bigint') {
            return Number(value);
        }

        if (typeof value === 'string' && isValidDate(value)) {
            return moment(value).format('YYYY-MM-DD HH:mm:ss');
        }

        return value;
    });
}

function isValidDate(value: string): boolean {
    return moment(value, moment.ISO_8601, true).isValid();
}
