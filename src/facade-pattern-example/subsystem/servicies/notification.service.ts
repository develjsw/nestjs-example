import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
    constructor() {}

    async sendNotification(userId: number, message: string): Promise<void> {
        // 알림 전송 로직 작성..
        console.log(`Notification Sent To User ${userId}: ${message}`);
    }
}
