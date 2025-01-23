import { Injectable } from '@nestjs/common';
import { Subject } from './observer/subject';
import { ConcreteObserver } from './observer/concrete-observer';

@Injectable()
export class ObserverService {
    private subject: Subject;

    constructor() {
        this.subject = new Subject();

        // 여러 옵저버 생성 및 등록
        const obs1 = new ConcreteObserver('Observer 1');
        const obs2 = new ConcreteObserver('Observer 2');

        this.subject.attach(obs1);
        this.subject.attach(obs2);
    }

    // 상태 변경
    changeState(data: any): void {
        console.log('State changed:', data);
        this.subject.notify(data);
    }
}