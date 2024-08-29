export interface BaseListReturnType<T, U> {
    pagingInfo: T;
    list: U[];
}

export type ListReturnType<T> = BaseListReturnType<
    {
        totalCount: number;
        page: number;
        perPage: number;
    },
    T
>;

export interface SpecificListReturnType<T>
    extends BaseListReturnType<
        {
            totalCount: number;
            page: number;
            perPage: number;
        },
        T
    > {}
