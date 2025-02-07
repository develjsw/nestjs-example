export interface RedisHashDataStructureInterface {
    setHashData(key: string, data: Record<string, any>, ttl?: number): Promise<void>;
    getHashData(key: string): Promise<Record<string, any>>;
    getHashField(key: string, field: string): Promise<string | null>;
}
