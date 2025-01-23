import { Observer } from './observer.interface';

export class ConcreteObserver implements Observer {
    constructor(private readonly name: string) {}

    update(data: any): void {
        console.log(`${this.name} received update:`, data);
    }
}
