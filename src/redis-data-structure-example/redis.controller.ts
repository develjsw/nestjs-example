import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from "@nestjs/common";
import { RedisService } from './service/redis.service';

@Controller('redis-data-structure-example')
export class RedisController {
    constructor(private readonly redisService: RedisService) {}

    /* 📌 Hash 관련 */
    @Post('hash/:key')
    async setHashData(@Param('key') key: string, @Body() data: { ttl?: number } & Record<string, any>) {
        const { ttl, ...dto } = data;
        await this.redisService.setHashData(key, dto, ttl);
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
    @Post('list/LIFO/:key')
    async pushToLeftList(@Param('key') key: string, @Body() value: { data: string; ttl?: number }) {
        const { ttl, data } = value;

        await this.redisService.pushToLeftList(key, data, ttl);
    }

    @Post('list/FIFO/:key')
    async pushToRightList(@Param('key') key: string, @Body() value: { data: string; ttl?: number }) {
        const { ttl, data } = value;

        await this.redisService.pushToRightList(key, data, ttl);
    }

    @Post('list/multi/LIFO/:key')
    async pushMultipleToLeftList(@Param('key') key: string, @Body() value: { data: string[]; ttl?: number }) {
        // TODO : 유효성 검사 필요
        const { ttl, data } = value;

        await this.redisService.pushMultipleToLeftList(key, data, ttl);
    }

    @Post('list/multi/FIFO/:key')
    async pushMultipleToRightList(@Param('key') key: string, @Body() value: { data: string[]; ttl?: number }) {
        // TODO : 유효성 검사 필요
        const { ttl, data } = value;

        await this.redisService.pushMultipleToRightList(key, data, ttl);
    }

    @Get('list/:key/:start/:end')
    async getListRange(
        @Param('key') key: string,
        @Param('start', ParseIntPipe) start: number,
        @Param('end', ParseIntPipe) end: number
    ) {
        return this.redisService.getListRange(key, start, end);
    }

    @Delete('list/:key/pop')
    async popFromList(@Param('key') key: string) {
        return this.redisService.popFromRightList(key);
    }

    /* 📌 Set 관련 */
    @Post('set/:key')
    async addToSet(@Param('key') key: string, @Body() value: { data: string; ttl?: number }) {
        const { ttl, data } = value;
        await this.redisService.addToSet(key, data, ttl);
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
