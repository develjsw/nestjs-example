import { MemberEntity } from '../entities/mysql/member.entity';
import { GoodsEntity } from '../entities/mysql/goods.entity';
import { PaymentsEntity } from '../entities/mysql/payments.entity';

// 타입-1 (객체 엔티티들)
export type DetailReturnType<T> = {
    [K in keyof T]: Partial<T[K]>;
};
export type MemberAndGoods = DetailReturnType<{ member: MemberEntity; goods: GoodsEntity }>;

// 타입-2 (객체 엔티티 + 배열 객체 엔티티)
export type DetailArrayReturnType<T> = {
    [K in keyof T]: T[K] extends Array<infer U> ? Partial<U>[] : Partial<T[K]>;
};
export type MemberAndGoodsList = DetailArrayReturnType<{ member: MemberEntity; goodsList: GoodsEntity[] }>;
export type MemberAndGoodsListAndPaymentsList = DetailArrayReturnType<{
    member: MemberEntity;
    goodsList: GoodsEntity[];
    paymentsList: PaymentsEntity[];
}>;

// 타입-3 (병합된 엔티티)
// 회원 엔티티와 상품 엔티티를 병합하되, 중복되는 컬럼 중 regDate, delDate는 회원 엔티티 기준으로 사용
export type MemberGoods = Partial<MemberEntity> & Partial<Omit<GoodsEntity, 'regDate' | 'delDate'>>;
