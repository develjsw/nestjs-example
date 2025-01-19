import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingService {
    async log(message: string): Promise<void> {
        console.log(`Log : ${message}`);
    }
}
