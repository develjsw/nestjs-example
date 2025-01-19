import { Injectable } from '@nestjs/common';
import { UserRepository } from '../subsystem/repositories/user.repository';
import { NotificationService } from '../subsystem/servicies/notification.service';
import { LoggingService } from '../subsystem/servicies/logging.service';
import { RegisterUserDto } from '../dto/register-user.dto';

@Injectable()
export class UserManageFacadeService {
    constructor(
        private readonly userService: UserRepository,
        private readonly notificationService: NotificationService,
        private readonly loggingService: LoggingService
    ) {}

    async registerUser(registerUserDto: RegisterUserDto): Promise<number> {
        const userId: number = await this.userService.createUser(registerUserDto.name);

        await this.notificationService.sendNotification(userId, 'Welcome');

        await this.loggingService.log(`User ${registerUserDto.name} Registered`);

        return userId;
    }
}
