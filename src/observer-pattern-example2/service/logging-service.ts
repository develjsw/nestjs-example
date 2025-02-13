import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitterService } from '../event/event-emitter.service';

@Injectable()
export class LoggingService implements OnModuleInit {
    constructor(private readonly eventEmitterService: EventEmitterService<number>) {}

    onModuleInit(): void {
        this.eventEmitterService.userCreated.subscribe((userId: number) => {
            console.log(`로그 기록 : ${userId}가 가입함`);
        });
    }
}
