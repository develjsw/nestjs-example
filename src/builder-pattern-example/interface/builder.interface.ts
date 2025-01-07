// Common Generic Interface (선택적 사용 - Builder 패턴에 꼭 필요한 부분은 아니라는 의미)
export interface BuilderInterface<T> {
    reset(): this;
    build(): T;
}
