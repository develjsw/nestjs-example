import { Module } from '@nestjs/common';
import { RedisController } from './redis.controller';
import { RedisService } from './service/redis.service';

@Module({
    imports: [],
    controllers: [RedisController],
    providers: [RedisService],
    exports: []
})
export class RedisModule {}
