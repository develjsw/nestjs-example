import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EventEmitterService<T> {
    private eventSubject = new Subject<T>();

    get userCreated(): Observable<T> {
        return this.eventSubject.asObservable();
    }

    emitEvent(data: T): void {
        this.eventSubject.next(data);
    }
}
