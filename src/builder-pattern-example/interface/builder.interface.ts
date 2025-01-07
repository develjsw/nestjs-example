// Generic Interface (선택적 사용)
export interface BuilderInterface<T> {
    reset(): this;
    build(): T;
}
