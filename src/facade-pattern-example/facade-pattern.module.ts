import { Module } from '@nestjs/common';
import { FacadePatternController } from './facade-pattern.controller';
import { UserRepository } from './subsystem/repositories/user.repository';
import { NotificationService } from './subsystem/servicies/notification.service';
import { LoggingService } from './subsystem/servicies/logging.service';
import { UserManageFacadeService } from './facade/user-manage-facade.service';

@Module({
    imports: [],
    controllers: [FacadePatternController],
    providers: [UserRepository, NotificationService, LoggingService, UserManageFacadeService],
    exports: []
})
export class FacadePatternModule {}
