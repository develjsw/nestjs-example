import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisHashDataStructureInterface } from '../interface/redis-hash-data-structure.interface';
import { RedisListDataStructureInterface } from '../interface/redis-list-data-structure.interface';
import { RedisSetDataStructureInterface } from '../interface/redis-set-data-structure.interface';

@Injectable()
export class RedisService
    implements RedisHashDataStructureInterface, RedisListDataStructureInterface, RedisSetDataStructureInterface
{
    private redis: Redis;

    constructor() {
        this.redis = new Redis({
            host: '127.0.0.1',
            port: 6379
        });
    }

    /* 📌 Hash 관련 구현 */
    async setHashData(key: string, data: Record<string, any>): Promise<void> {
        await this.redis.hset(key, data);
    }

    async getHashData(key: string): Promise<Record<string, any>> {
        return this.redis.hgetall(key);
    }

    async getHashField(key: string, field: string): Promise<string | null> {
        return this.redis.hget(key, field);
    }

    /* 📌 List 관련 구현 */
    async pushToList(key: string, value: string): Promise<void> {
        await this.redis.lpush(key, value);
    }

    async getListRange(key: string, start: number, end: number): Promise<string[]> {
        return this.redis.lrange(key, start, end);
    }

    async popFromList(key: string): Promise<string | null> {
        return this.redis.rpop(key);
    }

    /* 📌 Set 관련 구현 */
    async addToSet(key: string, value: string): Promise<void> {
        await this.redis.sadd(key, value);
    }

    async getSetMembers(key: string): Promise<string[]> {
        return this.redis.smembers(key);
    }

    async isSetMember(key: string, value: string): Promise<boolean> {
        return !!(await this.redis.sismember(key, value));
    }
}
