export interface RedisListDataStructureInterface {
    pushToList(key: string, value: string): Promise<void>;
    getListRange(key: string, start: number, end: number): Promise<string[]>;
    popFromList(key: string): Promise<string | null>;
}
