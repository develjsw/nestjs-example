import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RedisService } from './service/redis.service';

@Controller('redis-data-structure-example')
export class RedisController {
    constructor(private readonly redisService: RedisService) {}

    /* 📌 Hash 관련 */
    @Post('hash/:key')
    async setHashData(@Param('key') key: string, @Body() data: Record<string, any>) {
        await this.redisService.setHashData(key, data);
    }

    @Get('hash/:key')
    async getHashData(@Param('key') key: string) {
        return this.redisService.getHashData(key);
    }

    @Get('hash/:key/:field')
    async getHashField(@Param('key') key: string, @Param('field') field: string) {
        return this.redisService.getHashField(key, field);
    }

    /* 📌 List 관련 */
    @Post('list/:key')
    async pushToList(@Param('key') key: string, @Body() value: { data: string }) {
        await this.redisService.pushToList(key, value.data);
    }

    @Get('list/:key/:start/:end')
    async getListRange(@Param('key') key: string, @Param('start') start: number, @Param('end') end: number) {
        return this.redisService.getListRange(key, start, end);
    }

    @Post('list/:key/pop')
    async popFromList(@Param('key') key: string) {
        return this.redisService.popFromList(key);
    }

    /* 📌 Set 관련 */
    @Post('set/:key')
    async addToSet(@Param('key') key: string, @Body() value: { data: string }) {
        await this.redisService.addToSet(key, value.data);
    }

    @Get('set/:key')
    async getSetMembers(@Param('key') key: string) {
        return this.redisService.getSetMembers(key);
    }

    @Get('set/:key/:value')
    async isSetMember(@Param('key') key: string, @Param('value') value: string) {
        return this.redisService.isSetMember(key, value);
    }
}
