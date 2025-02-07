import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisHashDataStructureInterface } from '../interface/redis-hash-data-structure.interface';
import { RedisListDataStructureInterface } from '../interface/redis-list-data-structure.interface';
import { RedisSetDataStructureInterface } from '../interface/redis-set-data-structure.interface';
import { RedisTtlInterface } from '../interface/redis.ttl.interface';

@Injectable()
export class RedisService
    implements
        RedisHashDataStructureInterface,
        RedisListDataStructureInterface,
        RedisSetDataStructureInterface,
        RedisTtlInterface
{
    private redis: Redis;

    constructor() {
        this.redis = new Redis({
            host: '127.0.0.1',
            port: 6379
        });
    }

    /* 📌 TTL 관련 구현 */
    async setTtl(key: string, ttl: number): Promise<void> {
        await this.redis.expire(key, ttl);
    }

    async getTtl(key: string): Promise<number> {
        return this.redis.ttl(key);
    }

    /* 📌 Hash 관련 구현 */
    async setHashData(key: string, data: Record<string, any>, ttl?: number): Promise<void> {
        await this.redis.hset(key, data);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async getHashData(key: string): Promise<Record<string, any>> {
        return this.redis.hgetall(key);
    }

    async getHashField(key: string, field: string): Promise<string | null> {
        return this.redis.hget(key, field);
    }

    /* 📌 List 관련 구현 */
    async pushToLeftList(key: string, value: string, ttl?: number): Promise<void> {
        await this.redis.lpush(key, value);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async pushToRightList(key: string, value: string, ttl?: number): Promise<void> {
        await this.redis.rpush(key, value);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async pushMultipleToLeftList(key: string, values: string[], ttl?: number): Promise<void> {
        await this.redis.lpush(key, ...values);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async pushMultipleToRightList(key: string, values: string[], ttl?: number) {
        await this.redis.rpush(key, ...values);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async getListRange(key: string, start: number, end: number): Promise<string[]> {
        return this.redis.lrange(key, start, end);
    }

    async popFromRightList(key: string): Promise<string | null> {
        return this.redis.rpop(key);
    }

    async popFromLeftList(key: string): Promise<string | null> {
        return this.redis.lpop(key);
    }

    /* 📌 Set 관련 구현 */
    async addToSet(key: string, value: string, ttl?: number): Promise<void> {
        await this.redis.sadd(key, value);

        if (ttl) {
            await this.redis.expire(key, ttl);
        }
    }

    async getSetMembers(key: string): Promise<string[]> {
        return this.redis.smembers(key);
    }

    async isSetMember(key: string, value: string): Promise<boolean> {
        return !!(await this.redis.sismember(key, value));
    }
}
