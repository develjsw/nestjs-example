import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tb_member')
export class MemberEntity {
    @PrimaryGeneratedColumn({ type: 'int', comment: '회원 코드' })
    memberCd: number;

    @Column({ type: 'varchar', comment: '회원 이름' })
    memberNm: string;

    @Column({ type: 'varchar', comment: '별명' })
    nickName: string;

    @Column({ type: 'varchar', comment: '비밀번호' })
    password: string;

    @Column({ type: 'varchar', comment: '연락처' })
    tel: string;

    @Column({ type: 'varchar', comment: '이메일' })
    email: string;

    @Column({
        type: 'varchar',
        comment: "상태 값 (COMMON_CODE_CLASS = '01', 회원 상태 A:활성화, D:탈퇴)"
    })
    status: string;

    @CreateDateColumn({ type: 'datetime', comment: '등록 일시' })
    regDate: Date;

    @UpdateDateColumn({ type: 'datetime', comment: '수정 일시' })
    modDate: Date;

    @Column({ type: 'datetime', comment: '삭제 일시' })
    delDate: Date;

    @Column({ type: 'datetime', comment: '탈퇴 일시' })
    dropDate: Date;
}
