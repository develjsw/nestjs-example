import { Injectable } from '@nestjs/common';

@Injectable()
export class BuilderPatternService {
    private memberId: number;
    private memberName: string;
    private email: string;
    private address: string;

    constructor() {}

    setMemberId(memberId: number): this {
        this.memberId = memberId;
        return this;
    }

    setMemberName(memberName: string): this {
        this.memberName = memberName;
        return this;
    }

    setEmail(email: string): this {
        this.email = email;
        return this;
    }

    setAddress(address: string) {
        this.address = address;
        return this;
    }

    getMember(): any {
        return {
            memberId: this.memberId,
            memberName: this.memberName,
            email: this.email,
            address: this.address
        };
    }
}
