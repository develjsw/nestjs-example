import { Module } from '@nestjs/common';
import { ObserverPatternController } from './observer-pattern.controller';
import { ObserverService } from './observer.service';

@Module({
    imports: [],
    controllers: [ObserverPatternController],
    providers: [ObserverService],
    exports: []
})
export class ObserverPatternModule {}
