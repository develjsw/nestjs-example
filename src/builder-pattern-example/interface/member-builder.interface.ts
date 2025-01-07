import { BuilderInterface } from './builder.interface';
import { Member } from '../entities/mysql/member.entity';

// Member Interface (선택적 사용 - Builder 패턴에 꼭 필요한 부분은 아니라는 의미)
export interface MemberBuilderInterface extends BuilderInterface<Member> {
    setMemberId(memberId: number): this;
    setMemberName(memberName: string): this;
    setEmail(email: string): this;
    setAddress(address: string): this;
}
