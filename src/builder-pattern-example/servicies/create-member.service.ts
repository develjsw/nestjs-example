import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { Member } from '../entities/mysql/member.entity';
import { MemberBuilderService } from './member-builder.service';

// Director 역할 : 객체 생성의 순서를 정의
@Injectable()
export class CreateMemberService {
    constructor(private readonly memberBuilderService: MemberBuilderService) {}

    async createMember(createMemberDto: CreateMemberDto): Promise<Member> {
        const { memberId, memberName, email, address } = createMemberDto;

        /*
            1. member1, member2, member3은 모두 같은 값을 반환함
            [ 이유 ]
            - MemberBuilderService는 DI 컨테이너에 의해 싱글턴으로 관리되므로, 하나의 인스턴스를 재사용함
            - setMemberId(), setMemberName() 등의 메서드들은 내부 상태(this.member)를 수정하고, 같은 객체를 반환함
            - build() 메서드는 내부 상태(this.member)를 반환하므로, 여러 호출 간에 동일한 객체를 참조하게 됨
            - 별도의 새로운 요청이 들어오는 경우를 제외하고 같은 객체가 반환됨
        */
        const member1: Member = this.memberBuilderService
            .setMemberId(memberId)
            .setMemberName(memberName)
            .setEmail(email)
            .setAddress(address)
            .build();

        const member2: Member = this.memberBuilderService
            .setMemberId(memberId)
            .setMemberName(memberName)
            .setAddress(address)
            .build();

        const member3: Member = this.memberBuilderService
            .setMemberId(memberId)
            .setMemberName(memberName)
            .build();

        console.log('Member1 생성 완료 : ', member1);
        console.log('Member2 생성 완료 : ', member2);
        console.log('Member3 생성 완료 : ', member3);

        /*
            2. reset() 메서드는 새로운 객체를 생성하므로 초기화가 발생함
                단, reset() 호출 시점에 따라 초기화되는 데이터가 달라짐
        */
        const member4: Member = this.memberBuilderService
            .reset()
            .setMemberId(memberId)
            .build();

        const member5: Member = this.memberBuilderService
            .setMemberId(memberId)
            .setMemberName(memberName)
            .reset()
            .build();

        console.log('Member4 생성 완료 : ', member4);
        console.log('Member5 생성 완료 : ', member5);

        return member1;
    }
}
