// 객체 인터페이스 ex.1) { key: value } ex.2) {}
export interface ObjectReturnType {}

// 빈 객체 타입
export type EmptyObjectReturnType = Record<string, never>;
//export type EmptyObjectReturnType = ObjectReturnType & Record<string, never>;
