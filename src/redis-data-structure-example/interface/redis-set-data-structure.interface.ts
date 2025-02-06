export interface RedisSetDataStructureInterface {
    addToSet(key: string, value: string): Promise<void>;
    getSetMembers(key: string): Promise<string[]>;
    isSetMember(key: string, value: string): Promise<boolean>;
}
