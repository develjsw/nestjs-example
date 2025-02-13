import { Module } from '@nestjs/common';
import { EventEmitterService } from './event/event-emitter.service';
import { LoggingService } from './service/logging-service';
import { NotificationService } from './service/notification.service';
import { UserService } from './service/user.service';
import { ObserverPatternExample2Controller } from './observer-pattern-example2.controller';

@Module({
    imports: [],
    controllers: [ObserverPatternExample2Controller],
    providers: [EventEmitterService, LoggingService, NotificationService, UserService],
    exports: []
})
export class ObserverPatternExample2Module {}
