import { Controller, Get } from '@nestjs/common';
import { ObserverService } from './observer.service';

@Controller('observer-pattern-example')
export class ObserverPatternController {
    constructor(private readonly observerService: ObserverService) {}

    @Get()
    observerPatternTest(): string {
        this.observerService.changeState({ message: 'Hello Observers!' });
        return 'Observers notified.';
    }
}
