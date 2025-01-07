import { Injectable } from '@nestjs/common';
import { Member } from '../entities/mysql/member.entity';
import { MemberBuilderInterface } from '../interface/member-builder.interface';

// Concrete Builder 역할 : 객체 생성에 필요한 메서드를 구현
@Injectable()
export class MemberBuilderService implements MemberBuilderInterface {
    private member: Member;

    constructor() {
        this.member = new Member();
    }

    /* 객체 설정 메서드 */
    setMemberId(memberId: number): this {
        this.member.id = memberId;
        return this;
    }

    setMemberName(memberName: string): this {
        this.member.name = memberName;
        return this;
    }

    setEmail(email: string): this {
        this.member.email = email;
        return this;
    }

    setAddress(address: string): this {
        this.member.address = address;
        return this;
    }

    // 새로운 객체 생성 메서드
    reset(): this {
        this.member = new Member();
        return this;
    }

    // 객체 생성 메서드
    build(): Member {
        return this.member;
    }
}
