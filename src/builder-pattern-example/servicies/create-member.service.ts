import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { BuilderPatternService } from './builder-pattern.service';

@Injectable()
export class CreateMemberService {
    constructor(private readonly builderPatternService: BuilderPatternService) {}

    async createMember(createMemberDto: CreateMemberDto): Promise<void> {
        const { memberId, memberName, email, address } = createMemberDto;

        console.log(
            this.builderPatternService
                .setMemberId(memberId)
                .setMemberName(memberName)
                .setEmail(email)
                .setAddress(address)
        );

        console.log(
            this.builderPatternService
                .setMemberId(memberId)
                .setMemberName(memberName)
                .setEmail(email)
                .setAddress(address)
                .getMember()
        );
    }
}
