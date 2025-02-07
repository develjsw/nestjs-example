export interface RedisListDataStructureInterface {
    pushToLeftList(key: string, value: string, ttl?: number): Promise<void>;
    pushToRightList(key: string, value: string, ttl?: number): Promise<void>;
    pushMultipleToLeftList(key: string, values: string[], ttl?: number): Promise<void>;
    pushMultipleToRightList(key: string, values: string[], ttl?: number): Promise<void>;
    getListRange(key: string, start: number, end: number): Promise<string[]>;
    popFromRightList(key: string): Promise<string | null>;
    popFromLeftList(key: string): Promise<string | null>;
}
