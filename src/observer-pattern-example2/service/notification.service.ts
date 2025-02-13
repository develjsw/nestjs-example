import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitterService } from '../event/event-emitter.service';

@Injectable()
export class NotificationService implements OnModuleInit {
    constructor(private readonly eventEmitterService: EventEmitterService<number>) {}

    onModuleInit(): void {
        this.eventEmitterService.userCreated.subscribe((userId: number) => {
            console.log(`알림 : 새로운 사용자 ${userId}가 가입완료함`);
        });
    }
}
