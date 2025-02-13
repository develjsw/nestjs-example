import { Injectable } from '@nestjs/common';
import { EventEmitterService } from '../event/event-emitter.service';

@Injectable()
export class UserService {
    constructor(private readonly eventEmitterService: EventEmitterService<number>) {}

    createUser(userId: number): void {
        console.log(`사용자 ${userId} 생성 완료`);

        // 이벤트 발생
        this.eventEmitterService.emitEvent(userId);
    }
}
