import { Observer } from './observer.interface';

export class Subject {
    private observers: Observer[] = [];

    // 옵저버 등록
    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    // 옵저버 제거
    detach(observer: Observer): void {
        this.observers = this.observers.filter((obs: Observer) => obs !== observer);
    }

    // 상태 변화 알림
    notify(data: any): void {
        this.observers.forEach((obs: Observer) => obs.update(data));
    }
}
