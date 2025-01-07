import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Product 역할 : 빌더가 생성하는 최종 객체
@Entity('members')
export class Member {
    @PrimaryGeneratedColumn({ type: 'int', comment: '회원코드 (PK)' })
    id: number;

    @Column({ type: 'varchar', comment: '회원이름' })
    name: string;

    @Column({ type: 'varchar', comment: '이메일' })
    email: string;

    @Column({ type: 'varchar', comment: '주소' })
    address: string;
}
