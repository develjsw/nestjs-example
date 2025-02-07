export interface RedisTtlInterface {
    setTtl(key: string, ttl: number): Promise<void>;
    getTtl(key: string): Promise<number>;
}
